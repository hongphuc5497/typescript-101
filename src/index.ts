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
// class Person {
// 	readonly name: string;
// 	private isMarried: boolean;
// 	protected email: string;
// 	public pets: number;

// 	constructor(name: string, isMarried: boolean, email: string, pets: number) {
// 		this.name = name;
// 		this.isMarried = isMarried;
// 		this.email = email;
// 		this.pets = pets;
// 	}

// 	sayHello(): string {
// 		return `Hello ${this.name} + and you have ${this.pets} pets`;
// 	}
// }

// class SecondPerson {
//   constructor(
//     readonly name: string,
//     private isMarried: boolean,
//     protected email: string,
//     public pets: number
//   ) {}

// 	sayHello(): string {
// 		return `Hello ${this.name} + and you have ${this.pets} pets`;
// 	}
// }

// const person1 = new Person('Lorem', true, 'lorem@ipsum.com', 2);

// const person2 = new SecondPerson('Ipsum', false, 'lorem@ipsum.com', 10);

// let people: (Person| SecondPerson)[] = [person1, person2];

// class Programmer extends SecondPerson {
//   programmingLanguages: string[];

//   constructor(
//     name: string,
//     isMarried: boolean,
//     email: string,
//     pets: number,
//     pL: string[]
//   ) {
//     super(name, isMarried, email, pets);
//     this.programmingLanguages = pL;
//   }
// }

// const programmer1 = new Programmer('Lorem', true, 'dev@example.com', 2, ['JavaScript', 'TypeScript']);

// * Interface
// interface Human {
// 	name: string;
// 	age: number;
// }

// type HumanType = {
//   name: string;
//   age: number;
//   pets: any[];
// }

// const getHuman = (human: Human | HumanType): Object => human;

// getHuman({
// 	name: 'Lorem',
//   age: 25,
// });

// interface Animal {
//   name: any;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const husky: Dog = {
//   name: 'Corn',
//   breed: 'Husky',
//   isBarking: true
// }

// type Bear = Animal & {
//   honey: boolean
// }

// const whiteBear: Bear = {
//   name: 'White',
//   honey: true
// }

// interface Dog {
//   isBarking: boolean;
// }

// interface HasFormatter {
//   format(): string;
// }

// class People implements HasFormatter {
//   constructor(public username: string, protected password: string) {}

//   format() {
//     return this.username.toLocaleLowerCase()
//   }
// }

// let people1: HasFormatter;
// people1 = new People('LoremIpsum', '123123');
// people1.format()

// let people2: HasFormatter = new People('IpsumLorem', '123123');

// let peopleArr: HasFormatter[] = [];
// peopleArr.push(people1, people2);

// * Literal types
// let favorColor: 'red' | 'blue' | 'green';

// favorColor = 'red';

// * Generics
// const addID: Function = (obj: object) => {
// 	let id = Math.floor(Math.random() * 100);

// 	return { ...obj, id };
// };

// const addID_2 = <T extends { name: string }>(obj: T) => {
// 	let id = Math.floor(Math.random() * 100);

// 	return { ...obj, id };
// };

// let temp = addID({ name: 'Cat' });

// let temp2 = addID_2({ name: 'Dog' });

// interface HasLength {
//   length: number;
// }

// function logMsg<T extends HasLength>(a: T) {
//   console.log(a.length)

//   return a
// }

// logMsg('Lorem Ipsum');

// interface Person<T> {
//   name: string,
//   pets: T
// }

// const person1: Person<string> = {
//   name: 'Lorem',
//   pets: 'Cat'
// }

// const person2: Person<string[]> = {
//   name: 'Ipsum',
//   pets: ['Cat']
// }

// * Enums
// enum Color {
//   RED,
//   GREEN,
//   BLUE
// }

// console.log(Color.RED);
// console.log(Color.GREEN);

// * Strict null checks
// const getSong = () => {
// 	return 'song';
// };

// let whoSangThisSong: string = getSong();

// const singles = [
// 	{ song: 'touch of grey', artist: 'grateful dead' },
// 	{ song: 'paint it black', artist: 'rolling stones' },
// ];

// const single = singles.find((s) => s.song === whoSangThisSong);

// console.log(single);

//* Narrowing in TypeScript
// interface Vehicle {
// 	topSpeed: number;
// }
// interface Plane extends Vehicle {
// 	type: 'Plane';
// 	wingSpan: number;
// }
// interface Train extends Vehicle {
// 	type: 'Train';
// 	carriages: number;
// }

// type PlaneOrTrain = Plane | Train;

// const getSpeedRatio = (vehicle: PlaneOrTrain) => {
// 	if (vehicle.type == 'Plane') return vehicle.topSpeed / vehicle.wingSpan;

// 	return vehicle.topSpeed / vehicle.carriages;
// };

// let bigTrain: PlaneOrTrain = {
//   type: 'Train',
//   topSpeed: 100,
//   carriages: 20,
// }

// getSpeedRatio(bigTrain);