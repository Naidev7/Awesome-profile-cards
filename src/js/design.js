//Crear evento para los checkbox que le añada y le quite la clase a la tarjeta//


function handlePaletteOne(event) {
    card.classList.remove('preview-palette1', 'preview-palette2', 'preview-palette3'  );
    card.classList.add('preview-palette1');
    dataForm.palette = 1;
}

paletteOne.addEventListener("click", handlePaletteOne);

function handlePaletteTwo(event) {
    card.classList.remove('preview-palette1', 'preview-palette2', 'preview-palette3' );
    card.classList.add('preview-palette2');
    dataForm.palette = 2;
}

paletteTwo.addEventListener("click", handlePaletteTwo);

function handlePaletteThree(event) {
    card.classList.remove('preview-palette1', 'preview-palette2', 'preview-palette3' );
    card.classList.add('preview-palette3');
    dataForm.palette = 3;
}

paletteThree.addEventListener("click", handlePaletteThree);

