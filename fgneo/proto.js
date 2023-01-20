class OM {
    nume;
    prenume;
    anulNasterii;
    anii;
    limba;

    constructor(nume, prenume, anulNasterii, anii, limba) {
        this.nume = nume;
        this.prenume = prenume;
        this.anulNasterii = anulNasterii;
        this.anii = anii;
        this.limba = limba;
    }
    prezentareaMea() {
        console.log('Numele meu este', this.nume, '\nNumele de familie este', this.prenume, '\nAnul nasterii este', this.anulNasterii, '\nAm', this.anii, 'ani si cunosc limba', this.limba)
    }
    studii() {
        if (this.anii > 18) { 
            console.log('Fac universitate')
        } else { 
            console.log('Fac scoala')
        }
    }
}


class Characteristic extends OM {
    inaltimea;
    greutatea;
    parul;
    ochii;
    rasa;
    
    constructor (nume, prenume, inaltimea, greutatea, parul, ochii, rasa, anulNasterii, anii, limba) {
        super(nume, prenume, anulNasterii, anii, limba)
        this.inaltimea = inaltimea;
        this.greutatea = greutatea;
        this.parul = parul;
        this.ochii = ochii;
        this.rasa = rasa;
    }
    caracteristica() {
        console.log('Ma numesc', this.nume, this.prenume, '\nInaltimea -', this.inaltimea, '\nGreutatea -', this.greutatea, '\nParul -', this.parul, '\nOchii -', this.ochii, '\nRasa -', this.rasa)
    }
}