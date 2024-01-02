//Crear evento para los checkbox que le añada y le quite la clase a la tarjeta//


function handlePaletteOne(event) {
    card.classList.toggle('preview-palette1');
}

paletteOne.addEventListener("click", handlePaletteOne);
console.log(paletteOne);

function handlePaletteTwo(event) {
    card.classList.toggle('preview-palette2');
}

paletteTwo.addEventListener("click", handlePaletteTwo);

function handlePaletteThree(event) {
    card.classList.toggle('preview-palette3');
}

paletteThree.addEventListener("click", handlePaletteThree);