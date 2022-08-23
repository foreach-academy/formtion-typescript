# Collections en javascript / typescript

resoudre les problemes suivant en utilisant **exclusivement** les fonctions de manipulation de collection documentees [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Indexed_collections#le_type_array)

**Ne pas utiliser de boucle for**

1. appliquer une fonction pour chaque element d'un tableau

- Afficher les elements du tableau suivant

```JS
let elements = ['un', 'deux', 'trois', 'quatre', 'cinq']

```

- Appliquer une operation sur les elements du tableau suivant

```JS
// mettre en majuscule tous les elements du tableau puis les afficher (2 operations)
let elements = ['un', 'deux', 'trois', 'quatre', 'cinq']
```

2. Trier les tableaux

- tri simple

```JS
// trier et afficher le tableau dans l'odre croissant puis decroissant
let nombres = [4,6,3,2,9,1,7]

```

- tri complexe

```JS
// trier et afficher le tableau dans l'ordre croissant pui decroissant en fonction de la taille des elements (nombre de caracteres)

let tableau = ["un", "deux", "scrabbler", "carte", "fabrice", "les collections c'est genial"]
```

- tri encore plus complexe :)

```JS
// Tier et afficher le tableau selon le role de chacun
// ADMIN puis VISITEUR puis UTILISATEUR
// puis le faire dans l'ordre inverse

let utilisateurs = [
	{name: "anonymous", role: "VISITEUR"},
	{name: "fabrice", role: "ADMIN"},
	{name: "utilisateur 1", role: "UTILISATEUR"},
	{name: "anonymous 2", role: "VISITEUR"},
	{name: "anonymous 3", role: "VISITEUR"},
	{name: "maxime", role: "ADMIN"},
	]
```

3. filtre

```JS
// filter et afficher les visiteurs

let utilisateurs = [
	{name: "anonymous", role: "VISITEUR"},
	{name: "fabrice", role: "ADMIN"},
	{name: "utilisateur 1", role: "UTILISATEUR"},
	{name: "anonymous 2", role: "VISITEUR"},
	{name: "anonymous 3", role: "VISITEUR"},
	{name: "maxime", role: "ADMIN"},
	]
```

4. operations diverses

- faire la somme de tous les elements d'un tableau

```JS
let nombres = [1,2,3,4,5,6,7,8,9]
```

- faire la somme de tous les elements au carre du tableau (2 operations)

```JS
let nombres = [1,2,3,4,5,6,7,8,9]
```

- tester si tous les elements d'un tableau respectent une conditions

```JS
// tester si tous les elements du tableau suivant sont pair
// tester si au moins un element du tableau suivant est pair
let nombres = [1,2,3,4,5,6,7,8,9]
```

4. Pour le fun

```JS
// Renvoyer l'element unique de ce tableau

let nombres = [1,3,4,3,6,7,7,4,1]

// c'est possible avec un peu de logique et un reduce
// => logique == les operateurs logiques tel que OR et AND et ....
// je vous laisse chercher un peu sur l'interweb
// toute solution inventive avec ou sans for est aussi la bienvenue
// Bonne chance et bonne journee :D
```
