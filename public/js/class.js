function calculType(typeAttaque,typesPokemon2,degats){
    switch (typeAttaque){
        case "Acier":
            if(typesPokemon2.indexOf("Fee") > -1|| typesPokemon2.indexOf("Roche") > -1){
                degats *= 2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || (typesPokemon2.indexOf("Eau")) > -1
            || (typesPokemon2.indexOf("Electrique")) > -1|| (typesPokemon2.indexOf("Feu")) > -1){
                degats /= 2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Combat":
            if((typesPokemon2.indexOf("Acier")) > -1 || (typesPokemon2.indexOf("Glace")) > -1
            || (typesPokemon2.indexOf("Roche")) > -1){
                degats *= 2;
                alert("C'est super efficace")
            }
            if((typesPokemon2.indexOf("Fee")) > -1|| (typesPokemon2.indexOf("Insecte")) > -1
            || (typesPokemon2.indexOf("Poison")) > -1 || (typesPokemon2.indexOf("Psy")) > -1
            || (typesPokemon2.indexOf("Tenebres")) > -1){
                degats /= 2;
                alert("Ce n'est pas tres efficace")
            }
            if((typesPokemon2.indexOf(Spectre)) > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Dragon":
            if(typesPokemon2.indexOf("Dragon") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1){
                degats /= 2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Fee") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Eau":
            if(typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Roche") > -1
            || typesPokemon2.indexOf("Sol") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Dragon") > -1 || typesPokemon2.indexOf("Electrique") > -1
            || typesPokemon2.indexOf("Plante") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Electrique":
            if(typesPokemon2.indexOf("Eau") > -1 || typesPokemon2.indexOf("Vol") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Dragon") > -1 || typesPokemon2.indexOf("Electrique") > -1
            || typesPokemon2.indexOf("Plante") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("SOl") > -1){
                degats *=0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Fee":
            if(typesPokemon2.indexOf("Combat") > -1 || typesPokemon2.indexOf("Dragon") > -1
            || typesPokemon2.indexOf("Tenebres") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Feu") > -1 
            || typesPokemon2.indexOf("Poison") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Feu":
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Glace") > -1 
            || typesPokemon2.indexOf("Plante") > -1 || typesPokemon2.indexOf("Insecte") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Dragon") > -1 || typesPokemon2.indexOf("Eau") > -1 
            || typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Roche") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Glace":
            if(typesPokemon2.indexOf("Dragon") > -1 || typesPokemon2.indexOf("Plante") > -1
            || typesPokemon2.indexOf("Sol") > -1 || typesPokemon2.indexOf("Vol") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Eau") > -1
            || typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Glace") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Insecte":
            if(typesPokemon2.indexOf("Plante") > -1 || typesPokemon2.indexOf("Psy") > -1
            || typesPokemon2.indexOf("Tenebres") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Combat") > -1
            || typesPokemon2.indexOf("Fee") > -1 || typesPokemon2.indexOf("Feu") > -1
            || typesPokemon2.indexOf("Poison") > -1 || typesPokemon2.indexOf("Sol") > -1
            || typesPokemon2.indexOf("Vol") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Normal":
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Roche") > -1){
                degats /= 2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Spectre") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Plante":
            if(typesPokemon2.indexOf("Eau") > -1 || typesPokemon2.indexOf("Roche") > -1
            || typesPokemon2.indexOf("Sol") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Dragon") > -1
            || typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Insecte") > -1
            || typesPokemon2.indexOf("Plante") > -1 || typesPokemon2.indexOf("Poison") > -1
            || typesPokemon2.indexOf("Vol") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Poison":
            if(typesPokemon2.indexOf("Fee") > -1 || typesPokemon2.indexOf("Plante") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Poison") > -1 || typesPokemon2.indexOf("Roche") > -1
            || typesPokemon2.indexOf("Sol") > -1 || typesPokemon2.indexOf("Spectre") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Psy":
            if(typesPokemon2.indexOf("Combat") > -1 || typesPokemon2.indexOf("Poison") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Psy") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Tenebres") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Roche":
            if(typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Glace") > -1
            || typesPokemon2.indexOf("Insecte") > -1 || typesPokemon2.indexOf("Vol") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Combat") > -1
            || typesPokemon2.indexOf("Sol") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Sol":
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Electrique") > -1
            || typesPokemon2.indexOf("Feu") > -1 || typesPokemon2.indexOf("Poison") > -1
            || typesPokemon2.indexOf("Roche") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Insecte") > -1 || typesPokemon2.indexOf("Plante") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Vol") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Spectre":
            if(typesPokemon2.indexOf("Psy") > -1 || typesPokemon2.indexOf("Spectre") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Tenebres") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            if(typesPokemon2.indexOf("Normal") > -1){
                degats *= 0;
                alert("L'attaque n'a aucun effet")
            }
            break;
        case "Tenebres":
            if(typesPokemon2.indexOf("Psy") > -1 || typesPokemon2.indexOf("Spectre") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Combat") > -1 || typesPokemon2.indexOf("Fee") > -1
            || typesPokemon2.indexOf("Tenebres") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
        case "Vol":
            if(typesPokemon2.indexOf("Combat") > -1 || typesPokemon2.indexOf("Insecte") > -1
            || typesPokemon2.indexOf("Plante") > -1){
                degats *=2;
                alert("C'est super efficace")
            }
            if(typesPokemon2.indexOf("Acier") > -1 || typesPokemon2.indexOf("Electrique") > -1
            || typesPokemon2.indexOf("Roche") > -1){
                degats /=2;
                alert("Ce n'est pas tres efficace")
            }
            break;
    }
    degats = degats * ( Math.random() * (1 - 0.85 + 1) + 0.85);
    return Math.round(degats);
}

function calculDegat(basepower,pokemon1,pokemon2,typeDegat,typeAttaque){
    let r;
    r = pokemon1.niveau * 0.4  + 2;
    if(typeDegat == "P"){
        r *= pokemon1.attaque * basepower;
        r = r / (pokemon2.defense * 50);
        r += 2;
    }
    else{
        r *= pokemon1.attaqueSpe * basepower;
        r = r / (pokemon2.defenseSpe * 50);
        r += 2;
    }
    if(typeAttaque == pokemon1.type[0] || typeAttaque == pokemon1.type[1]){
        r *= 1,5;
    }
    return Math.round(r);
}

export class Pokemon{
    constructor(nom,niveau,vie,vitesse,attaque,defense,attaqueSpe,defenseSpe,type){
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.vitesse = vitesse;
        this.attaque = attaque;
        this.defense = defense;
        this.attaqueSpe = attaqueSpe;
        this.defenseSpe =defenseSpe;
        this.type = type;
    }
}

export class Pikachu extends Pokemon{
    constructor(nom,niveau,vie,vitesse,attaque,defense,attaqueSpe,defenseSpe,type) {
        super(nom,niveau,vie,vitesse,attaque,defense,attaqueSpe,defenseSpe,type);
        this.fatal_foudre = (ennemi) => {
            let degat = calculDegat(110,this,ennemi,"S","Electrique");
            degat =  calculType("Electrique",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Fatal-Foudre \n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.queue_de_fer = (ennemi) => {
            let degat = calculDegat(100,this,ennemi,"P","Acier");
            degat =  calculType("Acier",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Queue De Fer\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.charge = (ennemi) => {
            let degat = calculDegat(40,this,ennemi,"P","Normal");
            degat =  calculType("Normal",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Charge\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.quick_attack = (ennemi) => {
            let degat = calculDegat(40,this,ennemi,"P","Normal");
            degat =  calculType("Normal",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Vive-Attaque\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
    }
}

export class Poussifeu extends Pokemon{
    constructor(nom,niveau,vie,vitesse,attaque,defense,attaqueSpe,defenseSpe,type) {
        super(nom,niveau,vie,vitesse,attaque,defense,attaqueSpe,defenseSpe,type);
        this.flammeche = (ennemi) => {
            let degat = calculDegat(40,this,ennemi,"S","Feu");
            degat =  calculType("Feu",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Flammeche\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.picpic = (ennemi) => {
            let degat = calculDegat(35,this,ennemi,"P","Vol");
            degat =  calculType("Vol",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Picpic\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.quick_attack = (ennemi) => {
            let degat = calculDegat(40,this,ennemi,"P","Normal");
            degat =  calculType("Normal",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Vive-Attaque\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
        this.charge = (ennemi) => {
            let degat = calculDegat(40,this,ennemi,"P","Normal");
            degat =  calculType("Normal",ennemi.type,degat);
            ennemi.vie -= degat;
            alert(`${this.nom} utilise Charge\n${ennemi.nom} a perdu ${degat} points de vie`);
        };
    }
}