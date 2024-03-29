let dataForm = {
	palette: 1,
	name: '',
	job: '',
	phone: '',
	email: '',
	linkedin: '',
	github: '',
	photo: '',
};

function printHtml() {
	previewJob.innerHTML = dataForm.job;
	previewImg.innerHTML = dataForm.photo;
	previewPhone.href = ` tel:${dataForm.phone}`;
	previewEmail.href = `mailto:${dataForm.email}`;
	previewLinkedin.href = `https://www.linkedin.com/in/${dataForm.linkedin}`;
	previewGithub.href = `https://www.github.com/${dataForm.github}`;
	if (dataForm.name === '') {
		previewName.innerHTML = 'Nombre y apellido';
	} else {
		previewName.innerHTML = dataForm.name;
	}
	if (dataForm.job === '') {
		previewJob.innerHTML = 'Front-end developer';
	} else {
		previewJob.innerHTML = dataForm.job;
	}
	// const newStorage = JSON.stringify(dataForm);
	// localStorage.setItem('user', newStorage);
	localStorage.setItem('name', userName.value);
	localStorage.setItem('job', userPosition.value);
	localStorage.setItem('email', userEmail.value);
	localStorage.setItem('phone', userPhone.value);
	localStorage.setItem('linkedin', userLinkedin.value);
	localStorage.setItem('github', userGithub.value);
	//localStorage.setItem('photo', previewImg.src);
}
function dataStorage() {
	if (localStorage.getItem('name') !== null) {
		userName.value = localStorage.getItem('name');
		previewName.innerHTML = userName.value;
		userPosition.value = localStorage.getItem('job');
		previewJob.innerHTML = userPosition.value;
		userEmail.value = localStorage.getItem('email');
		previewEmail.href = userEmail.value;
		userPhone.value = localStorage.getItem('phone');
		previewPhone.href = userPhone.value;
		userLinkedin.value = localStorage.getItem('linkedin');
		previewLinkedin.href = userLinkedin.value;
		userGithub.value = localStorage.getItem('github');
		previewGithub.href = userGithub.value;
	}
}
dataStorage();
console.log(dataStorage());
function handleForm(event) {
	const inputId = event.target.id;
	if (event.target.type != 'radio' && event.target.type != 'file') {
		dataForm[inputId] = event.target.value;
	}
	printHtml();
}

form.addEventListener('input', handleForm);
