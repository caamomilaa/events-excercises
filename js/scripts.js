//EVENTOS DE ESCUCHA: cllback de evenos, fuera de los paréntesis, para poder usar la lógca luego. ese callbacka no llevaparéntesis cuando la llamamos (NO: handleclick ()), porque nos aparece la estructura e antes, pero no hace la función.

// const handleclick = event/ () => {
//   console.log(event);
// };
// document.addEventListener('click', handleclick); =>>> esto es poner el callback fuera

//EVENT.TARGET =>>IMPORTANTE

//Flujo de la captura de pantalla que hice: pasa un evento, aplico una lógica (handleClick) y desde ahí, como es la funcion de callback, indico lo que quiero hacer. por ejemplo en reproductorde musica: hay un click en el botón de play y con la función de cllback, saco el event.target y le digo que quiero hacer.

// # Ejercicios

// ## EVENTOS

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');

const changeTextOnHover = () => {
	titleElement.textContent = 'Quita de encima!!!';
};
titleElement.addEventListener('mouseover', changeTextOnHover);

const changeTextLeaving = () => {
	titleElement.textContent = 'Soy un título';
};
titleElement.addEventListener('mouseout', changeTextLeaving);

// - Crea un botón con la etiqueta <button> en tu página HTML con el texto "Click me" y añadele un evento de click. Al hacer click tendrá que poner "clicked x times" donde x será el número de veces que hiciste click en él.

const buttonElement = document.getElementById('button');

const getClickedTimes = () => {
	//contador
};
buttonElement.addEventListener('click', getClickedTimes);

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control.

// - Crea un array con 5 palabras, las que tú quieras. Añade un h2 a tu HTML. Añade dos botones con el texto previous y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera al pulsar el botón next y cuando estés en la primera podrás volver a la última haciendo click al botón previous.
