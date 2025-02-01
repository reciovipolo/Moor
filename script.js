// Объект переводов
const translations = {
  ru: {
    nav: {
      tours: "Туры",
      about: "О нас",
      contacts: "Контакты"
    },
    banner: "Путешествия по Туркменистану",
    toursSection: "Популярные туры",
    tour1: {
      title: "Великий Шелковый путь",
      duration: "Длительность: 7 дней",
      price: "Цена: от $850",
      button: "Подробнее"
    },
    tour2: {
      title: "Кратер Дарваза",
      duration: "Длительность: 2 дня",
      price: "Цена: от $300",
      button: "Подробнее"
    },
    tour3: {
      title: "Исторический Мерв",
      duration: "Длительность: 1 день",
      price: "Цена: от $150",
      button: "Подробнее"
    },
    tour4: {
      title: "Столичный тур",
      duration: "Длительность: 3 дня",
      price: "Цена: от $450",
      button: "Подробнее"
    },
    about: {
      title: "О нашей компании",
      text: "С 2020 года мы организуем уникальные путешествия по Туркменистану. Наша команда профессиональных гидов и экспертов по культуре поможет вам раскрыть все тайны древних цивилизаций и современного Туркменистана. Более 5000 довольных клиентов со всего мира!"
    },
    feedback: {
      title: "Обратная связь",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Введите ваше имя",
      emailLabel: "Ваш email:",
      emailPlaceholder: "Введите ваш email",
      messageLabel: "Ваше сообщение:",
      messagePlaceholder: "Напишите ваше сообщение",
      submitButton: "Отправить"
    },
    footer: "© 2025 Turkmen Travel. Все права защищены<br>Лицензия туроператора № TR-0154"
  },
  en: {
    nav: {
      tours: "Tours",
      about: "About Us",
      contacts: "Contacts"
    },
    banner: "Travel in Turkmenistan",
    toursSection: "Popular Tours",
    tour1: {
      title: "Great Silk Road",
      duration: "Duration: 7 days",
      price: "Price: from $850",
      button: "Read More"
    },
    tour2: {
      title: "Darvaza Crater",
      duration: "Duration: 2 days",
      price: "Price: from $300",
      button: "Read More"
    },
    tour3: {
      title: "Historic Merv",
      duration: "Duration: 1 day",
      price: "Price: from $150",
      button: "Read More"
    },
    tour4: {
      title: "Capital Tour",
      duration: "Duration: 3 days",
      price: "Price: from $450",
      button: "Read More"
    },
    about: {
      title: "About Our Company",
      text: "Since 2020, we have been organizing unique trips in Turkmenistan. Our team of professional guides and cultural experts will help you discover the secrets of ancient civilizations and modern Turkmenistan. Over 5000 satisfied clients worldwide!"
    },
    feedback: {
      title: "Feedback",
      nameLabel: "Your Name:",
      namePlaceholder: "Enter your name",
      emailLabel: "Your Email:",
      emailPlaceholder: "Enter your email",
      messageLabel: "Your Message:",
      messagePlaceholder: "Write your message",
      submitButton: "Submit"
    },
    footer: "© 2025 Turkmen Travel. All rights reserved<br>Tour operator license № TR-0154"
  }
};

// Функция для установки языка
function setLanguage(lang) {
  // Навигация
  document.getElementById('nav-tours').textContent = translations[lang].nav.tours;
  document.getElementById('nav-about').textContent = translations[lang].nav.about;
  document.getElementById('nav-contacts').textContent = translations[lang].nav.contacts;
  // Обновляем флаг в кнопке языка
  const langSwitch = document.getElementById('lang-switch');
  const flagIcon = document.getElementById('current-flag');
  if (lang === 'ru') {
    flagIcon.textContent = "🇷🇺";
  } else {
    flagIcon.textContent = "🇬🇧";
  }
  // Баннер
  document.getElementById('banner-title').textContent = translations[lang].banner;
  // Секция туров
  document.getElementById('tours-section-title').textContent = translations[lang].toursSection;
  // Тур 1
  document.getElementById('tour1-title').textContent = translations[lang].tour1.title;
  document.getElementById('tour1-duration').textContent = translations[lang].tour1.duration;
  document.getElementById('tour1-price').textContent = translations[lang].tour1.price;
  document.getElementById('tour1-button').textContent = translations[lang].tour1.button;
  // Тур 2
  document.getElementById('tour2-title').textContent = translations[lang].tour2.title;
  document.getElementById('tour2-duration').textContent = translations[lang].tour2.duration;
  document.getElementById('tour2-price').textContent = translations[lang].tour2.price;
  document.getElementById('tour2-button').textContent = translations[lang].tour2.button;
  // Тур 3
  document.getElementById('tour3-title').textContent = translations[lang].tour3.title;
  document.getElementById('tour3-duration').textContent = translations[lang].tour3.duration;
  document.getElementById('tour3-price').textContent = translations[lang].tour3.price;
  document.getElementById('tour3-button').textContent = translations[lang].tour3.button;
  // Тур 4
  document.getElementById('tour4-title').textContent = translations[lang].tour4.title;
  document.getElementById('tour4-duration').textContent = translations[lang].tour4.duration;
  document.getElementById('tour4-price').textContent = translations[lang].tour4.price;
  document.getElementById('tour4-button').textContent = translations[lang].tour4.button;
  // О компании
  document.getElementById('about-title').textContent = translations[lang].about.title;
  document.getElementById('about-text').textContent = translations[lang].about.text;
  // Форма обратной связи
  document.getElementById('feedback-title').textContent = translations[lang].feedback.title;
  document.getElementById('label-name').textContent = translations[lang].feedback.nameLabel;
  document.getElementById('name').placeholder = translations[lang].feedback.namePlaceholder;
  document.getElementById('label-email').textContent = translations[lang].feedback.emailLabel;
  document.getElementById('email').placeholder = translations[lang].feedback.emailPlaceholder;
  document.getElementById('label-message').textContent = translations[lang].feedback.messageLabel;
  document.getElementById('message').placeholder = translations[lang].feedback.messagePlaceholder;
  document.getElementById('submit-button').textContent = translations[lang].feedback.submitButton;
  // Футер
  document.getElementById('footer-text').innerHTML = translations[lang].footer;
  // Сохраняем выбор языка
  localStorage.setItem('language', lang);
}
// Функция переключения языка при нажатии на кнопку
function toggleLanguage() {
  const currentLang = localStorage.getItem('language') || 'ru';
  const newLang = currentLang === 'ru' ? 'en' : 'ru';
  setLanguage(newLang);
}
// При загрузке страницы устанавливаем сохранённый язык или русский по умолчанию
const savedLanguage = localStorage.getItem('language') || 'ru';
setLanguage(savedLanguage);

// Функция переключения темы
function toggleTheme() {
  const body = document.body;
  const themeButtonIcon = document.querySelector('.theme-toggle-nav i');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeButtonIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeButtonIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
}
// Устанавливаем сохранённую тему
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  document.querySelector('.theme-toggle-nav i').classList.replace('fa-moon', 'fa-sun');
}
// Скрипт для галереи
const slider = document.querySelector('.gallery-slider');
const items = document.querySelectorAll('.gallery-item');
const itemWidth = items[0].offsetWidth + 20;
document.querySelector('.next').addEventListener('click', () => {
  slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
});
document.querySelector('.prev').addEventListener('click', () => {
  slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});
// Плавная прокрутка для меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Обработка формы обратной связи
document.getElementById('feedback-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('Данные формы:', data);
  this.reset();
  alert('Спасибо! Ваше сообщение отправлено.');
});
