module.exports = class Aluno {
  constructor(mat, nome, n1, n2, pt) {
    this.matricula = mat;
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.trabalho = pt;
    this.media;
  }
  calcularMedia() {
    var somaNotas = (this.nota1 * 2, 5) + (this.nota2 * 2, 5) + this.trabalho * 2; 
    var media = somaNotas / 7;
    console.log("A sua média é : " + media);
  }

  media() {
    this.media = ((this.nota1 * 2, 5) + (this.nota2 * 2, 5) + this.trabalho * 2) / 7;
    return this.media;
  }
};
