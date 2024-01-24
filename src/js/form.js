function handleHiddenDesign(event) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        formContainer.classList.add('hidden');
        btnShare.classList.add('hidden'); 
        arrow.classList.add('arrowUp'); 
        arrow2.classList.remove('arrowUp');
        arrow3.classList.remove('arrowUp');      
    } else {
        //section.classList.add('hidden');
        formContainer.classList.add('hidden');
        btnShare.classList.add('hidden');
        arrow.classList.add('arrowUp');
    }
}
    
legendDesign.addEventListener("click",handleHiddenDesign);


function handleHiddenForm(event) {
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        btnShare.classList.add('hidden');
        section.classList.add('hidden'); 
        arrow2.classList.add('arrowUp'); 
        arrow.classList.remove('arrowUp');  
        arrow3.classList.remove('arrowUp');    
    } else {
        //formContainer.classList.add('hidden');
        btnShare.classList.add('hidden');
        section.classList.add('hidden');
        arrow2.classList.add('arrowUp');
    }
}

legendFill.addEventListener("click",handleHiddenForm);


// function handleMouseOver(event) {
//     event.target.style.display = 'block';
// }

// fkBtn.addEventListener("mouseover", handleMouseOver);


// function handleMouseOut(event) {
//     event.target.style.display = 'none';
// }
// fkBtn.addEventListener("mouseout", handleMouseOut);

// fkBtn.addEventListener("mouseover",(event) => {
//       // highlight the mouseover target
//       popup.style.display = "block";
  
//       setTimeout(() => {
//         popup.style.display = "none";
//       }, 500);
//     },
//     false,
//   );


function handleHiddenShare(event) {
    if (btnShare.classList.contains('hidden')) {
        btnShare.classList.remove('hidden');
        formContainer.classList.add('hidden');
        section.classList.add('hidden'); 
        arrow3.classList.add('arrowUp');  
        arrow2.classList.remove('arrowUp');
        arrow.classList.remove('arrowUp');     
    } else {
        //btnShare.classList.add('hidden');
        formContainer.classList.add('hidden');
        section.classList.add('hidden');
        arrow3.classList.add('arrowUp');
        
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
