// 1 - decrire un panier (type ecommerce) avec des types et des fonctions
//     => je dois pouvoir ajouter des articles dans le panier
//     => je dois pouvoir connaitre le montant total du panier
//     => je dois pouvoir connaitre le nombre d'article du panier
//     => si j'ajoute plusieurs fois le meme article, je dois gerer une quantite

// Les types
// un type Article (une reference, un nom, un prix)
// un type Panier ( tableau d'article)

// Les fonctions
// ajouter un article => panier, article => panier
// montant total => panier => number
// nombre d'article => panier => number

// 4eme fonction
// un type PanierArticle (un article, une quantite)
// modifier Panier (tableau PanierArticle)
// modifier ma fonction ajouter un article pour appliquer la regle de gestion
// adapter les 2 autres fonctions pour utiliser quantite

type Article = {
  reference: string;
  nom: string;
  prix: number;
};

type Panier = { articles: Article[] };

let panier: Panier = {
  articles: [],
};

function ajouterArticle(panier: Panier, article: Article): Panier {
  return {
    articles: panier.articles.concat([article]),
  };
}

function montantTotal(panier: Panier): number {
  let prix = 0;
  for (let a of panier.articles) {
    prix = prix + a.prix;
  }

  return prix;
}

function montantTotalCollection(panier: Panier): number {
  return panier.articles.map((a) => a.prix).reduce((a, b) => a + b);
}

function nombreArticle(panier: Panier): number {
  return panier.articles.length;
}

let art1: Article = {
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

type PanierArticle = {
  article: Article;
  quantite: number;
};

type PanierAvecPanierArticle = {
  panierArticles: PanierArticle[];
};

function ajouterUnArticlePanierArticle(
  panier: PanierAvecPanierArticle,
  article: Article,
  quantite: number
): PanierAvecPanierArticle {
  // on utilise find pour trouver si dans le panier on a deja un article correspondant
  // find return un type union PanierArticle | undefined
  const panierArticle = panier.panierArticles.find(
    // je renvois un resultat uniquement si l'article du panierArticle est identique a l'article quee je veux ajouter
    (pa) => pa.article == article
  );

  if (panierArticle) {
    panierArticle.quantite += quantite;
  } else {
    panier.panierArticles.push({ article: article, quantite: quantite });
  }

  return panier;
}

function montantTotalPanierArticle(panier: PanierAvecPanierArticle): number {
  return panier.panierArticles
    .map((pa) => pa.article.prix * pa.quantite)
    .reduce((a, b) => a + b);
}

function nombreArticlePanierArticle(panier: PanierAvecPanierArticle): number {
  return panier.panierArticles.map((pa) => pa.quantite).reduce((a, b) => a + b);
}

let panierBis: PanierAvecPanierArticle = {
  panierArticles: [],
};

console.log(ajouterUnArticlePanierArticle(panierBis, art1, 12));
console.log(
  ajouterUnArticlePanierArticle(
    panierBis,
    { reference: "122334", nom: "test", prix: 79 },
    35
  )
);
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
