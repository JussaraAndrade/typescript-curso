import prompt from 'prompt-sync';

// Escopo da classe
class Personagem {
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
  constructor(
    //otimização dentro do construtor
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {
  }

  // métodos
}
//new é a palavra reservada criação de objeto
//instaciamento de classe/criação de objetos       
let sansa: Personagem = new Personagem('Sansa Stark', 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;
while(option != 9){
    console.log("+=============== Personagem ===============+");
    console.log("|1. Treinar ataque                         |");
    console.log("|2. Treinar defesa                         |");
    console.log("|3. Imprimir atributos                     |");
    console.log("|9. Sair                                   |");
    console.log("+=============== Personagem ===============+");

    option = +teclado("Escolha uma ação: ");

    switch(option){
        case 1:
            sansa.ataque += 2; 
            break;
        case 3:
            console.log("sansa :>> ", sansa)
            break;
        default:
            break;
    }

}
