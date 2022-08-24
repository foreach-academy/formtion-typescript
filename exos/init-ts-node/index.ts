import { Gladiateur } from "./gladiateur";
import { Ludi, ajouterUnGladiateur } from "./ludi";

let ludi: Ludi = {
  name: "nom du ludi",
};

let glad: Gladiateur = {
  name: "Glad",
};

console.log(ajouterUnGladiateur(ludi, glad));

console.log(ludi);
