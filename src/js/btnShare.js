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
		});
}
btnCreateCard.addEventListener('click', handlebtnShare);
