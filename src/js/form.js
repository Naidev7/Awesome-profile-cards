'Use strict';
section.addEventListener("click",(event)=>{
    event.preventDefault();

    if(section.classList.contains('hidden')){
        section.classList.add('hidden')
        console.log(section);
    }
     else(
        section.classList.remove('hidden')
    );
});