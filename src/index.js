// Character.js
class Character {
  constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;

      if (this.name.length < 2 || this.name.length > 10) {
          throw new Error('Имя должно быть от 2 до 10 символов.');
      }

      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!types.includes(this.type)) {
          throw new Error(`Тип должен быть одним из: ${types.join(', ')}`);
      }
      
      // Инициализация значений attack и defence в базовом классе
      this.attack = 0; // Будет переопределено в подклассах
      this.defence = 0; // Будет переопределено в подклассах
  }

  levelUp() {
      if (this.health <= 0) {
          throw new Error("Нельзя повысить уровень мертвого персонажа.");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
  }

  damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
          this.health = 0;
      }
  }
}

export default Character;


class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

export { Bowman, Swordsman, Magician, Daemon, Undead, Zombie };
