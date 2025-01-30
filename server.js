const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/turkmentravel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Модели данных
const TourSchema = new mongoose.Schema({
  name: String,
  duration: String,
  price: String,
  description: String
});
const Tour = mongoose.model('Tour', TourSchema);

const ImageSchema = new mongoose.Schema({
  filename: String,
  description: String
});
const Image = mongoose.model('Image', ImageSchema);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
});
const Admin = mongoose.model('Admin', AdminSchema);

// Конфигурация Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Middleware аутентификации
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.adminId = decoded.id;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

// Регистрация администратора (выполнить один раз)
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    res.status(201).send('Admin created');
  } catch (error) {
    res.status(500).send('Error creating admin');
  }
});

// Логин
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).send('User not found');

    const validPass = await bcrypt.compare(password, admin.password);
    if (!validPass) return res.status(401).send('Invalid password');

    const token = jwt.sign({ id: admin._id }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Login error');
  }
});

// Работа с турами
app.get('/api/tours', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).send('Error fetching tours');
  }
});

app.post('/api/tours', authenticate, async (req, res) => {
  try {
    const tour = new Tour(req.body);
    await tour.save();
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).send('Error creating tour');
  }
});

app.delete('/api/tours/:id', authenticate, async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.send('Tour deleted');
  } catch (error) {
    res.status(500).send('Error deleting tour');
  }
});

// Работа с галереей
app.post('/api/upload', authenticate, upload.single('image'), async (req, res) => {
  try {
    const image = new Image({
      filename: req.file.filename,
      description: req.body.description
    });
    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).send('Error uploading image');
  }
});

app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).send('Error fetching images');
  }
});

// Управление контактами
app.post('/api/contacts', authenticate, async (req, res) => {
  try {
    // Здесь должна быть логика сохранения контактов
    res.send('Contacts updated');
  } catch (error) {
    res.status(500).send('Error saving contacts');
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
