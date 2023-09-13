const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Recupére les flèches droite et gauche
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');

// Recupére les bullet points
let dots = document.querySelectorAll('.dot');

// Indique la diapositive actuelle
let position = 0;


// Event listeners, événement au clic
leftArrow.addEventListener('click', function () {
	console.log("Clic sur la flèche gauche");
	let previousImg = position - 1; //Img précedente 
	if (previousImg < 0) {
		//Revenir à la dernière img
		previousImg = slides.length - 1;
	}
	updateSlide(previousImg);
});

rightArrow.addEventListener('click', function () {
	console.log("Clic sur la flèche droite");
	let nextImg = position + 1; //Img suivante 
	if (nextImg >= slides.length) {
		//Revenir à la première img
		nextImg = 0;
	}
	updateSlide(nextImg);
});


// Fonction pour mettre à jour la diapositive actuelle
function updateSlide(index) {
	// MAJ image
	let bannerImg = document.querySelector('.banner-img'); // Recupére l'image actuelle
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Recupére le chemin de l'image en fonction de l'index

	// MAJ texte
	let tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = slides[index].tagLine; // Modifie la légende de l'image en fonction de l'index

	// MAJ points
	dots[position].classList.remove('dot_selected'); // Supprime la classe "dot_selected" 
	dots[index].classList.add('dot_selected'); // Ajoute la classe "dot_selected" 

	// MAJ index de la diapositive actuelle
	position = index;
}

// Event listener pour les points , événement au clic
dots.forEach(function (dot,index) { // Acces au éléments du tableaux, et leurs positions
	dot.addEventListener('click', function () {
		updateSlide(index);
	});
});
