import { Personagem } from './Personagem';
import { Util } from './Util';


// Typescript - não tem suporte para herança múltipla
// Uma classe Warrior só pode extender uma classe Personagem
export class Warrior extends Personagem {
    private _forca: number;
    private _agilidade: number;
    // Regra - se é 1 é herança, se tem um é uma composição
    //Composição 
    //private _raca: Personagem;

     constructor(nome: string){
        // Acessando membros da superclasse
        super(nome);
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._vidaAtual = 100;
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}