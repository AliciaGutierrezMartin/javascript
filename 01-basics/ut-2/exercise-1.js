console.log("%cWelcome to the appliction!", "color:blue; font-size: 18px; font-weight:bold");
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
