/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Mi novia ", "Una señora ", "Un motorizado "];
  let action = ["me dañó ", "se comió ", "me robó "];
  let what = ["la tarea ", "el teléfono ", "la billetera "];
  let when = [
    "en la mañana",
    "antes de llegar al trabajo",
    "ayer por la noche"
  ];
  let who1 = Math.floor(Math.random() * 3);
  let action1 = Math.floor(Math.random() * 3);
  let what1 = Math.floor(Math.random() * 3);
  let when1 = Math.floor(Math.random() * 3);
  console.log(who[who1] + action[action1] + what[what1] + when[when1]);
};

function excusa() {
  let who = ["Mi novia ", "Una señora ", "Un motorizado "];
  let action = ["me dañó ", "se comió ", "me robó "];
  let what = ["la tarea ", "el teléfono ", "la billetera "];
  let when = [
    "en la mañana",
    "antes de llegar al trabajo",
    "ayer por la noche"
  ];
  let who1 = Math.floor(Math.random() * 3);
  let action1 = Math.floor(Math.random() * 3);
  let what1 = Math.floor(Math.random() * 3);
  let when1 = Math.floor(Math.random() * 3);
  document.getElementById("excusa").innerHTML =
    who[who1] + action[action1] + what[what1] + when[when1];
}
document.getElementById("btn").addEventListener("click", excusa);
