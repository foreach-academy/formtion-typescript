// ajouter les types

let helloWorld = "Hello World";

function upperCase(value) {
  return value.toUpperCase();
}

console.log(upperCase(helloWorld));

let prices = [1, 45, 67, 33.9];

function reduce(values) {
  return values.reduce((a, b) => a + b);
}

console.log(reduce(prices));

enum Role {
  Utilisateur,
  Admin,
}

type Utilisateur = {
  nom;
  role;
};

let u = {
  nom: "Fabrice",
  role: Role.Admin,
};

function isAdmin(user) {
  if (user.role == Role.Admin) {
    return true;
  }
  return false;
}
