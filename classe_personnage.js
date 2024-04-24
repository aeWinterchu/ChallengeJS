class Personnage {
    constructor(nom, pv) {
        this.nom = nom;
        this.pv = pv;
        this.win = 0;
        this.attacks = {};
        this.objets = {};
    }

    getNom() {
        return this.nom;
    }

    getImage() {
        return this.image;
    }

    getPv() {
        return this.pv;
    }

    getWin() {
        return this.win;
    }

    getAttacks() {
        console.log(this.attacks);
    }

    ajouterAttaque(attack) {
        if (Object.keys(this.attacks).length < 2 && !(attack.nom in this.attacks)) { 
            this.attacks[attack.nom] = attack;
            console.log(`${attack.nom} a bien été ajouté.`);
        } else {
            console.log("Vous avez déjà 2 attaques ou cette attaque est déjà présente.");
            console.log("1. Voulez-vous échanger cette attaque contre une autre ?");
            console.log("2. Abandonner l'attaque ?");
            
            let choix = window.prompt("Voulez-vous échanger cette attaque contre une autre ? (1/2)");

            switch (choix) {
                case '1':
                    console.log("Vous avez choisi d'échanger cette attaque contre une autre.");
                    console.log("Voici vos attaques :");
                    this.getAttacks();
                    let choix2 = window.prompt("Quelle attaque voulez-vous échanger ? (1/2)");

                    switch (choix2) {
                        case '1':
                            console.log("Vous avez échangé " + this.attacks[Object.keys(this.attacks)[0]].nom + " contre " + attack.nom + ".");
                            this.attacks[Object.keys(this.attacks)[0]] = attack;
                            break;

                        case '2':
                            console.log("Vous avez échangé " + this.attacks[Object.keys(this.attacks)[1]].nom + " contre " + attack.nom + ".");
                            this.attacks[Object.keys(this.attacks)[1]] = attack;
                            break;

                        default:
                            console.log("Choix invalide.");
                            break;
                    }

                    break;
                case '2':
                    console.log("Vous avez choisi d'abandonner l'attaque.");
                    break;
                default:
                    console.log("Choix invalide.");
                    break;
            }
        }
    }

    ajouterObjet(objet) {
        this.objets[objet.nom] = objet;
    }

    retirerObjet(objet) {
        delete this.objets[objet.nom];
    }

    estDansInventaire(objet) {
        return objet.nom in this.objets;
    }

    afficherInventaire() {
        console.log("Objets dans l'inventaire :");
        Object.keys(this.objets).forEach(objet => {
            console.log(objet);
        });
    }
}


class Attack {
    constructor(nom, type, puissance) {
        this.nom = nom;
        this.type = type;
        this.usage = puissance;
        
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




//console.log(personnage.attacks[0])

let personnage = new Personnage("Main");//test afin de finir le combat 

let taere = new Attack("Attack1", "eau", 3)

personnage.ajouterAttaque(taere);

console.log("Nom du personnage :", personnage.nom); //test afin de finir le combat 
console.log("Attaques du personnage :", personnage.attacks); //test afin de finir le combat 
document.querySelector('h1').textContent = personnage.nom; //test afin de finir le combat 