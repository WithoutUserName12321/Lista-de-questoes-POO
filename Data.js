module.exports = class Data {
    constructor(dia, mes, ano) {
        this.Dia = dia;
        this.Mes = mes;
        this.Ano = ano;
    }

    Constructor(){
        if (this.mes < 1 || this.mes > 12) {
            return false;
        }

        if (this.dia < 1 || this.dia > 31) {
            return false;
        }
        
        if (this.ano <= 0) {
            return false;
        }
        else{
            return true;
            this.dia = 1
            this.mes = 1
            this.ano = 1
        }
                
    }
}
