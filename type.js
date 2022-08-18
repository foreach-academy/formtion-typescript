// Declaration d'une variable de type number avec let
var test = 42;
// Declaration d'une constante de type number avec const
var var2 = 42;
// Les principaux types string, boolean et number
var string = "";
var bool = true;
var num = 4.2;
// Pour les tableaux on utilise les []
var tableau2 = [1, 2, 3];
// Le type foure-tout
var nePasFaireCa = [1, 2, 3];
// le type null
var nePasUtiliserNull = null;
// le typage d'une fonction
function helloWorld(nom) {
    return "Hello " + nom;
}
var func1 = function (a, b) {
    return a + b;
};
// les type union avec |
var x = true ? false : 42;
// les enums
var Direction;
(function (Direction) {
    Direction[Direction["Haut"] = 0] = "Haut";
    Direction[Direction["Bas"] = 1] = "Bas";
    Direction[Direction["Gauche"] = 2] = "Gauche";
    Direction[Direction["Droite"] = 3] = "Droite";
})(Direction || (Direction = {}));
var direction = Direction.Haut;
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Utilisateur"] = "UTILISATEUR";
    Role["Visteur"] = "VISITEUR";
})(Role || (Role = {}));
var user2 = {
    nom: "fabrice",
    age: 43,
    role: Role.Admin
};
// tableau de type personnalise
var users;
// type literaux, le compilateur deduit le type en fonction de la premiere valeur.
var literal = "Literal";
var maVariable = null;
