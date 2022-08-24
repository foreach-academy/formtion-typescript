# Init et configuration d'un projet node avec typescript

Il faut avoir node d'installer

## creer un repertoire pour le projet

mkdir projet
cd projet

## initialiser le projet

npm init

npm install -D typescript@3.3.3
npm install -D tslint@5.12.1

## initialiser la configuration de typescript pour node

tsconfig.json

{
"compilerOptions": {
"module": "commonjs",
"esModuleInterop": true,
"target": "es6",
"moduleResolution": "node",
"sourceMap": true,
"outDir": "dist"
},
"lib": ["es2015"]
}

ou tsc --init

## ajout d'un script dans le package.json

package.json

{
"name": "node-with-ts",
"version": "1.0.0",
"description": "",
"main": "dist/app.js",
"scripts": {
"start": "tsc && node dist/index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"devDependencies": {
"@types/express": "^4.16.1",
"tslint": "^5.12.1",
"typescript": "^3.3.3"
},
"dependencies": {
"express": "^4.16.4"
}
}
