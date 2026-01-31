let dinnerMenus = [];

const recommendButton = document.getElementById('recommend-button');
const menuContainer = document.getElementById('menu-recommendation');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
const imageUpload = document.getElementById('image-upload');
const imagePreviewContainer = document.getElementById('image-preview-container');
const addMenuButton = document.getElementById('add-menu-button');
const menuNameInput = document.getElementById('menu-name-input');

let selectedImage = null;

async function setLanguage(lang) {
    const response = await fetch(`${lang}.json`);
    const data = await response.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            if (el.tagName === 'TITLE' || el.tagName === 'BUTTON' || el.tagName === 'LABEL' || el.tagName === 'H1' || el.tagName === 'H2') {
                el.textContent = data[key];
            } else {
                el.innerHTML = data[key];
            }
        }
    });

    if (data.dinner_menus) {
        dinnerMenus = data.dinner_menus;
    }
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

langKoButton.addEventListener('click', () => setLanguage('ko'));
langEnButton.addEventListener('click', () => setLanguage('en'));

recommendButton.addEventListener('click', () => {
    recommendButton.disabled = true;
    menuContainer.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    const menuElement = document.createElement('div');
    menuElement.style.animation = 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

    const nameElement = document.createElement('div');
    nameElement.textContent = recommendedMenu.name;
    nameElement.style.fontSize = '2rem';
    nameElement.style.fontWeight = 'bold';

    const imageElement = document.createElement('img');
    imageElement.src = recommendedMenu.image;
    imageElement.style.maxWidth = '100%';
    imageElement.style.maxHeight = '200px';

    menuElement.appendChild(imageElement);
    menuElement.appendChild(nameElement);
    menuContainer.appendChild(menuElement);

    setTimeout(() => {
        recommendButton.disabled = false;
    }, 500);
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedImage = e.target.result;
            imagePreviewContainer.innerHTML = `<img src="${selectedImage}" style="max-width: 100%; max-height: 200px;">`;
        };
        reader.readAsDataURL(file);
    }
});

addMenuButton.addEventListener('click', () => {
    const name = menuNameInput.value;
    if (name && selectedImage) {
        dinnerMenus.push({ name, image: selectedImage });
        selectedImage = null;
        menuNameInput.value = '';
        imagePreviewContainer.innerHTML = '';
        alert('Menu added!');
    } else {
        alert('Please enter a name and select an image.');
    }
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

const savedLang = localStorage.getItem('language') || 'ko';
setLanguage(savedLang);