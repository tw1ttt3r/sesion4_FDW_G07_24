// Arreglos

// Estructura de datos y un tipo de objeto especial
// caracteristica principal es que contiene propiedad llamada length
// caracteristica de manejar orden, es decir, sus elementos se van a organizar por orden de entrada
// los elementos se organizaran y se identificaran por medio de indices númericos
// estos índices comienzan con el número 0 y avanzan unitariamente hasta llegar a n (length - 1)

// sintaxis
// const nombreArreglo = [];


// agregar elementos
const numeros = [  ];
numeros.length // 0
// push
// un elemento
numeros.push(5);
// n numero de elementos
numeros.push(8,9,5,4,3,2,3,4,56,8); // 5

// obtener la longitud del arreglo
numeros.length // 11

numeros.push(8,9,5,4,3,2,3,4,56,8);

numeros.length // 21

// obtener valores
// sintaxis
// metodo at(posicion)
numeros.at(9) // 56
// si la posicion no existe me regresará un undefined

// splice
// numeros.splice(posicion,1)
// modificar la longitud del arreglo

// delete
// delete(numeros[posicion])
// eliminar el valor de la posicion y conservará su longitud


// formatear el contenido del arreglo a string
// metodo join
// numeros.join()
// un separador , - _    5 

// invertir el orden de mis elementos
// metodo reverse
// numeros.reverse()

 
// Objetos

// representación de algo en ejecución
// propiedades -> definir caracteristicas
// metodos -> definir acciones

// sintaxis 
// const nombreObjeto = {};

// propiedades sintaxis
// nombrePropiedad: valor

// metodos sintaxis
// nombreMetodo: function() {}

// acceso propiedades y metodos
const persona = {
    nombre: "Pedro",
    edad: 44,
    peso: 109,
    altura: 76,
    correr: function() {
        console.log("Estoy corriendo")
    },
    dormir: function() {
        console.log("zzzzzzzz")
    },
    trabajar: function() {
        console.log("Estou trabajando")
    }
};

// mediante .
persona.nombre // Pedro
// mediante []
persona["nombre"] // Pedro
// variante
const propiedad = "altura";
persona[propiedad] // 76
 

// comprobación de que existe una propiedad
// metodo hasOwnProperty(nombrePropiedad)
// true si existe, false si no existe

// agregar propiedades a un objeto
persona.trabajo = "programador";
persona.sueldo = 400;


