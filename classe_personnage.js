class Personnage {
    constructor(nom,pv) {
        this.nom = nom;
        this.pv = pv;
        this.win = 0;
        this.attacks = [];
        this.objets = [];

        
    }

    
    getNom() {
        return this.nom;
    }

    getImage() {
        return this.image;
    }

    getPv(){
        return this.pv
    }

    getWin(){
        return this.win
    }

    ajouterAttaque(attaque) {
        if (this.attacks.length < 2) {
            this.attacks.push(attaque);
            console.log(`${attaque.nom} a bien été ajouté.`);
        } else {
            console.log("Vous avez déjà 2 attaques.");
            console.log("1. Voulez-vous échanger cette attaque contre une autre ?");
            console.log("2. Abandonner l'attaque ?");
            let choix = scanner.nextInt();

            switch (choix) {
                case 1:
                    console.log("Vous avez choisi d'échanger cette attaque contre une autre.");
                    console.log("Voici vos attaques :");
                    this.getAttacks(); 
                    let choix2 = scanner.nextInt();
                    switch (choix2) {
                        case 1:
                            console.log("Vous avez échangé " + this.attacks[0].nom + " contre " + attaque.nom + ".");
                            this.attacks[0] = attaque;
                            break;

                        case 2:
                            console.log("Vous avez échangé " + this.attacks[1].nom + " contre " + attaque.nom + ".");
                            this.attacks[1] = attaque;
                            break;

                        default:
                            console.log("Choix invalide.");
                            break;
                    }

                    break;
                case 2:
                    console.log("Vous avez choisi d'abandonner l'attaque.");
                    break;
                default:
                    console.log("Choix invalide.");
                    break;
            }
        }
    }

    ajouterObjet(objet) {
        this.objets.push(objet);
    }

    
    retirerObjet(objet) {
        const index = this.objets.indexOf(objet);
        if (index !== -1) {
            this.objets.splice(index, 1);
        }
    }

    
    estDansInventaire(objet) {
        return this.objets.includes(objet);
    }


    
    afficherInventaire() {
        console.log("Objets dans l'inventaire :");
        this.objets.forEach(objet => {
            console.log(objet.nom); 
        });
    }
}
const nomPersonnage = personnage.getNom();
console.log("Nom du personnage :", nomPersonnage);


const attaquesPersonnage = personnage.getAttaques();
console.log("Attaques du personnage :", attaquesPersonnage);


let personnage = new Personnage("NomDuPersonnage");  //test afin de finir le combat 
document.querySelector('h1').textContent = personnage.nom; //test afin de finir le combat 

nomPersonnageElement.textContent = personnage.nom; //test afin de finir le combat 