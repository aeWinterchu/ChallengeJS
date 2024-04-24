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

class Slime extends Ennemie {
    constructor(nom, cheminImage) {
        super(nom, cheminImage);
    }
}

class Prototype_God extends Ennemie {
    constructor(nom, cheminImage) {
        super(nom, cheminImage);
    }
}

class Werewolf extends Ennemie {
    constructor(nom, cheminImage) {
        super(nom, cheminImage);
    }
}

let slime = new Ennemie("Slime", "img/Slime.png")
let prototype_god = new Ennemie("PROTOTYPE-God", "img/God.png")
let werewolf = new Ennemie("Werewolf", "img/Werewolf.png")


document.querySelector('#nomEnnemie').textContent = slime.getNom();
document.querySelector('#imageEnnemie').src = slime.getImage().src;
//document.querySelector('#nomEnnemie').textContent = prototype_god.getNom();
//document.querySelector('#nomEnnemie').textContent = werewolf.getNom();