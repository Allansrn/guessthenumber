// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !

//FONCTION POUR GENERER UN NOMBRE ALEATOIRE
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandomInt(1, 10));

//VARIABLES
//let min = 1;
//let max = 100;
//let min = document.getElementById('min');
//let max = document.getElementById('max');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
const entrer = document.getElementById('entrer');
const game = document.getElementById('game');
const retour = document.getElementById('retour');



//BOUTON FACILE
easy.addEventListener('click', () => {
    entrer.style.display = "none";
    game.style.display = "block";
    const minHtml = document.getElementById('min');
    const maxHtml = document.getElementById('max');
    minHtml.textContent = "1";
    maxHtml.textContent = "10";

    const min = 1;
    const max = 10;

    let randomNumber = getRandomInt(min, max);

    console.log(randomNumber);



    // Sélectionner les éléments du DOM
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    let essais = 0 ;
  
    // Ajouter un écouteur d'événement sur le bouton de soumission
    submitButton.addEventListener('click', () => {
        // Récupérer la valeur saisie (convertie en nombre)
        const userGuess = parseInt(guessInput.value);
        
        // Vérifier si la saisie est valide
        if (isNaN(userGuess)) {
            alert('Veuillez entrer un nombre valide');
            return;
        }
        
        // Réinitialiser l'opacité
        message.style.opacity = 0;
        
        // Attendre un court instant avant d'afficher le nouveau message
        setTimeout(() => {
            if (userGuess === randomNumber) {
                message.textContent = "Bravo ! Vous avez deviné le nombre en " + essais + " essais !";
            } else if (userGuess < randomNumber) {
                message.textContent = "Le nombre est plus grand";
            } else {
                message.textContent = "Le nombre est plus petit";
            }
            // Rendre le message visible avec la transition
            message.style.opacity = 1;
        }, 200);
        
        essais++;
    });
  
    //console.log("userGuess", userGuess);
  
    // Ajouter un écouteur d'événement sur le bouton restart
    restartButton.addEventListener('click', () => {
      // Générer un nouveau nombre aléatoire
      randomNumber = getRandomInt(min, max);
      console.log(randomNumber);
      // Réinitialiser le compteur d'essais
      essais = 0;
      // Effacer le message
      message.textContent = '';
      // Effacer le champ de saisie
      guessInput.value = '';
    });
});

medium.addEventListener('click', () => {
    entrer.style.display = "none";
    game.style.display = "block";
    const minHtml = document.getElementById('min');
    const maxHtml = document.getElementById('max');
    minHtml.textContent = "1";
    maxHtml.textContent = "100";

    const min = 1;
    const max = 100;

    let randomNumber = getRandomInt(min, max);

    console.log(randomNumber);


    // Sélectionner les éléments du DOM
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    let essais = 0 ;
  
    // Ajouter un écouteur d'événement sur le bouton de soumission
    submitButton.addEventListener('click', () => {
        // Récupérer la valeur saisie (convertie en nombre)
        const userGuess = parseInt(guessInput.value);
        
        // Vérifier si la saisie est valide
        if (isNaN(userGuess)) {
            alert('Veuillez entrer un nombre valide');
            return;
        }
        
        // Réinitialiser l'opacité
        message.style.opacity = 0;
        
        // Attendre un court instant avant d'afficher le nouveau message
        setTimeout(() => {
            if (userGuess === randomNumber) {
                message.textContent = "Bravo ! Vous avez deviné le nombre en " + essais + " essais !";
            } else if (userGuess < randomNumber) {
                message.textContent = "Le nombre est plus grand";
            } else {
                message.textContent = "Le nombre est plus petit";
            }
            // Rendre le message visible avec la transition
            message.style.opacity = 1;
        }, 200);
        
        essais++;
    });
  
    //console.log("userGuess", userGuess);
  
    // Ajouter un écouteur d'événement sur le bouton restart
    restartButton.addEventListener('click', () => {
      // Générer un nouveau nombre aléatoire
        randomNumber = getRandomInt(min, max);
        console.log(randomNumber);
      // Réinitialiser le compteur d'essais
      essais = 0;
      // Effacer le message
      message.textContent = '';
      // Effacer le champ de saisie
      guessInput.value = '';
    });
});

hard.addEventListener('click', () => {
    entrer.style.display = "none";
    game.style.display = "block";
    const minHtml = document.getElementById('min');
    const maxHtml = document.getElementById('max');
    minHtml.textContent = "1";
    maxHtml.textContent = "1000";

    const min = 1;
    const max = 1000;

    let randomNumber = getRandomInt(min, max);

    console.log(randomNumber);


    // Sélectionner les éléments du DOM
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');
    let essais = 0 ;
  
    // Ajouter un écouteur d'événement sur le bouton de soumission
    submitButton.addEventListener('click', () => {
        // Récupérer la valeur saisie (convertie en nombre)
        const userGuess = parseInt(guessInput.value);
        
        // Vérifier si la saisie est valide
        if (isNaN(userGuess)) {
            alert('Veuillez entrer un nombre valide');
            return;
        }
        
        // Réinitialiser l'opacité
        message.style.opacity = 0;
        
        // Attendre un court instant avant d'afficher le nouveau message
        setTimeout(() => {
            if (userGuess === randomNumber) {
                message.textContent = "Bravo ! Vous avez deviné le nombre en " + essais + " essais !";
            } else if (userGuess < randomNumber) {
                message.textContent = "Le nombre est plus grand";
            } else {
                message.textContent = "Le nombre est plus petit";
            }
            // Rendre le message visible avec la transition
            message.style.opacity = 1;
        }, 200);
        
        essais++;
    });
  
    //console.log("userGuess", userGuess);
  
    // Ajouter un écouteur d'événement sur le bouton restart
    restartButton.addEventListener('click', () => {
      // Générer un nouveau nombre aléatoire
       randomNumber = getRandomInt(min, max);
       console.log(randomNumber);
      // Réinitialiser le compteur d'essais
      essais = 0;
      // Effacer le message
      message.textContent = '';
      // Effacer le champ de saisie
      guessInput.value = '';
    });
});

//BOUTON RETOUR
retour.addEventListener('click', () => {
    entrer.style.display = "block";
    game.style.display = "none";
})


