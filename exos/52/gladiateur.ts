import { nombreAleatoireEntre } from "./utils";

export type Gladiateur = {
  nom: string;
  adresse: number;
  force: number;
  equilibre: number;
  vitesse: number;
  strategie: number;
};

export function naissanceGladiateur(nomGladiateur: string): Gladiateur {
  return {
    nom: nomGladiateur,
    adresse: nombreAleatoireEntre(0, 3),
    force: nombreAleatoireEntre(0, 3),
    equilibre: nombreAleatoireEntre(0, 3),
    vitesse: nombreAleatoireEntre(0, 3),
    strategie: nombreAleatoireEntre(0, 3),
  };
}

export function entrainerGladiateur(
  gladiateur: Gladiateur,
  progressionJournaliere: number
): Gladiateur {
  gladiateur.adresse = gladiateur.adresse + 0.4 * progressionJournaliere;
  gladiateur.force = gladiateur.force + 0.3 * progressionJournaliere;
  gladiateur.equilibre = gladiateur.equilibre + 0.1 * progressionJournaliere;
  gladiateur.vitesse = gladiateur.vitesse + 0.5 * progressionJournaliere;
  gladiateur.strategie = gladiateur.strategie + 0.2 * progressionJournaliere;

  return gladiateur;
}
