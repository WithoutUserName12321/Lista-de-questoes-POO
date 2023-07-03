module.exports = class Data {
    constructor(dia, mes, ano) {
        this.Dia = dia;
        this.Mes = mes;
        this.Ano = ano;

        if (this.mes < 1 || this.mes > 12) {
            return false;
        }

        if (this.dia < 1 || this.dia > 31) {
            return false;
        }
        
        if (this.ano <= 0) {
            return false;
        }
        return true;
    }
}
