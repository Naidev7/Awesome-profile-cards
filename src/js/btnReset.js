'use strict';

//1. Borrar inputs
// 2. devolver preview card a diseño inicial

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

function deletehtml() {
    previewJob.innerHTML = dataForm.job;
    previewImg.innerHTML = `src="https://static.vecteezy.com/system/resources/previews/000/230/130/original/female-web-developer-illustration-vector.jpg"`;
    previewPhone.href =` tel:${ dataForm.phone}`;
    previewEmail.href = `mailto:${dataForm.email}`;
    previewLinkedin.href = `https://www.linkedin.com/in/${dataForm.linkedin}`;
    previewGithub.href = `https://www.github.com/${dataForm.github}`;
    if(dataForm.name === ""){
        previewName.innerHTML = 'Nombre y apellido'
    } else{
        previewName.innerHTML = dataForm.name;
    }
    if(dataForm.job === ""){
        previewJob.innerHTML = 'Front-end developer'
    } else{
        previewJob.innerHTML = dataForm.job;
    }
}

function funcResetPreview() {
    card.classList.add('preview-palette1');
    card.classList.remove('preview-palette2', 'preview-palette3');
}

function handleReset (event) {
    event.preventDefault();
     funcResetPreview();
     funcResetObject();
     deletehtml();
}

btnReset.addEventListener ('click',handleReset);
gfi
