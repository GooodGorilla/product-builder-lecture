let dinnerMenus = [];

const recommendButton = document.getElementById('recommend-button');
const menuContainer = document.getElementById('menu-recommendation');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
const dropArea = document.getElementById('drop-area');

async function setLanguage(lang) {
    const response = await fetch(`${lang}.json`);
    const data = await response.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            if (el.tagName === 'TITLE') {
                el.textContent = data[key];
            } else {
                el.innerHTML = data[key];
            }
        }
    });

    dinnerMenus = data.dinner_menus;
    localStorage.setItem('language', lang);
}

recommendButton.addEventListener('click', () => {
    recommendButton.disabled = true;
    menuContainer.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    let menuElement;
    if (recommendedMenu.startsWith('data:image')) {
        menuElement = document.createElement('img');
        menuElement.src = recommendedMenu;
        menuElement.style.maxWidth = '100%';
        menuElement.style.maxHeight = '200px';
    } else {
        menuElement = document.createElement('div');
        menuElement.textContent = recommendedMenu;
        menuElement.style.fontSize = '2rem';
        menuElement.style.fontWeight = 'bold';
    }
    
    menuElement.style.animation = 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

    menuContainer.appendChild(menuElement);

    setTimeout(() => {
        recommendButton.disabled = false;
    }, 500);
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

langKoButton.addEventListener('click', () => setLanguage('ko'));
langEnButton.addEventListener('click', () => setLanguage('en'));

// Drag and drop
dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', (event) => {
    event.stopPropagation();
    event.preventDefault();
    dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    dropArea.classList.remove('highlight');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                dinnerMenus.push(e.target.result);
                alert('Image added to the menu!');
            };
            reader.readAsDataURL(file);
        }
    }
});


// Initial load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

const savedLang = localStorage.getItem('language') || 'ko';
setLanguage(savedLang);

