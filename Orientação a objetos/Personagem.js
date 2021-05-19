"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
// Escopo da classe
var Personagem = /** @class */ (function () {
    // atributos
    //   nome: string = "";
    //   energia: number = 0;
    //   vida: number = 0;
    //   ataque: number = 0;
    //   defesa: number = 0;
    /*
          construtor; método especial que é usado para ditar como um objeto é inicializado
          
          * Quantas vezes o contrutor pode ser chamado para um objeto?
            Pode ser chamado uma única vez que é na criação do objeto.
      */
    //construtor
    function Personagem(
    //otimização dentro do construtor
    nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
//new é a palavra reservada criação de objeto
//instaciamento de classe/criação de objetos       
var sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);
var teclado = prompt_sync_1.default();
var option = 0;
while (option != 9) {
    console.log("+=============== Personagem ===============+");
    console.log("|1. Treinar ataque                         |");
    console.log("|2. Treinar defesa                         |");
    console.log("|3. Imprimir atributos                     |");
    console.log("|9. Sair                                   |");
    console.log("+=============== Personagem ===============+");
    option = +teclado("Escolha uma ação: ");
    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 3:
            console.log("sansa :>> ", sansa);
            break;
        default:
            break;
    }
}
