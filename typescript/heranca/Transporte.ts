export class Transporte {
  private _capacidade: number;

  constructor(capacidade: number) {
    this._capacidade = capacidade;
  }

  public get $capacidade(): number {
    return this._capacidade;
  }

  public set $capacidade(value: number) {
    this._capacidade = value;
  }

  public visualizar(): void {
    console.log("**********************************");
    console.log("\nDados do meio de Transporte:");
    console.log("**********************************");
    console.log(`Capacidade: ${this._capacidade}`);
  }
}
