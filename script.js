const btnbar =document.querySelector('.nav-bar nav .btn-bar');
const mobile =document.querySelector('.nav-bar nav ul');
btnbar.addEventListener('click', () =>{
    btnbar.classList.toggle('active');
    mobile.classList.toggle('active');
});