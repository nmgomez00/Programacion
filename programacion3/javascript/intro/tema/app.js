/*

let age = 18;
if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
age >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

let cadena = "hola";
// cadena = cadena.split(""); // ['h', 'o', 'l', 'a']

//funciona en cualquier iterable
let arr = [...cadena]; // ['h', 'o', 'l', 'a']
console.log(arr);
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [5, 6, 7, 8];

//inmutabilidad
let result = [...numbers, ...numbers2, 9, 10]; // [1, 2, 3, 4, 5, 5, 6, 7, 8]
console.log(result);

const person = {
  nombre: "juan",
  apellido: "person",
  cuenta: {
    numero: 123456,
    saldo: 1000,
  },
};
const personWithAge = { ...person, edad: 18 }; // { nombre: "juan", apellido: "person", edad: 18 }
personWithAge.nombre = "pepe"; // { nombre: "pepe", apellido: "person", edad: 18 }
console.log(person);
console.log(personWithAge);
*/
/*
const conjunto1 = [1, 2, 3, 4];
const conjusto2 = [3, 4, 5, 6];
const conjunto1 = [1, 2, 3, 4];
const conjusto2 = [3, 4, 5, 6];
const union = [...new Set([...conjunto1, ...conjusto2])]; // [1, 2, 3, 4, 3, 4, 5, 6]
console.log(union);
//console.log(...[new Set([1, 2, 3, 4, 3, 4, 5, 6])]);

// rest operator
//desestructuracion
const person = {
  nombre: "juan",
  apellido: "person",
  cuenta: {
    numero: 123456,
    saldo: [1, 2, 3],
  },
};

/*const { nombre: name, apellido: lastName } = person;
console.log(name); // "juan"
console.log(lastName); // "person"
const {
  cuenta: { saldo },
} = person;
console.log(saldo.at(-1)); // [1, 2, 3]

*/

//rest operator y desestructuracion
const numbers = [1, 2, 3, 4];

const [n1, n2] = numbers;
console.log(n1, n2); // 1

//const result = numbers.splice(2, 2);
//rest != spread
[a, b, d, e, ...rest] = numbers; // [1, 2, 3, 4]

console.log(numbers, d, e); // [1, 2, 3, 4] 1 2
console.log(rest); // [3, 4]
