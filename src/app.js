/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["el", "nuestro", "mi", "tu", "su"];
  let adj = ["gran", "generoso", "fastuoso", "elegante", "inutil"];
  let noun = ["susto", "secreto", "mentira", "pelon", "metidadepata"];
  let extensiones = [".com", ".net", ".us", ".io", ".dev"];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    pronoun[Math.floor(Math.random() * 5)] +
    adj[Math.floor(Math.random() * 5)] +
    noun[Math.floor(Math.random() * 5)] +
    extensiones[Math.floor(Math.random() * 5)];

  console.log(excuseP);
};
