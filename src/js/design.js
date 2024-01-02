//Crear evento para los checkbox que le añada y le quite la clase a la tarjeta//


function handlePaletteOne(event) {
    card.classList.add('preview-palette1');
    console.log(handlePaletteOne);
}

paletteOne.addEventListener("click", handlePaletteOne);

function handlePaletteTwo(event) {
    card.classList.remove('preview-palette1');
    card.classList.add('preview-palette2');
}

paletteTwo.addEventListener("click", handlePaletteTwo);

function handlePaletteThree(event) {
    card.classList.remove('preview-palette2');
    card.classList.add('preview-palette3');
}

paletteThree.addEventListener("click", handlePaletteThree);

/*
function handleColorsContainer(event){
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.target.id === "colors1") {
        card.classList.add('preview-palette1');
    } else{
        card.classList.remove('preview-palette1');
    }
}

colorsContainer.addEventListener("click",handleColorsContainer);*/