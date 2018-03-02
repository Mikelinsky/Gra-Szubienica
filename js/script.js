//set of words
var slowa = [
    'javascript',
    'monter',
    'niesamowity',
    'lampart',
    'dzik',
    'piorun',
    'jastrzab',
    'niedzwiadek'
];
// choose random word
var slowo = slowa[Math.floor(Math.random() * slowa.length)]; 

//table with answers
var odpowiedzi = []; 
for (var i = 0; i < slowo.length; i++) { 
    odpowiedzi[i] = '_';
}

//LENGTH words to guess
var pozostaleLitery = slowo.length; 

// game code
while (pozostaleLitery > 0) {  
    // current result
    alert(odpowiedzi.join(' ')) 
    
    // downloading data from user
    var strzal = prompt('Podaj litere lub kliknij "anuluj" aby zakonczyc gre'); 
    
    if (strzal === null) {
        break;
    } else if (strzal.length !== 1) {
        alert('Prosze podaj tylko jedna litere');
    } else {                                     
        // update the answer table
        for (var j = 0; j < slowo.length; j++) {
            if (slowo[j] === strzal) {
                odpowiedzi[j] = strzal;
                pozostaleLitery--; 
            }
        }
    }        
}
alert(odpowiedzi.join(' '));
alert('Dobra robota! Szukane slowo to ' + slowo);