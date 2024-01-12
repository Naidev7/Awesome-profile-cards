'use strict';

const btnReset=document.querySelector ('.js-reset-botton');


function handleReset (event) {
    event.preventDefault;
    card.classList.add('preview-palette1');
    dataForm ="";
    
    /*for (const key in dataForm) {
    delete dataForm[key];
    }*/
  
    console.log(dataForm); 
  
    console.log("you resetted");
}

btnReset.addEventListener ('click',handleReset);


/*const dataForm = {
    palette: 1,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: ""
}*/

/*const card = document.querySelector('.js-card');*/