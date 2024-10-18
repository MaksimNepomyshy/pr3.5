import Pokemon from './pokemon.js';
import { attack } from './battle.js';

const character = new Pokemon(
    'character',
    'Pikachu',
    'health-character',
    'progressbar-character'
);

const enemies = [
    new Pokemon(1, 'Charmander', 'health-enemy-1', 'progressbar-enemy-1'),
    new Pokemon(2, 'Squirtle', 'health-enemy-2', 'progressbar-enemy-2')
];

let currentEnemyIndex = 0;
let currentEnemy = enemies[currentEnemyIndex];

const init = () => {
    console.log('Start Game!');
    character.renderHP();
    enemies.forEach(enemy => enemy.renderHP());

    const $btnKick = document.getElementById('btn-kick');
    const $btnSpecial = document.getElementById('btn-special');

    // Лічильники атак
    const kickCounter = createCounter(6, $btnKick);
    const specialCounter = createCounter(8, $btnSpecial);

    $btnKick.addEventListener('click', () => {
        if (kickCounter()) {
            attack(character, currentEnemy, 'kick');
        }
    });

    $btnSpecial.addEventListener('click', () => {
        if (specialCounter()) {
            attack(character, currentEnemy, 'special');
        }
    });
};

// Функція лічильника
function createCounter(maxClicks, button) {
    let count = 0;
    const clicksLeftSpan = document.createElement("span"); 
    clicksLeftSpan.textContent = ` (${maxClicks} left)`; 
    button.appendChild(clicksLeftSpan); 

    return function() {
        if (count < maxClicks) {
            count++;
            clicksLeftSpan.textContent = ` (${maxClicks - count} left)`;

            if (count === maxClicks) {
                button.disabled = true;
            }
            return true;
        }
        return false;
    };
}

init();
