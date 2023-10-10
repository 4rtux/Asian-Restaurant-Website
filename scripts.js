/*var number = 5; */ // in-line comment

/* this is a
multi-line comment */

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

/*var myName = "Beau";

myName = 8;
*/

/* let es una variable que solo se puede usar en el bloque donde se declara*/

/*
let ourName = "Franciscano";

const pi = 3.14;
*/


/* un script se puede incluir en un HTML dentro del head o al final del body 
es más recomendable incluirlo al final*/
/* puedes poner una linea de ejecucion de una funcion antes de declararla*/

/*objetos
 -string
 -dictionary
 -regex
 -function
 -symbol
 -promise*/

/*myString.replace("a", "b") reemplaza la primera ocurrencia de a por una b*/
/*myString.replaceAll("a", "b") reemplaza todas las ocurrencias de a por una b*/

/*
let myString = "This is a string";
*/

/*
console.log(myString.length);
console.log(myString.indexOf("is"));
console.log(myString.substring(5));
console.log(myString.substring(5, 8));
console.log(myString.at(-1)); // allows negative index
console.log(myString.charAt(0)); // does not allow negative index
console.log(myString.charCodeAt(myString.indexOf("a")));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.startsWith("This"));
console.log(myString.endsWith("This"));
console.log(myString.includes("tri"));
console.log(myString.search(/\w{5}/));
console.log(myString.replace("is", "ese").replace("is", "are"));
console.log(myString.replaceAll("is", "all"));
console.log(myString.slice(5));
console.log(myString.slice(5, 8));
console.log(myString.slice(-5));
console.log(myString.split(" "));
myString = " ".repeat(4) + myString + " ".repeat(4);
console.log(`'${myString.trim()}'`);
console.log(`'${myString.trimStart()}'`);
console.log(`'${myString.trimEnd()}'`);
*/

/* Todos estos metodos no modifican la cadena original*/
/* para modificar un string se debe usar slice para cortar
las partes q no queremos y luego concatenarlas con las que queremos*/


/*arrays*/

/*
let ourArray = ["John", 23];
let myArray = ["Quincy", 1];
console.log(myArray[0]);
console.log(myArray.length);
myArray.push("hello");
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("hello");
console.log(myArray);
console.log(myArray.join(" "));
console.log(myArray.concat(ourArray));
console.log(myArray.slice(1, 3));
console.log(myArray.slice(-2));
console.log(myArray.splice(1, 2, "a", "b", "c"));
console.log(myArray);
console.log(myArray.reverse());
console.log(myArray.sort());
console.log(myArray.sort((a, b) => a - b));
console.log(myArray.sort((a, b) => b - a));
console.log(myArray.sort((a, b) => a.localeCompare(b)));
console.log(myArray.sort((a, b) => b.localeCompare(a)));
console.log(myArray.sort((a, b) => a.length - b.length));
console.log(myArray.sort((a, b) => b.length - a.length));
console.log(myArray.sort((a, b) => a[0].localeCompare(b[0])));
console.log(myArray.sort((a, b) => b[0].localeCompare(a[0])));
console.log(myArray.sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]));
*/

/* si modificamos el length de un array se eliminan los elementos que sobran*/
/* sort ordena los elementos de un array alfabeticamente*/

/*funciones*/
/*practica 2*/
// script.js
const openModalBtn = document.getElementById('openModalBtn');
const signupModal = document.getElementById('signupModal');
const signupForm = document.getElementById('signupForm');
const dniInput = document.getElementById('dni');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const clearBtn = document.getElementById('clearBtn');

openModalBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

clearBtn.addEventListener('click', () => {
    dniInput.value = '';
    firstNameInput.value = '';
    lastNameInput.value = '';
    telephoneInput.value = '';
    emailInput.value = '';
});

submitBtn.addEventListener('click', () => {
    // Validate and store user information in localStorage
    const dni = dniInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const telephone = telephoneInput.value.trim();
    const email = emailInput.value.trim();

    // Perform validation here (e.g., DNI, telephone, email format)

    // Store in localStorage
    const userData = {
        dni,
        firstName,
        lastName,
        telephone,
        email,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Close the modal
    signupModal.style.display = 'none';
});
