
function handlebtnShare (event) {
    event.preventDefault();
    createdCard.classList.remove('hidden');
    btnCreateCard.classList.add('disableBtn');
    cardIcon.classList.remove('card__icon');
    cardIcon.classList.add('disableIcon');
}
btnCreateCard.addEventListener("click", handlebtnShare);