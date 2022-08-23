let elements = ["un", "deux", "trois", "quatre", "cinq"];

elements.forEach(console.log);

let toUpper = (s: string): string => s.toUpperCase();

elements.map(toUpper).forEach((e) => console.log(e));

let nombres = [4, 6, 3, 2, 9, 1, 7];
nombres.sort().forEach((e) => console.log(e));

nombres
  .sort()
  .reverse()
  .forEach((e) => console.log(e));

let tableau = [
  "un",
  "deux",
  "scrabbler",
  "carte",
  "fabrice",
  "les collections c'est genial",
];

let strLengthComparator = (a: string, b: string): number => {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  return 0;
};

tableau
  .sort((a: string, b: string): number => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  })
  .forEach((e) => console.log(e));

tableau
  .sort(strLengthComparator)
  .reverse()
  .forEach((e) => console.log(e));

type Utilisateur = {
  name: string;
  role: string;
};

let utilisateurs: Utilisateur[] = [
  { name: "anonymous", role: "VISITEUR" },
  { name: "fabrice", role: "ADMIN" },
  { name: "utilisateur 1", role: "UTILISATEUR" },
  { name: "anonymous 2", role: "VISITEUR" },
  { name: "anonymous 3", role: "VISITEUR" },
  { name: "maxime", role: "ADMIN" },
];

let roleComparator = (u1: Utilisateur, u2: Utilisateur): number => {
  if (u1.role == "ADMIN" && u2.role == "UTILISATEUR") {
    return -1;
  }
  if (u1.role == "UTILISATEUR" && u2.role == "ADMIN") {
    return 1;
  }
  if (u1.role == "UTILISATEUR" && u2.role == "VISITEUR") {
    return -1;
  }
  if (u1.role == "VISITEUR" && u2.role == "UTILISATEUR") {
    return 1;
  }
  if (u1.role == "ADMIN" && u2.role == "VISITEUR") {
    return -1;
  }
  if (u1.role == "VISITEUR" && u2.role == "ADMIN") {
    return 1;
  }

  return 0;
};

utilisateurs.sort(roleComparator).forEach((e) => console.log(e));

utilisateurs
  .sort(roleComparator)
  .reverse()
  .forEach((e) => console.log(e));

let filtreVisiteur = (u: Utilisateur): boolean => {
  if (u.role == "VISITEUR") return true;
  return false;
};

utilisateurs.filter(filtreVisiteur).forEach((e) => console.log(e));

let nombres2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nombres2.reduce((a, b) => a + b));

console.log(nombres2.map((n) => n * n).reduce((a, b) => a + b));

let estPair = (n: number) => {
  return n % 2 == 0;
};

console.log(nombres2.every(estPair));
console.log(nombres2.some(estPair));

let nombres3 = [1, 3, 4, 3, 6, 7, 7, 4, 1];
console.log(nombres3.reduce((a, b) => a ^ b));
