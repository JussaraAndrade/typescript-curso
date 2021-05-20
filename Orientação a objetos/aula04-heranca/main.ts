import { Mage } from './Mage';
import { Personagem } from './Personagem';
import { Priest } from './Priest';
import { Warrior } from './Warrior';

let mage: Personagem = new Mage('Angelo mage');
let warrior: Personagem = new Warrior('Angelo warrior');
let priest: Personagem = new Priest('Angelo priest');

console.log("Mage :>> ", mage);
console.log("Warrior :>> ", warrior);
console.log("Priest :>> ", priest);



