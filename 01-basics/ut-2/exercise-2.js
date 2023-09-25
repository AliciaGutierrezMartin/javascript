
/* constantes mensajes*/

const MENSAJE_ALERTA = "This is an alert message, click me to move on!!!";
const MENSAJE_CONFIRM = "Show me in an alert if you clicked on ok or false";
const MENSAJE_PROMPT = "Show me in an alert the message typed";
const MENSAJE_CLIC = " click me to move on!!!";

alert(MENSAJE_ALERTA);
let opcion = confirm(MENSAJE_CONFIRM);
alert("You clicked on "+ opcion + MENSAJE_CLIC);
const MENSAJE_DEF = "Type something";
let guardar = prompt(MENSAJE_PROMPT, MENSAJE_DEF);
alert("You typed " + guardar + MENSAJE_CLIC);











