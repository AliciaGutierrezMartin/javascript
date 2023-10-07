let texh1 = "The input min and max atributes";
let textp = "The min and max attributes specify the minimum and maximum values for an input element";
let textDatemax = "Enter a date before 1980-01-01:";
let textDatemin = "Enter a date after 2000-01-01:";
let textQuantity = "Quantity (between 1 and 5):";

const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const br = document.createElement('br');

const brClonado = br.cloneNode();
const form = document.createElement("form");

const label = document.createElement("label");
const label1 = document.createElement("label");
const label2 = document.createElement("label");

const input = document.createElement("input");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const inputSubmit = document.createElement("input");
/*form.append(label, input, cloneNode().br)
crea los elementos por separado y luego los añade todos */

h1.textContent = texh1;
p.textContent = textp;
label.textContent = textDatemax;
label1.textContent = textDatemin;
label2.textContent = textQuantity;

document.body.appendChild(div);
div.appendChild(h1);
div.append(br.cloneNode());
div.appendChild(p);
div.append(br.cloneNode());


div.appendChild(form);
form.appendChild(label);
label.setAttribute("for", "datemax");
input.setAttribute("type", "date");
input.setAttribute("id", "datemax");
input.setAttribute("name", "datemax");
input.setAttribute("max", "1979-12-31");
form.appendChild(input);

form.append(br.cloneNode());

label1.setAttribute("for", "datemin");
input1.setAttribute("type", "date");
input1.setAttribute("id", "datemin");
input1.setAttribute("name", "datemine");
input1.setAttribute("min", "2000-01-02");
form.appendChild(label1);
form.appendChild(input1);

form.append(brClonado);

label2.setAttribute("for", "quantity");
input2.setAttribute("type", "number");
input2.setAttribute("id", "quantity");
input2.setAttribute("min", "1");
input2.setAttribute("max", "5");
form.appendChild(label2);
form.appendChild(input2);

form.append(br);

inputSubmit.setAttribute("type", "submit");
inputSubmit.setAttribute("value", "Submit");
form.appendChild(inputSubmit);









