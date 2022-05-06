let letters = document.getElementsByClassName("letter");
let subtitle  = document.getElementById("name-subtitle");
function eraseName() {
	for(let i = 0; i < letters.length; i++) {
		letters[i].style.transition = "none";
		letters[i].style.paddingTop = "10px";
		letters[i].style.opacity = "0";
		letters[i].style.transform = "rotateY(270deg)";
	}
}
function animateName() {
	setTimeout(() => {
		for(let i = 0; i < letters.length; i++) {
			setTimeout(() => {
				letters[i].style.transition = "padding-top .5s, opacity .5s, transform .5s";
				letters[i].style.paddingTop = "0";
				letters[i].style.opacity = "1";
				letters[i].style.transform = "rotateY(360deg)";
			}, 50*i); 
		}
		setTimeout(() => {
			subtitle.style.opacity = "100%";
		}, 700);
	}, 300);
}
eraseName();
animateName();

function flip(letter) {
	if(letter.style.transform === "rotateY(180deg)") {
		letter.style.transform = "rotateY(360deg)"
	} else {
		letter.style.transform = "rotateY(180deg)";
	}
}