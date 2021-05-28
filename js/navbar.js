

const btnNav = document.getElementById('btn_menu');
const navbar = document.getElementById('navbar');


btnNav.addEventListener('click', ()=>{
	navbar.classList.toggle('navbar_responsive');
	btnNav.classList.toggle('fa-times');
})


