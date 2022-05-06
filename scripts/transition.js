let navbarLinks = document.getElementsByClassName("navbar-link");
let sidebarLinks = document.getElementsByClassName("sidebar-link");
let pages = document.getElementsByClassName("page");
let semaphore = false;
let current = 0;
function transition(index) {
	if(current === index || semaphore === true) {
		return;
	}
	for(let i = 0; i < pages.length; i++) {
		if(i === index) {
			navbarLinks[i].classList.add("navbar-link-active");
			sidebarLinks[i].classList.add("sidebar-link-active");
		} else {
			navbarLinks[i].classList.remove("navbar-link-active");
			sidebarLinks[i].classList.remove("sidebar-link-active");
		}
	}
	
	pages[current].classList.remove("page-active");
	pages[index].classList.add("page-active");
	semaphore = true;
	setTimeout(() => {
		current = index;
		semaphore = false;
	}, 400);
}