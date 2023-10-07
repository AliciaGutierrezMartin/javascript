const styles = [
"list-group-item list-group-item-action",
"list-group-item list-group-item-action list-group-item-primary",
"list-group-item list-group-item-action list-group-item-secondary",
"list-group-item list-group-item-action list-group-item-success",
"list-group-item list-group-item-action list-group-item-danger",
"list-group-item list-group-item-action list-group-item-warning",
"list-group-item list-group-item-action list-group-item-info",
"list-group-item list-group-item-action list-group-item-light",
"list-group-item list-group-item-action list-group-item-dark"];



const text = [
    "A simple default list group item",
    "A simple primary list group item",
    "A simple secondary list group item",
    "A simple success list group item",
    "A simple danger list group item",
    "A simple warning list group item",
    "A simple info list group item",
    "A simple light list group item",
    "A simple dark list group item"];


const body = document.querySelector("body");

const div = document.createElement("div");
div.classList.add('list-group');

body.append(div);

styles.forEach (function(style, i) {
    let a = document.createElement("a");
    a.href='#';
    a.className = style;
    a.textContent = text[i];
    div.appendChild(a);
});
