const aPromise = new Promise((resolve, reject) => { 
    //resolve quando der tudo (a operação assincrona) certo,
    // e reject quando der errado

    const aNumber = 37;
    resolve(aNumber); //O parametro do resolve vai para o then
    //reject(aNumber);

});

aPromise.then(value => { //then é o responsavel por receber a resposta de sucesso da promise
    console.log(value);
})
//.catch(rejectValue => {
    // console.log({rejectValue})
// }) o catch so se aplica com um reject ou se o then lança um erro

//pode indentar outro then e a função do then captura como parametro o valor retornado pelo then