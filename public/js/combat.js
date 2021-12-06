function pvVisuel(pokemon1,pokemon2,pv1max,pv2max){
    var elem = document.getElementById("myBar");
    var elem2 = document.getElementById("myBar2");
    var width1 = (pokemon1.vie/pv1max) * 100 + "%";
    var width2 = (pokemon2.vie/pv2max) * 100 + "%";
    if(width1 < 0)
        width1 = 1 + "%";
    if(width2 < 0)
        width2 = 1 + "%";
    if((pokemon1.vie/pv1max) * 100 < 50)
        elem.style.backgroundColor = "yellow";
    if((pokemon2.vie/pv2max) * 100 < 50)
        elem2.style.backgroundColor = "yellow";
    if((pokemon1.vie/pv1max) * 100 < 25)
        elem.style.backgroundColor = "#FF0000";
    if((pokemon2.vie/pv2max) * 100 < 25)
        elem2.style.backgroundColor = "#FF0000";
    elem.style.width = width1;
    elem2.style.width = width2;
}

export function startCombat(pokemon1, pokemon2) {
    let choix;
    let i = 1;
    let pv1max = pokemon1.vie;
    let pv2max = pokemon2.vie;
    document.getElementById("pokemon1Name").innerHTML = pokemon1.nom + " lvl " + pokemon1.niveau;
    document.getElementById("pokemon2Name").innerHTML = pokemon2.nom + " lvl " + pokemon2.niveau;
    while (pokemon1.vie > 0 && pokemon2.vie > 0) {
        pvVisuel(pokemon1,pokemon2,pv1max,pv2max);
        choix = +prompt(`Tour ${i} : \nPoints de vie de votre ${pokemon1.nom} : ${pokemon1.vie}\n
        Points de vie du ${pokemon2.nom} ennemi : ${pokemon2.vie}\n
        Quel attaque voulez-vous choisir : \n
        1.Fatal Foudre  2.Queue de fer  3.Charge    4.Vive-attaque             `);

        if (pokemon1.vitesse > pokemon2.vitesse) {
            switch (choix) {
                case 1:
                    pokemon1.fatal_foudre(pokemon2);
                    break;
                case 2:
                    pokemon1.queue_de_fer(pokemon2);
                    break;
                case 3:
                    pokemon1.charge(pokemon2);
                    break;
                case 4:
                    pokemon1.quick_attack(pokemon2);
                    break;
            }
            if(pokemon2.vie > 0){
                switch (Math.floor(Math.random() * 4 + 1)) {
                    case 1:
                        pokemon2.flammeche(pokemon1);
                        break;
                    case 2:
                        pokemon2.picpic(pokemon1);
                        break;
                    case 3:
                        pokemon2.quick_attack(pokemon1);
                        break;
                    case 4:
                        pokemon2.charge(pokemon1);
                        break;
                }
            }
        }
        if (pokemon2.vitesse > pokemon1.vitesse) {
            switch (Math.floor(Math.random() * (4 - 1 + 1) + 1)) {
                case 1:
                    pokemon2.flammeche(pokemon1);
                    break;
                case 2:
                    pokemon2.picpic(pokemon1);
                    break;
                case 3:
                    pokemon2.quick_attack(pokemon1);
                    break;
                case 4:
                    pokemon2.charge(pokemon1);
                    break;
            }
            if(pokemon1.vie > 0){
                switch (choix) {
                    case 1:
                        pokemon1.fatal_foudre(pokemon2);
                        break;
                    case 2:
                        pokemon1.queue_de_fer(pokemon2);
                        break;
                    case 3:
                        pokemon1.charge(pokemon2);
                        break;
                    case 4:
                        pokemon1.quick_attack(pokemon2);
                        break;
                }
            }
        }
        pvVisuel(pokemon1,pokemon2,pv1max,pv2max);
    }
    if (pokemon1.vie > 0){
        alert("VICTOIRE");
        document.getElementById("myBar2").style.width = "0%"
        document.getElementById("endGame").innerHTML = "VICTOIRE";
    }
    else{
        alert("Defaite");
        document.getElementById("myBar").style.width = "0%"
        document.getElementById("maSection").setAttribute("style","filter: brightness(0.1);");
        document.getElementById("endGame").innerHTML = "DEFAITE";
    }
}