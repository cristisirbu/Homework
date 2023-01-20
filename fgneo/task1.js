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
        if (this.isRunning == true && this.rezervoar > 0)  {
            this.viteza += 10;
            if (this.viteza > 180) {
                this.viteza = 90;
                console.log('Viteza a fost depasita de 180 km/h si a fost scazuta la 90 km/h \nFiti atenti la viteza')
            }
            this.rezervoar--;
            console.log('Cu succes masina accelereaza', '\nMasina la moment accelereaza cu', this.viteza, 'km/h')
        } else {
            console.log('Masina nu poate accelera din cauza ca este deconectata sau sa consumat cobustibilul \nVerificati!')
        }
    }

    descrieMasina() {
        console.log(this.model, this.culoare, '\nFabricata in', this.fabricata, '\nMerge cu', this.viteza, 'km/h', '\nAre', this.rezervoar + 'l benzina' )
    }

    alimentare(procente) {
        if (this.isRunning == false) {
            if (this.rezervoar <= 0) {
                this.rezervoar = 10;
                console.log('Din cauza ca rezervoarul sa golit am adaugat zece litru')
            } else { 
                if (procente) {
                    this.rezervoar = (this.rezervoar * procente) / 100 + this.rezervoar
                } else (
                    this.rezervoar = (this.rezervoar * 10) / 100 + this.rezervoar
                )
                console.log('Masina a fost alimentata cu succes')

            }   
            
        } else {
            console.log('Masina nu poate fi alimentata din cauza ca este conectata')
        }
    }
}