const section = document.querySelector('section');
const button = document.querySelector('button');
const buttonTwo = button.nextElementSibling;
//selecting div
const diving = document.querySelector('div');
const buttonAdd = diving.children[2];
const buttonRemove = diving.children[3];
console.log(buttonAdd, buttonRemove);


//first method DOM class changer
button.addEventListener('click', () => {
   if(section.className === 'red-bg visible'){
       section.className = 'red-bg invisible';
   }
    else{
        section.className = 'red-bg visible';
}});


//second method DOM class changer
buttonTwo.addEventListener('click', ()=>{
section.classList.toggle('visible');
section.classList.toggle('invisible');
});

buttonAdd.addEventListener('click', ()=> {
    section.classList.replace('invisible','visible');
})

buttonRemove.addEventListener('click', ()=> {
    section.classList.replace('visible','invisible');
})


// buttonAdd.addEventListener('click', ()=> {
//     section.classList.add('invisible');
// })

// buttonRemove.addEventListener('click', ()=> {
//     section.classList.remove('invisible')
// })