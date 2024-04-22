class Attack {
    constructor(nom, type, niveau, usage) {
        this.nom = nom;
        this.type = type;
        this.niveau = niveau;
        this.usage = usage;
        
    }

    getNom() {
        return this.nom;
    }

    getType() {
        return this.type;
    }

    getNiveau() {
        return this.niveau;
    }

    getUsage() {
        return this.usage;
    }

    getAttacks() {
        return this.attacks;
    }
}