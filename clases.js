
class Animal {
    
    // Método constructor
    constructor( especie, color ) {
        // Atributos
        this.especie = especie;
        this.color = color;
    }

    // Métodos
    moverse() {
        console.log( `${ this.especie } ${ this.color } comenzó a moverse...` );
    }

}

class Gato extends Animal {

    constructor( especie = 'Gato', color, nombre ) {
        super( especie, color );
        this.nombre = nombre;
    }

    sonido() {
        console.log( `El gato ${ this.nombre } hace nya` );
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

g1 = new Gato( undefined, 'Negro', 'Gatito' );
console.log( g1.especie );

v1 = new Vehiculo( 'Tren', 'Azul', null );
console.log( v1.tipo );

v1.ruedas = 4;
console.log( v1.ruedas );
 