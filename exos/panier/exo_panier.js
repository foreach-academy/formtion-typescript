// 1 - decrire un panier (type ecommerce) avec des types et des fonctions
//     => je dois pouvoir ajouter des articles dans le panier
//     => je dois pouvoir connaitre le montant total du panier
//     => je dois pouvoir connaitre le nombre d'article du panier
//     => si j'ajoute plusieurs fois le meme article, je dois gerer une quantite
var panier = {
    articles: [],
};
function ajouterArticle(panier, article) {
    return {
        articles: panier.articles.concat([article]),
    };
}
function montantTotal(panier) {
    var prix = 0;
    for (var _i = 0, _a = panier.articles; _i < _a.length; _i++) {
        var a = _a[_i];
        prix = prix + a.prix;
    }
    return prix;
}
function montantTotalCollection(panier) {
    return panier.articles.map(function (a) { return a.prix; }).reduce(function (a, b) { return a + b; });
}
function nombreArticle(panier) {
    return panier.articles.length;
}
var art1 = {
    reference: "qwerty",
    nom: "un clavier",
    prix: 10,
};
panier = ajouterArticle(panier, art1);
panier = ajouterArticle(panier, art1);
panier = ajouterArticle(panier, art1);
panier = ajouterArticle(panier, art1);
console.log(panier);
console.log(montantTotal(panier));
console.log(montantTotalCollection(panier));
console.log(nombreArticle(panier));
function ajouterUnArticlePanierArticle(panier, article, quantite) {
    // on utilise find pour trouver si dans le panier on a deja un article correspondant
    // find return un type union PanierArticle | undefined
    var panierArticle = panier.panierArticles.find(
    // je renvois un resultat uniquement si l'article du panierArticle est identique a l'article quee je veux ajouter
    function (pa) { return pa.article == article; });
    if (panierArticle) {
        panierArticle.quantite += quantite;
    }
    else {
        panier.panierArticles.push({ article: article, quantite: quantite });
    }
    return panier;
}
function montantTotalPanierArticle(panier) {
    return panier.panierArticles
        .map(function (pa) { return pa.article.prix * pa.quantite; })
        .reduce(function (a, b) { return a + b; });
}
function nombreArticlePanierArticle(panier) {
    return panier.panierArticles.map(function (pa) { return pa.quantite; }).reduce(function (a, b) { return a + b; });
}
var panierBis = {
    panierArticles: [],
};
console.log(ajouterUnArticlePanierArticle(panierBis, art1, 12));
console.log(ajouterUnArticlePanierArticle(panierBis, { reference: "122334", nom: "test", prix: 79 }, 35));
console.log(ajouterUnArticlePanierArticle(panierBis, art1, 42));
console.table(panierBis.panierArticles);
console.log(montantTotalPanierArticle(panierBis));
console.log(nombreArticlePanierArticle(panierBis));
console.dir(panierBis.panierArticles);
// function ajouterUnArticlePanierArticle(
//   panier: PanierAvecPanierArticle,
//   article: Article,
//   quantite: number
// ): PanierAvecPanierArticle {
//   // on utilise find pour trouver si dans le panier on a deja un article correspondant
//   // find return un type union PanierArticle | undefined
//   let newPanierArticles: PanierArticle[] = [];
//   const panierArticle = panier.panierArticles.find(
//     // je renvois un resultat uniquement si l'article du panierArticle est identique a l'article quee je veux ajouter
//     (pa) => pa.article == article
//   );
//   if (panierArticle) {
//     newPanierArticles = panier.panierArticles.filter(
//       (pa) => pa.article != article
//     );
//     let newPa: PanierArticle = {
//       article: panierArticle.article,
//       quantite: panierArticle.quantite + quantite,
//     };
//     newPanierArticles.push(newPa);
//   } else {
//     newPanierArticles.push({ article: article, quantite: quantite });
//   }
//   return {
//     panierArticles: newPanierArticles,
//   };
// }
