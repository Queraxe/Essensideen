let Essensvorschläge = [
	{
		name: "Gyros",
		img: "https://img.chefkoch-cdn.de/rezepte/2826591434709897/bilder/1357702/crop-960x720/gyros-selber-machen.jpg",
		image: new Image(),
	},
	{
		name: "Spinatquiche",
		img: "https://images.aws.nestle.recipes/original/58b46bf823cb4372a4d7db9ad920bf0f_1437804_ID57699_LachsSpinatQuiche01_online.jpg",
		image: new Image(),
	},
	{
		name: "Gemüsequiche",
		img: "https://images.lecker.de/gemusequiche-quer-durchs-beet,id=2823eb79,b=lecker,w=1200,rm=sk.jpeg",
		image: new Image(),
	},
	{
		name: "Kartoffelbrei mit Bouletten",
		img: "https://ais.kochbar.de/kbrezept/464562_665178/1200x1200/bouletten-mit-mischgemuese-und-kartoffelpuerree-rezept.jpg",
		image: new Image(),
	},
	{
		name: "Hirsebouletten",
		img: "https://www.59plus.de/wp-content/uploads/2017/04/Hirsefrikadellen-1.jpg",
		image: new Image(),
	},
	{
		name: "Lasagne",
		img: "https://www.precon.de/diaetmagazin/wp-content/uploads/Lasagne-Bolognese.jpg",
		image: new Image(),
	},
	{
		name: "Lachs-Sahne-Nudeln",
		img: "https://img.chefkoch-cdn.de/rezepte/1430421247909430/bilder/1331946/crop-960x540/nudeln-mit-lachs-sahne-sauce.jpg",
		image: new Image(),
	},
	{
		name: "crepes",
		img: "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/full_width_tablet_4_3/public/2021-01/crepes_teig_1.jpg?h=4521fff0&itok=XzzNNFWc",
		image: new Image(),
	},
	{
		name: "Schnitzel mit Pommes",
		img: "https://cdn.gutekueche.de/media/recipe/25461/wiener-schnitzel.jpg",
		image: new Image(),
	},
	{
		name: "Pizza",
		img: "https://img.zeit.de/zeit-magazin/wochenmarkt/2023-08/pizza-margherita-giovanni-stincone-rezept/super__450x300__mobile__scale_2",
		image: new Image(),
	},
	{
		name: "Spinatspätzle",
		img: "https://www.madamecuisine.de/wp-content/uploads/2020/11/spinat-spaetzle-featured.jpg",
		image: new Image(),
	},
	{
		name: "Burger",
		img: "https://ich-liebe-kaese.de/fileadmin/_processed_/b/3/rezept-pulled-chicken-cheese-burger_599718cf40_csm.jpg",
		image: new Image(),
	},
	{
		name: "Flammkuchen",
		img: "https://images.lecker.de/elsasser-flammkuchen,id=65c4c432,b=lecker,w=1200,rm=sk.jpeg",
		image: new Image(),
	},
	{
		name: "Blätterteig",
		img: "https://www.gutekueche.at/storage/media/recipe/42164/conv/lachs-schinken-schnecken-default.jpg",
		image: new Image(),
	},
	{
		name: "Currywurst",
		img: "https://image.brigitte.de/11724870/t/_Z/v3/w1440/r1/-/pommes-frites-mit-currywurst.jpg",
		image: new Image(),
	},
	{
		name: "Bohnenpfanne",
		img: "https://teutogriller.de/wp-content/uploads/2020/06/IMG_4237.jpeg",
		image: new Image(),
	},
];

function generiere() {
	let index = getIndex();

	try {
		while (index === indexalt) {
			index = getIndex();
		}
	} catch (e) {}

	let essen = Essensvorschläge[index];

	change(essen.name, essen.image);

	indexalt = index;
}

function change(essensname, essensimg) {
	let name = document.getElementById("name");
	let image = document.getElementById("image");
	let imagediv = document.getElementById("imagediv");
	let button = document.getElementById("button");

	name.classList.add("hide");
	imagediv.classList.add("hide");
	button.classList.add("hide");

	setTimeout(function () {
		name.textContent = essensname;
		image.src = essensimg.src;
	}, 200);

	setTimeout(function () {
		name.classList.remove("hide");
		imagediv.classList.remove("hide");
		button.classList.remove("hide");
	}, 200);
}

function getIndex() {
	return Math.floor(Math.random() * Essensvorschläge.length);
}

function preload() {
	for (var i = 0; i < Essensvorschläge.length; i++) {
		Essensvorschläge[i].image.src = Essensvorschläge[i].img;
	}
}

preload();

document.getElementById("button").onclick = function () {
	generiere();
};

generiere();
