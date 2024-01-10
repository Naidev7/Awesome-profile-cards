function handleHiddenDesign(event) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        formContainer.classList.add('hidden');
        btnShare.classList.add('hidden'); 
        arrow.classList.add('arrowUp');       
    } else {
        section.classList.add('hidden');
        formContainer.classList.remove('hidden');
        btnShare.classList.add('hidden');
        arrow.classList.remove('arrowUp');
    }

}
    

legendDesign.addEventListener("click",handleHiddenDesign);


function handleHiddenForm(event) {
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        btnShare.classList.add('hidden');
        section.classList.add('hidden'); 
        arrow2.classList.add('arrowUp');       
    } else {
        formContainer.classList.add('hidden');
        btnShare.classList.remove('hidden');
        section.classList.add('hidden');
        arrow2.classList.remove('arrowUp');
    }
}

legendFill.addEventListener("click",handleHiddenForm);

function handleHiddenShare(event) {
    if (btnShare.classList.contains('hidden')) {
        btnShare.classList.remove('hidden');
        formContainer.classList.add('hidden');
        section.classList.add('hidden'); 
        arrow3.classList.add('arrowUp');       
    } else {
        btnShare.classList.add('hidden');
        formContainer.classList.remove('hidden');
        section.classList.add('hidden');
        arrow3.classList.remove('arrowUp');
    }
   
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


// function pepino () {
//     if ()

// }

// const allHeaders = document.querySelectorAll('.js-header-section');
// for (const header of allHeaders) {
//     header.addEventListener('click', pepino)
// }
