import { Util } from './util/Util';

// Classe incompleta; que pode possui métodos abstratos quantos quiser
// Ela não pode ser instanciada
export abstract class Personagem {
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;

  constructor(nome: string){
    this._nome = nome;
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(100, 1_000);
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
  }
  // Contratos
  
  /* métodos abstratos; são métodos que possui apenas uma assinatura sem ter uma implementação*/
  public abstract atacar(): string;

  // assinatura: (atacante: Personagem)
  public abstract defender(atacante: Personagem): number;
}
