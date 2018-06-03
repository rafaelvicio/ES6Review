let minhaPromise = new Promise((resolve, reject) => {
    let resultado = true;
    if(resultado) {
        resolve('Deu tudo certo');
    } else {
        reject('Deu errado :/');
    }
});

minhaPromise.then();
minhaPromise.catch();
