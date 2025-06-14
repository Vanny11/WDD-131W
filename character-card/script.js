const character = {
    name: "Aurelia",
    class: "Butterfly Knight",
    level: 3,
    health: 120,
    image: "aurelia-butterfly-knight.png",
    // Local image path
    attacked() {
      if (this.health >= 15) {
        this.health -= 15;
      } else {
        this.health = 0;
        alert("Aurelia has fallen...");
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 25;
    }
  };
  
  function updateCard() {
    document.querySelector(".image").src = character.image;
    document.querySelector(".image").alt = `${character.name}, the ${character.class}`;
    document.querySelector(".name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("log").textContent =
      `🦋 ${character.name} (Lvl ${character.level}) — Health: ${character.health}`;
  }
  
  document.getElementById("attacked").addEventListener("click", () => {
    character.attacked();
    updateCard();
  });
  
  document.getElementById("levelup").addEventListener("click", () => {
    character.levelUp();
    updateCard();
  });
  
  // Initialize card on load
  updateCard();
  