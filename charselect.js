// Initialize Hero constructor
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add a new method
Hero.prototype.greet = function () {
  return `Hello, I'm ${this.name}!`;
};

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}`;
}

const hero1 = new Warrior('Vader', 1, 'axe');
const hero3 = new Healer('Leia', 1, 'cure');

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero1.greet()); // Hello, I'm Vader!
console.log(hero1.attack()); // Vader attacks with the axe