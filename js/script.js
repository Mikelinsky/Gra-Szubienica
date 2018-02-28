//zbiór słów
var slowa = [
    'javascript',
    'monter',
    'niesamowity',
    'lampart',
    'dzik',
    'piorun',
    'jastrząb',
    'niedzwiadek'
];
//wybór losowego słowa
var slowo = slowa[Math.floor(Math.random() * slowa.length)]; 

//tablica z odpowiedziami
var odpowiedzi = []; 
for (var i = 0; i < slowo.length; i++) { 
    odpowiedzi[i] = '_';
}

//przechowuje DŁUGOŚC słowa do zgadniecia
var pozostaleLitery = slowo.length; 

// kod gry
while (pozostaleLitery > 0) {  
    //bieżacy winik
    alert(odpowiedzi.join(' ')) 
    
    //pobieranie danych od uzytkownika
    var strzal = prompt('Podaj literę lub kliknij "anuluj" aby zakończyć grę'); 
    
    if (strzal === null) {
        break;
    } else if (strzal.length !== 1) {
        alert('Proszę podaj tylko jedną literę');
    } else {                                     
        //jesli strzal byl trafny zaktualizuj tablice odpowiedzi
        for (var j = 0; j < slowo.length; i++) {
            if (slowo[j] === strzal) {
                odpowiedzi[j] = strzal;
                pozostaleLitery--; 
            }
        }
    }        
}
alert(odpowiedzi.join(' '));
alert('Dobra robota! Szukane słowo to ' + slowo);