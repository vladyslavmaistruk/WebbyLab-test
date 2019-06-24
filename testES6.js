/*
Написать класс Dog, который наследуется от класcа Animal.
Класс Animal имеет метод getName (name можно передать в конструктор).
Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».

Пример использования:

var dog = new Dog ('Aban');
dog.getName () === 'Aban'; // true
dog.bark () === 'Dog Aban is barking'; // true

Задание необходимо сделать в двух вариантах: на ES5 и ES6.
*/

class Animal {
  constructor (name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  bark() {
    return `Dog ${this.name} is barking`;
  }
}

const dog = new Dog ('Aban');
console.log(dog.getName () === 'Aban'); // true
console.log(dog.bark () === 'Dog Aban is barking'); // true
console.log(dog.getName()); // Aban
console.log(dog.bark()); // Dog Aban is barking
