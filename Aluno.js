module.exports = class Aluno {
  constructor(mat, nome, n1, n2, pt) {
    this.matricula = mat;
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.trabalho = pt;
    this.media;
  }
  media() {
    this.media = ((this.nota1 * 2, 5) + (this.nota2 * 2, 5) + this.trabalho * 2) / 7;
    return `Media calculada: ${this.media}`
  }






  situacaoFinal(){
    if(this.media < 7){
        let quantNescessaria = 12 - this.media
        console.log("O aluno precisa de "+quantNescessaria + " para ser aprovado!" )
    }
    else{
        console.log("O aluno foi aprovado!")
    }
}




}
