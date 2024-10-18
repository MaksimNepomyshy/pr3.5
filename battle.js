import Pokemon from './pokemon.js';

const attack = (attacker, target, attackType) => {
    let damage = random(20);

    if (attackType === 'special') {
        damage = Math.ceil(damage * 1.5);
    }

    target.changeHP(damage);
    logAttack(attacker, target, damage);

    if (target.damageHP > 0) {
        setTimeout(() => {
            const counterDamage = random(15);
            attacker.changeHP(counterDamage);
            logAttack(target, attacker, counterDamage);
        }, 1000);
    }
};

const logAttack = (attacker, target, damage) => {
    const $logs = document.getElementById('logs');
    const log = document.createElement('p');
    log.innerText = `${attacker.name} наніс ${target.name} ${damage} урона. ${target.name}: ${target.damageHP} HP`;
    $logs.prepend(log);
};

const random = (num) => Math.ceil(Math.random() * num);

export { attack };
