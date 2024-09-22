import Character, { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from './src/index';

test('создание класса Bowman', () => {
  const bowman = new Bowman('Лучник');
  expect(bowman).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('создание класса Swordsman', () => {
  const swordsman = new Swordsman('Мечник');
  expect(swordsman).toEqual({
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('создание класса Magician', () => {
  const magician = new Magician('Маг');
  expect(magician).toEqual({
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('создание класса Daemon', () => {
  const daemon = new Daemon('Демон');
  expect(daemon).toEqual({
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('создание класса Undead', () => {
  const undead = new Undead('Нежить');
  expect(undead).toEqual({
    name: 'Нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('создание класса Zombie', () => {
  const zombie = new Zombie('Зомби');
  expect(zombie).toEqual({
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('имя меньше 2 символов', () => {
  expect(() => new Bowman('A')).toThrow('Имя должно быть от 2 до 10 символов.');
});

test('имя больше 10 символов', () => {
  expect(() => new Bowman('ОченьДлинноеИмя')).toThrow('Имя должно быть от 2 до 10 символов.');
});

test('некорректный тип персонажа', () => {
  expect(() => new Character('Персонаж', 'НекорректныйТип')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

describe('Character', () => {
  let character;

  beforeEach(() => {
      character = new Bowman('Robin');
  });

  test('levelUp increases level and sets health to 100', () => {
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBeCloseTo(30); // 25 * 1.2
      expect(character.defence).toBeCloseTo(30); // 25 * 1.2
      expect(character.health).toBe(100);
  });

  test('levelUp throws error if health is 0', () => {
      character.health = 0;
      expect(() => character.levelUp()).toThrow("Нельзя повысить уровень мертвого персонажа.");
  });

  test('damage decreases health correctly', () => {
      character.defence = 50; // Задаем защиту
      character.damage(40);
      expect(character.health).toBe(80); // 100 - 40 * (1 - 0.5)
  });

  test('damage does not set health below 0', () => {
      character.health = 20;
      character.defence = 50;
      character.damage(60);
      expect(character.health).toBe(0);
  });
});