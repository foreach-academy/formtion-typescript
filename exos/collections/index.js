var elements = ["un", "deux", "trois", "quatre", "cinq"];
elements.forEach(console.log);
var toUpper = function (s) { return s.toUpperCase(); };
elements.map(toUpper).forEach(function (e) { return console.log(e); });
var nombres = [4, 6, 3, 2, 9, 1, 7];
nombres.sort().forEach(function (e) { return console.log(e); });
nombres
    .sort()
    .reverse()
    .forEach(function (e) { return console.log(e); });
var tableau = [
    "un",
    "deux",
    "scrabbler",
    "carte",
    "fabrice",
    "les collections c'est genial",
];
var strLengthComparator = function (a, b) {
    if (a.length < b.length)
        return -1;
    if (a.length > b.length)
        return 1;
    return 0;
};
tableau
    .sort(function (a, b) {
    if (a.length < b.length)
        return -1;
    if (a.length > b.length)
        return 1;
    return 0;
})
    .forEach(function (e) { return console.log(e); });
tableau
    .sort(strLengthComparator)
    .reverse()
    .forEach(function (e) { return console.log(e); });
var utilisateurs = [
    { name: "anonymous", role: "VISITEUR" },
    { name: "fabrice", role: "ADMIN" },
    { name: "utilisateur 1", role: "UTILISATEUR" },
    { name: "anonymous 2", role: "VISITEUR" },
    { name: "anonymous 3", role: "VISITEUR" },
    { name: "maxime", role: "ADMIN" },
];
var roleComparator = function (u1, u2) {
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
utilisateurs.sort(roleComparator).forEach(function (e) { return console.log(e); });
utilisateurs
    .sort(roleComparator)
    .reverse()
    .forEach(function (e) { return console.log(e); });
var filtreVisiteur = function (u) {
    if (u.role == "VISITEUR")
        return true;
    return false;
};
utilisateurs.filter(filtreVisiteur).forEach(function (e) { return console.log(e); });
var nombres2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var addFn = function (a, b) { return a + b; };
console.log(nombres2.reduce(addFn));
console.log(nombres2.map(function (n) { return n * n; }).reduce(function (a, b) { return a + b; }));
var estPair = function (n) {
    return n % 2 == 0;
};
console.log(nombres2.every(estPair));
console.log(nombres2.some(estPair));
