export function startCombat(pokemon1, pokemon2) {
    let choix;
    let i = 1;
    while (pokemon1.vie > 0 && pokemon2.vie > 0) {
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
    }
    if (pokemon1.vie > 0)
        alert("VICTOIRE");
    else
        alert("Defaite");
}