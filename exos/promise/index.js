function callMonServeur() {
    return Promise.resolve("test");
}
function callMonServeurReject() {
    return Promise.reject("un message d'erreur");
}
let result = callMonServeur();
console.log(result);
let v = "";
result
    .then((str) => {
    v = str;
    console.log("dans le callback");
    return str;
})
    .catch((e) => console.log("erreur", e))
    .then((s) => console.log("2EME", s));
// async // await
let res = await callMonServeur();
