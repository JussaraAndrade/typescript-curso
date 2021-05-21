import { Mage } from './src/Mage';
import { Personagem } from './src/Personagem';
import { Priest } from './src/Priest';

/*
    Polimorfismo - significa muitas formas

    - Em uma chamada comportamento de várias formas
*/

let mage: Personagem = new Mage('Angelo mage');
let priest: Personagem = new Priest('Angelo priest');

const personagens: Personagem[] = [];
personagens.push(mage);
personagens.push(priest);

// convertendo método priest
// o método atacat(); tem que está na superclasse para que eu possa chamar
personagens.forEach((p) => 
    console.log(p.atacar())
);





