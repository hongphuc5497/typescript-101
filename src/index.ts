// * Types
// let point1 = { x: 1, y: 1 };
// let point2 = point1;

// point2.y = 50;
// point1.y = 100;
// console.log(point2);

// let ids: (boolean | number)[] = [1, 2, 3, 4, 5];
// ids.push(true);
// console.log(ids);

// let temp: any[] = ids;
// temp.push('a');
// console.log(temp);

// interface ObjTemp {
// 	name: string;
// 	age: number;
// 	getAge(age: number): number;
// 	getName: (name: string) => string;
// }

// const test_1: ObjTemp = {
// 	name: 'Lorem',
// 	age: 25,
// 	getAge(age: number): number {
// 		return this.age;
// 	},
// 	getName: (name: string) => this.name,
// };
// test_1.getAge()
// test_1.getName()

// * Functions
// function circle(diam: number): object {
//   return {
//     diameter: diam,
//     circumference: diam * Math.PI,
//   }
// }

// const getCircleDiameter: Function = (diam: number): string => {
//   return 'The circle diameter is ' + diam;
// }

// const add = (a: number, b: number, c?: number | string): number => {
//   console.log(c)

//   return a + b;
// }

// add(1, 2, 'lorem ipsum');

// add(5, 10);

// const logMsg = (msg: string): void => {
//   console.log(msg);
// }

// logMsg('Hello World');

// let sayHello: (name: string) => void;

// sayHello = name => console.log(`Hello ${name}`)

// sayHello('Lorem');

// * Dynamic types
// let age: any = '100'

// age = true;

// age = 25;

// * Type aliases
// type StringOrNumber = string | number;

// type PersonObject = {
// 	name: string,
// 	id: StringOrNumber;
// }

// const person1: PersonObject = { name: 'Lorem', id: '123' };

// const person2: PersonObject = { name: 'Lorem', id: 123 };

// const sayHi = (person: PersonObject) => {
//   return `Hi ${person.name}`;
// }

// * DOM
// const link = document.querySelector('a')!;

// console.log(link);

// const form = document.getElementById('signup-form')! as HTMLFormElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   console.log(e.target);
// });

// * Class
class Person {
	readonly name: string;
	private isMarried: boolean;
	protected email: string;
	public pets: number;

	constructor(name: string, isMarried: boolean, email: string, pets: number) {
		this.name = name;
		this.isMarried = isMarried;
		this.email = email;
		this.pets = pets;
	}

	sayHello(): string {
		return `Hello ${this.name} + and you have ${this.pets} pets`;
	}
}

class SecondPerson {
  constructor(
    readonly name: string,
    private isMarried: boolean,
    protected email: string,
    public pets: number
  ) {}

	sayHello(): string {
		return `Hello ${this.name} + and you have ${this.pets} pets`;
	}
}

const person1 = new Person('Lorem', true, 'lorem@ipsum.com', 2);

const person2 = new SecondPerson('Ipsum', false, 'lorem@ipsum.com', 10);

let people: (Person| SecondPerson)[] = [person1, person2];

class Programmer extends SecondPerson {
  programmingLanguages: string[];

  constructor(
    name: string,
    isMarried: boolean,
    email: string,
    pets: number,
    pL: string[]
  ) {
    super(name, isMarried, email, pets);
    this.programmingLanguages = pL;
  }
}

const programmer1 = new Programmer('Lorem', true, 'dev@example.com', 2, ['JavaScript', 'TypeScript']);


