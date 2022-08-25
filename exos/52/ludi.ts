import { entrainerGladiateur, Gladiateur } from "./gladiateur";
import { nombreAleatoireEntre } from "./utils";

const MAX_GLADIATEUR: number = 10;

export enum Specialite {
  COURSE_DE_CHAR,
  LUTTE,
  ATHLETISME,
}

export enum TypeEntrainement {
  PHYSIQUE,
  TACTIQUE,
  COMBINE,
}

export type Ludi = {
  nom: string;
  specialite: Specialite;
  gladiateurs: Gladiateur[];
};

export function creerLudi(nom: string, specialite: Specialite): Ludi {
  return {
    nom: nom,
    specialite: specialite,
    gladiateurs: [],
  };
}

export function peuAccueillirGladiateur(ludi: Ludi): boolean {
  return ludi.gladiateurs.length < MAX_GLADIATEUR;
}

export function recruteGladiateur(ludi: Ludi, gladiateur: Gladiateur): Ludi {
  ludi.gladiateurs.push(gladiateur);

  return ludi;
}

function calculerPjCourseDeChar(typeEntrainemt: TypeEntrainement): number {
  switch (typeEntrainemt) {
    case TypeEntrainement.PHYSIQUE:
      return nombreAleatoireEntre(2, 4);
    case TypeEntrainement.TACTIQUE:
      return nombreAleatoireEntre(3, 6);
    case TypeEntrainement.COMBINE:
      return nombreAleatoireEntre(2, 7);
  }
}

function calculerPjLutte(typeEntrainemt: TypeEntrainement): number {
  switch (typeEntrainemt) {
    case TypeEntrainement.PHYSIQUE:
      return nombreAleatoireEntre(3, 6);
    case TypeEntrainement.TACTIQUE:
      return nombreAleatoireEntre(1, 3);
    case TypeEntrainement.COMBINE:
      return nombreAleatoireEntre(1, 5);
  }
}

function calculerPjAthletisme(typeEntrainemt: TypeEntrainement): number {
  switch (typeEntrainemt) {
    case TypeEntrainement.PHYSIQUE:
      return nombreAleatoireEntre(3, 5);
    case TypeEntrainement.TACTIQUE:
      return nombreAleatoireEntre(2, 3);
    case TypeEntrainement.COMBINE:
      return nombreAleatoireEntre(3, 9);
  }
}

function calculerPj(ludi: Ludi, typeEntrainement: TypeEntrainement): number {
  switch (ludi.specialite) {
    case Specialite.COURSE_DE_CHAR:
      return calculerPjCourseDeChar(typeEntrainement);
    case Specialite.ATHLETISME:
      return calculerPjAthletisme(typeEntrainement);
    case Specialite.LUTTE:
      return calculerPjLutte(typeEntrainement);
  }
}

export function entrainerLesGladiateurs(
  ludi: Ludi,
  typeEntrainement: TypeEntrainement
): Ludi {
  const pj: number = calculerPj(ludi, typeEntrainement);

  ludi.gladiateurs = ludi.gladiateurs.map((g) => entrainerGladiateur(g, pj));
  return ludi;
}
