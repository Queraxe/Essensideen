let Essensvorschläge = [
    {
      name: "Gyros",
      img: "https://img.chefkoch-cdn.de/rezepte/2826591434709897/bilder/1357702/crop-960x720/gyros-selber-machen.jpg",
      image: new Image()
    },
    {
      name: "Spinatquiche",
      img: "https://images.aws.nestle.recipes/original/58b46bf823cb4372a4d7db9ad920bf0f_1437804_ID57699_LachsSpinatQuiche01_online.jpg",
      image: new Image()
    },
    {
      name: "Gemüsequiche",
      img: "https://images.lecker.de/gemusequiche-quer-durchs-beet,id=2823eb79,b=lecker,w=1200,rm=sk.jpeg",
      image: new Image()
    },
    {
      name: "Kartoffelbrei mit Bouletten",
      img: "https://ais.kochbar.de/kbrezept/464562_665178/1200x1200/bouletten-mit-mischgemuese-und-kartoffelpuerree-rezept.jpg",
      image: new Image()
    },
    {
      name: "Hirsebouletten",
      img: "https://www.59plus.de/wp-content/uploads/2017/04/Hirsefrikadellen-1.jpg",
      image: new Image()
    },
    {
      name: "Lasagne",
      img: "https://www.precon.de/diaetmagazin/wp-content/uploads/Lasagne-Bolognese.jpg",
      image: new Image()
    },
    {
      name: "Lachs-Sahne-Nudeln",
      img: "https://img.chefkoch-cdn.de/rezepte/1430421247909430/bilder/1331946/crop-960x540/nudeln-mit-lachs-sahne-sauce.jpg",
      image: new Image()
    }
]

function generiere(){
    let index = getIndex();

    let essen = Essensvorschläge[index];

    change(essen.name, essen.image);
}

function change(essensname, essensimg){
    let name = document.getElementById("name");
    let image = document.getElementById("image");
    let imagediv = document.getElementById("imagediv");
    let button = document.getElementById("button");

    name.classList.add('hide');
    imagediv.classList.add('hide');
    button.classList.add('hide');
    
    setTimeout(function() { 
        name.textContent = essensname;
        image.src = essensimg.src;
    }, 200);

    setTimeout(function() { 
        name.classList.remove('hide');
        imagediv.classList.remove('hide');
        button.classList.remove('hide');
    }, 200);
}

function getIndex(){
    return Math.floor(Math.random() * Essensvorschläge.length);
}

function preload(){
    for (var i = 0; i < Essensvorschläge.length; i++) {
        Essensvorschläge[i].image.src = Essensvorschläge[i].img;
        
    }
}

preload();


document.getElementById("button").onclick = function(){
    generiere();
}

generiere();