import { naissanceGladiateur } from "./gladiateur";
import {
  creerLudi,
  entrainerLesGladiateurs,
  Ludi,
  peuAccueillirGladiateur,
  recruteGladiateur,
  Specialite,
  TypeEntrainement,
} from "./ludi";

const DEFAULT_DENIER: number = 10;

export type Laniste = {
  nom: string;
  ludis: Ludi[];
  denier: number;
};

export function creerLaniste(
  nomLaniste: string,
  nomLudi: string,
  specialiteLudi: Specialite
): Laniste {
  return {
    nom: nomLaniste,
    ludis: [creerLudi(nomLudi, specialiteLudi)],
    denier: DEFAULT_DENIER,
  };
}

export function recruterUnNouveauGladiateur(
  laniste: Laniste,
  nomGladiateur: string
): Laniste {
  if (laniste.denier < 5) {
    console.log("Impossible de recruter un gladiateur");
    return laniste;
  }

  let ludi = laniste.ludis.find(peuAccueillirGladiateur);

  if (ludi) {
    laniste.denier -= 5;
    let gladiateur = naissanceGladiateur(nomGladiateur);
    recruteGladiateur(ludi, gladiateur);
  }

  return laniste;
}

export function entrainerLesGladiateursDesLudis(
  laniste: Laniste,
  typeEntrainement: TypeEntrainement
): Laniste {
  laniste.ludis.forEach((ludi) => {
    entrainerLesGladiateurs(ludi, typeEntrainement);
  });
  return laniste;
}
