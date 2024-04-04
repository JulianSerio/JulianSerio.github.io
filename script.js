const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
	
hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('active');
	hamburger.classList.toggle('active');
});


const headerContainer = document.querySelector('.header-container');
const listItems = headerContainer.querySelectorAll('li');
const totalItems = listItems.length;
let currentItemIndex = 0;
		
function showNextItem() {
	const previousItemIndex = (currentItemIndex - 1 + totalItems) % totalItems;
		
	listItems[previousItemIndex].classList.remove('active');
	listItems[currentItemIndex].classList.add('active');	
	currentItemIndex = (currentItemIndex + 1) % totalItems;
}
		
setInterval(showNextItem, 1000);

