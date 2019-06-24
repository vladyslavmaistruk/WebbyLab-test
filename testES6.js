
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
