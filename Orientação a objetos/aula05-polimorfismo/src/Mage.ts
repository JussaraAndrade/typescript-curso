import { Personagem } from './Personagem';
import { Util } from './util/Util';

export class Mage extends Personagem{
    
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string){
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(200, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);

    }
    // Sobrescrita de método
    public atacar(): string{
        return "Ataque do Mago";
    }

    public defender(atacante: Personagem): number {
        throw new Error('Method not implemented.');
    }
}