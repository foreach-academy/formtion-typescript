// ajouter les types

let helloWorld: string = "Hello World";

function upperCase(value: string): string {
  return value.toUpperCase();
}

console.log(upperCase(helloWorld));

let prices: number[] = [1, 45, 67, 33.9];

function reduce(values: number[]): number {
  return values.reduce((a: number, b: number): number => a + b);
}

console.log(reduce(prices));

enum Role {
  Utilisateur,
  Admin,
}

type Utilisateur = {
  nom: string;
  role: Role;
};

let u: Utilisateur = {
  nom: "Fabrice",
  role: Role.Admin,
};

function isAdmin(user: Utilisateur): boolean {
  if (user.role == Role.Admin) {
    return true;
  }
  return false;
}
