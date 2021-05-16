
// Mi primer programa en JavaScript
// console.log( 'Hola Mundo' );

// Variables en JavaScript

// Variable
// let nombre = 'Roberto';
// Constante
const apellido = 'Trejo';

// Tipos de variables
const n1 = 3;
const n2 = 6;
const pi = 3.1416;
const sumar = true;

// Estructura if
if ( sumar ) {
    // console.log( n1 + n2 + pi );   
}

// Funciones
function suma() {
    // console.log( n1 + n2 );
}

function parImpar( n ) {
    if ( n % 2 == 0 ) {
        // console.log( n, 'es par' );
    } else {
        // console.log( n, 'es impar' );
    }
}

// Función de flecha
const resta = ( n1, n2 ) => {
    // console.log( n1 - n2 );
}  

// Ciclos
for (let i = 0; i < 10; i++) {
    // console.log( i );
}

// Función que imprime la tabla del 4
function tabla( n ) {
    for (let i = 1; i <= 10; i++) {
        // console.log( `${ n } * ${ i } = ${ n*i }` );
    }
}

// tabla( 4 );

// Ciclo while
let i = 0;
while ( i < 10 ) {
   // console.log( i );
   i++; 
}

// Ciclo DoWhile
do {
    // console.log( 'Hola' );
} while ( false );


// Templates literales
const nombre = 'Oswaldo';
const edad = 19;
const accion = 'escuchar música';


console.log( `Hola, mi nombre es ${ nombre }, tengo ${ edad } años y me gusta ${ accion }.` );

// Operador ternario
const restar = false;

if ( restar ) {
    console.log( 'Restar es true' );
} else {
    console.log( 'Restar es false' );
}

( restar ) ? console.log( 'Restar es true' ) : console.log( 'Restar es false' );

function parImparTernario( n ) {
    ( n%2==0 ) ? console.log( `${ n } es par` ) : console.log( `${ n } es impar` );
}

parImparTernario( 12 );


// Arreglos
const arr1 = new Array(1, 2, 3, 4);
const arr2 = [1, 2, 3, 4];

// console.log( arr1.length );
// console.log( arr2[3] );

// Recorrer un arreglo
for (let i = 0; i < arr1.length; i++) {
    // console.log( arr1[i] );
}

arr2.forEach( i => {
    console.log( i );
});


// Añadir un elemento al final de un arreglo
const arr3 = [];
arr3.push( 'Manzana' );
arr3.push( true );
arr3.push( 3.1416 )

// Añadir un elemento al inicio de un arreglo
arr3.unshift( 1 );
console.log( arr3 );


// Objetos JSON
let animal = {
    especie: 'Perro',
    nombre: 'Chilaquil',
    color: 'Naranja',
    esMacho: true,
    sonido: function () {
        console.log( `${ this.especie } puede ladrar.` );
    }
}

animal.sonido();
