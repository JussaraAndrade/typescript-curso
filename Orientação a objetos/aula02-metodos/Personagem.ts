/* export; serve para exportar o personagem para usar em outros lugares 
do projeto */

// Escopo da classe
export default class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  // TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETROS
  // TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

  /* 
    ajuda a reduiz redundancia de código 

    this; serve para referênciar alguém que é atributo da classe
    let teste; variavel local dentro do método
  */
  // Ações onde fica os métodos sem retorno
  status(): string {
    return (
      "Guerreio: \n" +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " + this.energia.toFixed(1)) +
      ("\nAtaque: " + this.ataque.toFixed(1)) +
      ("\nDefesa: " + this.defesa.toFixed(1))
    );
  }
  treinarAtacar(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;

    if (this.defesa > 100) {
      this.defesa = 0;
    }
  }
  treinarDefesa(): void {
    this.ataque += Math.random() * 5;
    this.energia -= Math.random() * 10;

    if (this.defesa > 100) {
      this.defesa = 0;
    }
  }
  descansar(tempo: number): void {
    this.energia += tempo * (Math.random() * 10);
    if (this.energia > 100) {
      this.energia = 100;
    }
  }
  batalhar(): number {
    // varivável local
    let desgaste: number = Math.random() * 100;
    this.energia -= desgaste;
    return desgaste;
  }
  //Validando algo que é booleano
  isDead(): boolean {
    return this.energia < 0;
  }
}
