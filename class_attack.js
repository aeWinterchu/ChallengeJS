class Attack {
    constructor(nom, type, usage) {
        this.nom = nom;
        this.type = type;
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

    
}

let taere = new Attack("taere","eau",3)