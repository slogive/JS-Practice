const $cards = document.querySelector(".cards"),
$newCard = document.createElement("div"),
$cloneCard = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// Remplazar
// $cards.replaceChild($newCard, $cards.children[2]);

// Insertar antes
// $cards.insertBefore($newCard, $cards.firstElementChild);

// Elimirar
// $cards.removeChild($cards.lastElementChild)

// Clonar la seccion entera
document.body.appendChild($cloneCard)
