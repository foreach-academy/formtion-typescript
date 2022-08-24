import { Gladiateur } from "./gladiateur";

export type Ludi = {
  name: string;
};

function ajouterUnGladiateurPrive() {
  console.log("DEBUG");
}

export function ajouterUnGladiateur(
  ludi: Ludi,
  gladiateur: Gladiateur
): boolean {
  ajouterUnGladiateurPrive();
  return true;
}
