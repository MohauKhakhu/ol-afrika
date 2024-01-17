
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
	menuIcon.classList.toggle('bx-x');
	nabar.classList.toggle('active');
	


};
/*==============scroll section active lines=========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
sections.forEach(sec => {
	let top =window.screenY;
	let offset= sec.offsetTop - 150;
	let height= sec.offsetHeight;
	let id = sec.getAttribute('id');
	
	if(top >= offset && top < offset + height){
		navLinks.forEach(links => {
			/*================doesnt work yet need help=================*/
			links.classList.remove('active');
			document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
	
		});
	};
});

/*================sticky bar=================*/

let header = document.querySelectorAll('header');

header.classList.toggle('sticky',window.scrollY > 100);


	menuIcon.classList.remove('bx-x');
	nabar.classList.remove('active');
	

};
/*==================== scroll reveal ====================*/

ScrollReveal({
	//Reset:true,
	distance: '80px',
	duration: 2000,
	delay: 200
	});
	
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .sevices-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*====================Typed Js ====================*/
const typed= new Typed('.multiple-text',{
	strings: ['building dreams','broadcasting','sharing ideas','exposing tallent'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay:1000,
	loop:true
	
	
});

