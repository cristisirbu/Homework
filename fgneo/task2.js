class Masina {
    model;
    culoare;
    fabricata;
    viteza;
    isRunning;

    constructor(model, culoare, fabricata, viteza) {
        this.model = model;
        this.culoare = culoare;
        this.fabricata = fabricata;
        this.viteza = viteza;
        this.isRunning = false;
    }


    start() {
        this.isRunning = true; 
        console.log('Masina sa pornit')
    }

    stop() {
        this.isRunning = false;
        console.log('Sa oprit')
    }
}


class VehiculCuPetrol extends Masina {
    rezervoar;

    constructor(model, culoare, fabricata, viteza, rezervoar, isRunning) {
        super(model, culoare, fabricata, viteza, isRunning)
        this.rezervoar = rezervoar;
    }
    
    accelereaza() {
        if (this.isRunning == true) {
            this.viteza += 10;
            this.rezervoar--;
            console.log('Cu succes masina accelereaza', '\nMasina la moment accelereaza cu', this.viteza, 'km/h')
        } else {
            console.log('Masina nu poate accelera din cauza ca este deconectata')
        }
    }

    descrieMasina() {
        console.log(this.model, this.culoare, '\nFabricata in', this.fabricata, '\nMerge cu', this.viteza, 'km/h', '\nAre', this.rezervoar + 'l benzina' )
    }

    alimentare() {
        if (this.isRunning == false) {
            this.rezervoar = ((this.rezervoar / 10) + this.rezervoar).toFixed(2)
            console.log('Masina a fost alimentata cu succes')
        } else {
            console.log('Masina nu poate fi alimentata din cauza ca este conectata')
        }
    }
}