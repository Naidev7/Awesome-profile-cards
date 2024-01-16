function handlebtnShare(event) {
	event.preventDefault();
	createdCard.classList.remove('hidden');
	btnCreateCard.classList.add('disableBtn');
	cardIcon.classList.remove('card__icon');
	cardIcon.classList.add('disableIcon');
	fetch('https://dev.adalab.es/api/card/', {
		method: 'POST',
		body: JSON.stringify(dataForm),
		headers: { 'Content-type': 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => {
			cardLink.innerHTML = data.cardURL;
			cardLink.href = data.cardURL;
			twitterBtn.href += data.cardURL;
			if (data.success == false) {
				cardCreated.innerHTML =
					'Uy, parece que falta algo por rellenar';
				cardLink.innerHTML = '';
			}
			console.log(data);
		});
}
btnCreateCard.addEventListener('click', handlebtnShare);
