# L’application : 52 avant notre ère : Les jeux du cirque

Cette application 52 avant notre ère : Les jeux du cirque (que l’on nommera à présent 52) est un jeu dans lequel les plus féroces lanistes (propriétaire d’école de gladiateurs) vont s’affronter.

Les lanistes possèdent un ou plusieurs Ludi (école de gladiateur). Chaque Ludi possède une spécialité parmi les suivantes : course de char, lutte (combat entre gladiateur) ou athlétisme.

Les ludi entraînent donc des gladiateurs qui seront amenés à conduire des chars, lutter ou réaliser des prouesses sportives. Pour définir le niveau d’un gladiateur, on lui donne une jauge (entre 0 et 10) sur les talents suivants : adresse, force, équilibre, vitesse, stratégie. Lors de sa naissance, un gladiateur se voit attribuer aléatoirement un niveau compris entre 0 et 3 sur chaque talent.

Ainsi, chaque joueur prendra le rôle d’un laniste. Il possède un Ludi, dont le joueur choisit la spécialité pour commencer et 10 deniers.

Voici les actions que peut entreprendre un joueur : recruter un nouveau gladiateur, entraîner ses gladiateurs.

Les gladiateurs ainsi préparés sont prêts pour les jeux du cirque !

## Règles de gestion

### Le recrutement:

Pour recruter un nouveau gladiateur, le laniste doit débourser 5 deniers. Il ne peut recruter à crédit. Le nombre de gladiateurs par ludi est limité à 10 gladiateurs.

### Les entrainements:

Pour entraîner un gladiateur, le laniste a le choix entre 3 exercices, peu importe sa spécialité :

- Entraînement physique
- Entraînement tactique
- Entraînement combiné

Chaque entraînement permet au gladiateur concerne de faire progresser ses jauges de talents selon les règles suivantes :

Si le ludi est spécialisé dans la course de char alors :

- L’Entraînement physique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 2 et 4.
- L’Entraînement tactique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 3 et 6.
- L’Entraînement combiné offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 2 et 7.

Si le ludi est spécialisé dans la lutte alors :

- L’Entraînement physique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 3 et 6.
- L’Entraînement tactique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 1 et 3.
- L’Entraînement combiné offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 1 et 5.

Si le ludi est spécialisé dans l’athlétisme alors :

- L’Entraînement physique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 3 et 5.
- L’Entraînement tactique offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 2 et 3.
- L’Entraînement combiné offre une amélioration régi par la progression du jour (PJ) matérialisé par un chiffre aléatoire entre 3 et 9.

Cette progression du jour (PJ) permet de calculer la nouvelle jauge des gladiateurs après l'entraînement :

- jauge adresse = jauge adresse existante + 0,4\*PJ
- jauge force = jauge force existante + 0,3\*PJ
- jauge équilibre = jauge équilibre existante - 0,1\*PJ
- jauge vitesse = jauge vitesse existante + 0,5\*PJ
- jauge stratégie = jauge stratégie existante - 0,2\*PJ

## TODO

- Decrire et modeliser a l'aide de types, et de fonctions
