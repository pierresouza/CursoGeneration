export class ExcecaoSimples extends Error {
  constructor(message: string) {
    super();
    this.name = "ExcecaoSimples";
    this.message = message;
  }
}
