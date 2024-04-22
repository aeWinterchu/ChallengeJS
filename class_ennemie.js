class Ennemi {
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