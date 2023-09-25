/* Hacemos constantes de los mensajes */

const MENSAJE_BIENVENIDA = "Welcome to the appliction!"
const MENSAJE_INFO = "This is an informational message."
const MENSAJE_ADV = "This is a warning. Be cautious."
const MENSAJE_ERROR = "Error! Something went wrong."

/* Hacemos constantes con los estilos */

const ESTILO_TITULO = "font-size: 18px; font-weight: bold; color: blue"
const ESTILO_SECUNDARIO = "font-size: 16px; color: green"

/* mostramos mensajes en consola, con los estilos si corresponden */

console.log("%c" + MENSAJE_BIENVENIDA, ESTILO_TITULO);
console.log("%c" + MENSAJE_INFO, ESTILO_SECUNDARIO);
console.warn(MENSAJE_ADV);
console.error(MENSAJE_ERROR);

/* usamos variables para meter los datos que van a aparecer en la tabla */

let name1 = "John";
let age1 = 30;
let city1 = "New York";

let name2 = "Jane";
let age2 = 25;
let city2 = "San Francisco";

let name3 = "Bob";
let age3 = 40;
let city3 = "Chicago";

console.table([
    {name: name1, age: age1, city: city1},
    {name: name2, age: age2, city: city2},
    {name: name3, age: age3, city: city3}
]);

/* Forma de hacer el ejercicio sin usar constantes y variables */

/*console.log("%cWelcome to the appliction!", "color:blue; font-size: 18px; font-weight:bold");
console.log("%cThis is an informational message.", "color:green; font-size: 16px;"); 
console.warn("This is a warning. Be cautious.")
console.error("Error! Something went wrong.")


function datos (nombre, edad, ciudad) {
    this.name = nombre;
    this.age = edad;
    this.city = ciudad;
}

let informacion = {}

informacion[0] = new datos("John", 30, "New York");
informacion[1] = new datos("Jane", 25, "San Francisco");
informacion[2] = new datos("Bob", 40, "Chicago");

console.table(informacion)

*/
