class Ennemie {
    constructor(nom, image,cheminImage) {
        this.nom = nom;
        this.image = image;
        this.image.src = cheminImage;
        this.attacks = [];

    }

    getNom() {
        return this.nom;
    }

    getImage() {
        return this.image;
    }

    getAttacks() {
        return this.attacks;
    }
}



let opps = new Ennemie("NomDuPersonnage");  //test afin de finir le combat 
document.querySelector('h1').textContent = opps.nom; //test afin de finir le combat 

nomEnnemieElement.textContent = opps.nom; //test afin de finir le combat 