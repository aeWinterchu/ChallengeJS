class Ennemie {
    constructor(nom, cheminImage) {
        this.nom = nom;
        this.image = new Image(); 
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


let opps = new Ennemie("OP*pps", "personnage/playerLeft.png");


document.querySelector('#nomEnnemie').textContent = opps.nom;