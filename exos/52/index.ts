import {
  creerLaniste,
  entrainerLesGladiateursDesLudis,
  Laniste,
  recruterUnNouveauGladiateur,
} from "./laniste";
import { entrainerLesGladiateurs, Specialite, TypeEntrainement } from "./ludi";

console.log("Hello 52");

let laniste: Laniste = creerLaniste(
  "Fabrice",
  "Ludi char",
  Specialite.COURSE_DE_CHAR
);

console.log(laniste);

console.log(recruterUnNouveauGladiateur(laniste, "glad 1"));
console.log(recruterUnNouveauGladiateur(laniste, "glad 2"));
console.log(recruterUnNouveauGladiateur(laniste, "glad 3"));

entrainerLesGladiateursDesLudis(laniste, TypeEntrainement.TACTIQUE);

laniste.ludis.forEach((l) => {
  console.table(l.gladiateurs);
});
