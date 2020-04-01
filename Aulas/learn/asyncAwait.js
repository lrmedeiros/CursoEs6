const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/*Jeito antigo:
minhaPromise().then(response => {
    console.log(response);
}).catch( err => {

});*/

async function executaPromise() {
    console.log(response = await minhaPromise());
    console.log(response = await minhaPromise());
    console.log(response = await minhaPromise());
    console.log(response = await minhaPromise());
    console.log(response = await minhaPromise());

    
}

executaPromise();