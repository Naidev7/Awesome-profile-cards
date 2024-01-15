let dataForm = {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: ""
}

function printHtml() {
    previewJob.innerHTML = dataForm.job;
    previewImg.innerHTML = dataForm.photo;
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

function handleForm(event) {
    const inputId = event.target.id;
    dataForm[inputId] = event.target.value;
    console.log(dataForm);
    printHtml();
}

form.addEventListener("input", handleForm);