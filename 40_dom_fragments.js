const MESES = [
"enero",
"febrero",
"marzo",
"abril",
"mayo",
"junio",
"julio",
"agosto",
"septiembre",
"octubre",
"noviembre",
"diciembre",
];

$ul = document.createElement("ul")
$fragment = document.createDocumentFragment();

MESES.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h1>Prueba</h1>")
$ul.appendChild($fragment)
document.body.appendChild($ul)