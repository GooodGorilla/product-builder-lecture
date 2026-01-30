const dinnerMenus = [
    "Chicken",
    "Pizza",
    "Sushi",
    "Pasta",
    "Burger",
    "Taco",
    "Steak",
    "Salad",
    "Ramen",
    "Fried Rice"
];

const recommendButton = document.getElementById('recommend-button');
const menuContainer = document.getElementById('menu-recommendation');

recommendButton.addEventListener('click', () => {
    recommendButton.disabled = true;
    menuContainer.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    // Create a new element to display the menu
    const menuElement = document.createElement('div');
    menuElement.textContent = recommendedMenu;
    menuElement.style.fontSize = '2rem';
    menuElement.style.fontWeight = 'bold';
    
    // Add a little animation
    menuElement.style.animation = 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

    menuContainer.appendChild(menuElement);

    setTimeout(() => {
        recommendButton.disabled = false;
    }, 500);
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

