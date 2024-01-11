'use strict';

function handleHiddenDesign(event) {
    section.classList.toggle('hidden');
    arrow.classList.toggle('arrowUp');
}

legendDesign.addEventListener("click",handleHiddenDesign);


function handleHiddenForm(event) {
    formContainer.classList.toggle('hidden');
    arrow2.classList.toggle('arrowUp');
}

legendFill.addEventListener("click",handleHiddenForm);

function handleHiddenShare(event) {
    btnShare.classList.toggle('hidden');
    arrow3.classList.toggle('arrowUp');
}

legendShare.addEventListener("click",handleHiddenShare)

//crear un evento para todo el form que será el current target//
/*
function handleForm(event) {
    console.log(event.currentTarget);
    console.log(event.target);
   previewName.innerHTML = userName.value
}

form.addEventListener("click", handleForm);

*/
