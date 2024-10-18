class Pokemon {
    constructor(id, name, hpElementId, progressbarElementId, defaultHP = 100) {
        this.id = id;
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = defaultHP;
        this.elHP = document.getElementById(hpElementId);
        this.elProgressbar = document.getElementById(progressbarElementId);
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        this.elHP.innerText = `${this.damageHP} / ${this.defaultHP}`;
    }

    renderProgressbarHP() {
        const healthPercent = (this.damageHP / this.defaultHP) * 100;
        this.elProgressbar.style.width = `${healthPercent}%`;
        this.updateProgressbarColor(healthPercent);
    }

    updateProgressbarColor(healthPercent) {
        if (healthPercent > 70) {
            this.elProgressbar.style.background = 'linear-gradient(to right, lime, #8bf500)';
        } else if (healthPercent > 30) {
            this.elProgressbar.style.background = 'linear-gradient(to right, #ffcc00, #f1f500)';
        } else {
            this.elProgressbar.style.background = 'linear-gradient(to right, #d20000, #f51700)';
        }
    }

    changeHP(count) {
        this.damageHP = Math.max(this.damageHP - count, 0);
        this.renderHP();
    }
}

export default Pokemon;
