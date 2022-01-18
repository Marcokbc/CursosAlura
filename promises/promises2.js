const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]');

const validateHTTPStatus = dogData => {
    if(!dogData.ok){//Se a requisição não foi bem suciedida
        throw new Error(`HTTP error, status ${dogData.status}`);
    }
    return dogData.json()
}

const setDogImg = ({ message: url }) => {
    dogImg.setAttribute('src', url)
}

//o metodo fetch faz uma requisição http e retorna os dados da url que a gente especificou como argumento
fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)