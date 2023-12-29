'Use strict';

section.addEventListener("click",(event)=>{
    event.preventDefault();

    if(section.classList.contains('hidden')){
        section.classList.remove('hidden')
        console.log(section);
    }
     else(
        section.classList.add('hidden')
    );
});

//lo mismo pero con el form//

form.addEventListener("click",(event)=>{
    event.preventDefault();

    if(form.classList.contains('hidden')){
        form.classList.remove('hidden')
    }
     else(
        form.classList.add('hidden')
    );
});

//Y más con el button de share//

btnShare.addEventListener("click",(event)=>{
    event.preventDefault();

    if(btnShare.classList.contains('hidden')){
        btnShare.classList.remove('hidden')
    }
     else(
        btnShare.classList.add('hidden')
    );
});
