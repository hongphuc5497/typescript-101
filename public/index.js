"use strict";
class Person {
    constructor(name, isMarried, email, pets) {
        this.name = name;
        this.isMarried = isMarried;
        this.email = email;
        this.pets = pets;
    }
    sayHello() {
        return `Hello ${this.name} + and you have ${this.pets} pets`;
    }
}
class SecondPerson {
    constructor(name, isMarried, email, pets) {
        this.name = name;
        this.isMarried = isMarried;
        this.email = email;
        this.pets = pets;
    }
    sayHello() {
        return `Hello ${this.name} + and you have ${this.pets} pets`;
    }
}
const person1 = new Person('Lorem', true, 'lorem@ipsum.com', 2);
const person2 = new SecondPerson('Ipsum', false, 'lorem@ipsum.com', 10);
let people = [person1, person2];
class Programmer extends SecondPerson {
    constructor(name, isMarried, email, pets, pL) {
        super(name, isMarried, email, pets);
        this.programmingLanguages = pL;
    }
}
const programmer1 = new Programmer('Lorem', true, 'dev@example.com', 2, ['JavaScript', 'TypeScript']);
//# sourceMappingURL=index.js.map