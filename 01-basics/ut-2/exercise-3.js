

let gato = {

    nombre:"Zarpitas",
    edad: 3,
    hembra: true,
    raza: {
        nombre: "común",
        procedencia: "Europa"
    },
    caracter: "arisco",
    vacunado: true,
    colores: ["blanco", "negro", "marrón"],
    dueño: {
        nombre: "Pedro",
        edad: 26
    }
}

function verClaves (gato){
    return Object.keys(gato);
}

console.log(verClaves(gato))

function verValores (gato){
    return Object.values(gato);
}

console.log(verValores(gato))

// En ambos casos devuelve un array
