'use strict';
//3 cosas: 
//1. Borrar inputs
//2. 



function funcResetObject() {
    dataForm = {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: ""
};

}

function funcResetPreview() {
    card.classList.add('preview-palette1');
    return card;
}


function handleReset (event) {
    const resetPreviewCard = funcResetPreview();
    const resetObject = funcResetObject();
    console.log(resetObject);
    console.log(btnReset);
    
    /*for (const key in dataForm) {
    delete dataForm[key];
    }*/
  
    // console.log(dataForm); 
  
    // console.log("you resetted");
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