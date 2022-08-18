// Declaration d'une variable de type number avec let
let test: number = 42;

// Declaration d'une constante de type number avec const
const var2: number = 42;

// Les principaux types string, boolean et number
let string: string = "";
let bool: boolean = true;
let num: number = 4.2;

// Pour les tableaux on utilise les []
let tableau2: number[] = [1, 2, 3];

// Le type foure-tout
let nePasFaireCa: any = [1, 2, 3];

// le type null
let nePasUtiliserNull: null = null;

// le typage d'une fonction
function helloWorld(nom: string): string {
  return "Hello " + nom;
}

let func1 = (a: number, b: number): number => {
  return a + b;
};

// les type union avec |
let x: boolean | number = true ? false : 42;

// les enums
enum Direction {
  Haut,
  Bas,
  Gauche,
  Droite,
}

let direction: Direction = Direction.Haut;

enum Role {
  Admin = "ADMIN",
  Utilisateur = "UTILISATEUR",
  Visteur = "VISITEUR",
}

// un type personalise
type Utilisateur = {
  nom: string;
  age: number;
  role: Role;
};

let user2: Utilisateur = {
  nom: "fabrice",
  age: 43,
  role: Role.Admin,
};

// tableau de type personnalise
let users: Utilisateur[];

// type alias, on renomme un type pour lui donner plus de sens
type Nom = string;
type CodeBarre = string;

// type literaux, le compilateur deduit le type en fonction de la premiere valeur.
let literal = "Literal";
let maVariable = null;
