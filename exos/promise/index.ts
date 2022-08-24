async function callMonServeur(): Promise<string> {
  return Promise.resolve("test");
}
function callMonServeurReject(): Promise<String> {
  return Promise.reject("un message d'erreur");
}

let result = callMonServeur();

console.log(result);
let v: String = "";

result
  .then((str) => {
    //un autre appel
    v = str;
    console.log("dans le callback");
    return str;
  })
  .catch((e) => console.log("erreur", e))
  .then((s) => console.log("2EME", s));

// async // await

try {
  let res = await callMonServeur();
} catch (e) {
  console.log(e);
}
