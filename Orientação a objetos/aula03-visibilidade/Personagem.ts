// Escopo da classe
export default class Personagem {
  constructor(
    private _nome: string,
    private _energia: number,
    private _vida: number,
    private _ataque: number,
    private _defesa: number
  ) {}

    
    public get nome() : string {
      return this._nome;
    }

    public set nome(nome: string){
      this._nome = nome;
    }
    

  public status(): string {
    return (
      "Guerreio: \n" +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " + this._energia.toFixed(1)) +
      ("\nAtaque: " + this._ataque.toFixed(1)) +
      ("\nDefesa: " + this._defesa.toFixed(1))
    );
  }
  public treinarAtacar(): void {
    this._ataque += this.randomizar(7);
    this._energia -= this.randomizar(5);

    if (this._defesa > 100) {
      this._defesa = 0;
    }
  }
  public treinarDefesa(): void {
    this._defesa += this.randomizar(5);
    this._energia -= this.randomizar(10);

    if (this._defesa > 100) {
      this._defesa = 0;
    }
  }
  public descansar(tempo: number): void {
    this._energia += tempo * this.randomizar(10);
    if (this._energia > 100) {
      this._energia = 100;
    }
  }
  public batalhar(): number {
    let desgaste: number = this.randomizar(10);
    this._energia -= desgaste;
    return desgaste;
  }
  public isDead(): boolean {
    return this._energia < 0;
  }
  // Método da classe Personagem então ele é privado
  private randomizar(fator: number): number {
    return Math.random() * fator;
  }
}
