function handleInputName(event) {
    const inputName = event.currentTarget.value;
    previewName.innerHTML = `${inputName}`;
};

userName.addEventListener('input', handleInputName);


function handleInputPosition(event) {
    const inputPosition = event.currentTarget.value;
    previewJob.innerHTML = `${inputPosition}`;
};

userPosition.addEventListener('input', handleInputPosition);


function handleInputEmail(event) {
    const inputEmail = event.currentTarget.value;
    previewEmail.href = `mailto:${inputEmail}`;
};

userEmail.addEventListener('input', handleInputEmail);


function handleInputPhone(event) {
    const inputPhone = event.currentTarget.value;
    previewPhone.href = `${inputPhone}`;
};

userPhone.addEventListener('input', handleInputPhone);


function handleInputLinkedin(event) {
    const inputLinkedin = event.currentTarget.value;
    previewLinkedin.href = `target_blank:${inputLinkedin}`;
};

userLinkedin.addEventListener('input', handleInputLinkedin);


// const text = document.querySelector('.js-input');
// const newText = document.querySelector('.js-newText');
// text.addEventListener('input', (getText) => {
//     const input = getText.currentTarget.value;
//     newText.innerHTML = `${input}`