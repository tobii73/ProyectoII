//Aqui crearemos el toggle de los contenedores y el input de number para la cantidad de stock

//Tomamos el id de las flechas para el evento
const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

// Funciones click

btnIncrement.addEventListener('click', () => {
    //Aqui estoy incrementando cada vez que cliquee en incrementar
    valueByDefault += 1
    inputQuantity.value = valueByDefault
}
)

btnDecrement.addEventListener('click', () => {
    //Aqui estoy decrementando cada vez que cliquee en decrementar, agrego condicional para que no pase de 1
    if (valueByDefault === 1){
        return
    }

    valueByDefault -= 1
    inputQuantity.value = valueByDefault
}
)


//Tomamos los id de los textos y de los titulos para hacer el toggle

//Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
const toggleReviews = document.querySelector('.title-reviews')

//Constantes Contenido Texto
const contentDescription = document.querySelector('.text-description')
const contentAdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')

//Funciones Toggle

toggleDescription.addEventListener('click', () =>{
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () =>{
    contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () =>{
    contentReviews.classList.toggle('hidden');
});