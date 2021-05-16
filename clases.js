
// Clases en JavaScript
class Animal {
    
    // Método constructor
    constructor( especie, color ) {
        // Atributos
        this.especie = especie;
        this.color = color;
    }

    // Métodos
    moverse() {
        console.log( `${ this.especie } ${ this.color } comenzó a moverse` );
    }

}

// Herencia
class Gato extends Animal {

    constructor( especie='Gato', color, nombre ) {
        super( especie, color );
        this.nombre = nombre;
    }

    sonido() {
        console.log( `El gato ${ this.nombre } hace nya.` );
    }

}

// Atributos privados
class Vehiculo {

    #color

    constructor( tipo, color, ruedas ) {

        this.#tipo = tipo;
        this.#color = color;
        this.#ruedas = ruedas;
    
    }

    // Método getter
    get #tipo() {
        return this.tipo;
    }

    // Método setter
    set #tipo( tipo ) {
        this.tipo = tipo;
    }

    // Método getter
    get #ruedas() {
        return this.ruedas;
    }

    // Método setter
    set #ruedas( ruedas ) {
        this.ruedas = ruedas;
    }
    
}

// Instancia de la clase
const v1 = new Vehiculo('Tren', 'Azul', null);
console.log( v1.tipo );
v1.ruedas = 4;
console.log( v1.ruedas );

/*
const a1 = new Animal('Elefante', 'Rosa');
const a2 = new Animal('Gato', 'Gris');
console.log( a1 );
console.log( a1.especie );
a1.moverse();
a2.moverse();

const g1 = new Gato( undefined, 'Negro', 'Gatito' );
console.log( g1.especie );
*/


 