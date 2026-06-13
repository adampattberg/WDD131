const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        updateCard();
    },

    levelUp() {
        this.level++;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
}

document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
    character.levelUp();
});

updateCard();