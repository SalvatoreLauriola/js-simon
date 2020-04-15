// Preparo il documento

// Descrizione:
// Un alert espone 5 numeri casuali (univoci). 
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



//  Ref

var numeriRandom = [];
var numeriUtente = [];



// Generiamo 5  numeri random tra 1 e 10

for(var i = 0; numeriRandom.length < 5; i++){
  var randomNum = random(1, 10);
  if(!numeriRandom.includes(randomNum)) {
    numeriRandom.push(randomNum); 
  
  }
}

console.log(numeriRandom);
alert(numeriRandom);
setTimeout(function(){

for(var i = 0; numeriUtente.length < 5; i++) {
  var request = prompt('Inserisci numero');
  
  if(!numeriUtente.includes(request)){
    numeriUtente.push(request);
    
  }else {
    alert('Hai gia inserito questo numero');
  }
}

var numGiusti = [];

for(var i = 0; i < numeriRandom.length; i++ ){
  var numFind = numeriUtente[i];
 if (numeriRandom.includes(numFind)){
  
  numGiusti.push(numFind);
  }
}

console.log(numGiusti);

},  3000);

function random(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
  return randomNum;
}
