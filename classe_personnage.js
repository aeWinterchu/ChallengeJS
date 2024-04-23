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

    getAttacks(){
        console.log(this.attacks)
    }

    ajouterAttaque(attacks) {
        if (this.attacks.length < 2) {
            this.attacks.push(attacks);
            console.log(`${attacks.nom} a bien été ajouté.`);
        } else {
            console.log("Vous avez déjà 2 attaques.");
            console.log("1. Voulez-vous échanger cette attaque contre une autre ?");
            console.log("2. Abandonner l'attaque ?");
            // Vous pouvez utiliser window.prompt() ou une autre méthode pour obtenir l'entrée utilisateur
            let choix = window.prompt("Voulez-vous échanger cette attaque contre une autre ? (1/2)");
    
            switch (choix) {
                case '1':
                    console.log("Vous avez choisi d'échanger cette attaque contre une autre.");
                    console.log("Voici vos attaques :");
                    this.getAttacks(); 
                    // Vous pouvez obtenir le choix de l'utilisateur ici
                    let choix2 = window.prompt("Quelle attaque voulez-vous échanger ? (1/2)");
    
                    switch (choix2) {
                        case '1':
                            console.log("Vous avez échangé " + this.attacks[0].nom + " contre " + attaque.nom + ".");
                            this.attacks[0] = attaque;
                            break;
    
                        case '2':
                            console.log("Vous avez échangé " + this.attacks[1].nom + " contre " + attaque.nom + ".");
                            this.attacks[1] = attaque;
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


let personnage = new Personnage("Main");//test afin de finir le combat 
personnage.ajouterAttaque(new Attack("taere","eau",3));

const nomPersonnage = personnage.getNom();
console.log("Nom du personnage :", nomPersonnage);//test afin de finir le combat 


const attaquesPersonnage = personnage.getAttacks();
console.log("Attaques du personnage :", attaquesPersonnage);//test afin de finir le combat 

document.querySelector('h1').textContent = personnage.nom;//test afin de finir le combat 
