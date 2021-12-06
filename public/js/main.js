import {Pokemon,Pikachu,Poussifeu} from "./class.js";
import {startCombat} from "./combat.js"
let pikachu = new Pikachu("Pikachu",100,195,200,143,100,108,120,["Electrique"]);
let poussifeu = new Poussifeu("Poussifeu",100,215,110,154,100,144,120,["Feu","Vol"],);


startCombat(pikachu,poussifeu);
