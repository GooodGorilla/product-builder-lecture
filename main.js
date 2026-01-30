class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const { background, color } = this.getColor(parseInt(number, 10));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: ${color};
                    background-color: ${background};
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                }

                @keyframes pop-in {
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            </style>
            <span>${number}</span>
        `;
    }

    getColor(number) {
        const colors = [
            { range: [1, 10], background: '#fbc400', color: '#333' },   // Yellow
            { range: [11, 20], background: '#69c8f2', color: '#fff' },  // Blue
            { range: [21, 30], background: '#ff7272', color: '#fff' },  // Red
            { range: [31, 40], background: '#aaa', color: '#fff' },       // Gray
            { range: [41, 45], background: '#b0d840', color: '#333' }   // Green
        ];
        return colors.find(({ range }) => number >= range[0] && number <= range[1]) || { background: '#aaa', color: '#fff' };
    }
}

customElements.define('lotto-ball', LottoBall);

const drawButton = document.getElementById('draw-button');
const numbersContainer = document.getElementById('lotto-numbers');

drawButton.addEventListener('click', () => {
    drawButton.disabled = true;
    numbersContainer.innerHTML = '';
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const ball = document.createElement('lotto-ball');
            ball.setAttribute('number', number);
            numbersContainer.appendChild(ball);

            if (index === sortedNumbers.length - 1) {
                drawButton.disabled = false;
            }
        }, index * 600); // 600ms delay between each ball
    });
});
