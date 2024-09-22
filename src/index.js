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
