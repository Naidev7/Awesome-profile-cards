
function handlebtnShare (event) {
    event.preventDefault();
    createdCard.classList.remove('hidden');
    btnCreateCard.classList.add('disableBtn');
    cardIcon.classList.add('disableIcon');
 }
btnCreateCard.addEventListener("click", handlebtnShare);