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

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        for (let d of extensiones) {
          console.log(`${a}${b}${c}${d}`);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
