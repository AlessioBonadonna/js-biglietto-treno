//consegna 
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Il biglietto andrà stampato in pagina!


// il mio M.O. 
// chiedere al utente il numero di km che vuole percorrere
// chiedere al utente l eta che ha 
// il prezzo del biglietto = km* 0.21
// se eta <18 ha uno sconto del 20%
// se eta>65 sconto del 40%
// stampare a schermo il risultato con max 2 cifre decimali 


// chiedo al utente km e età 
let km = prompt ("Inserie il numero  km che vuoi percorrere");
let eta = prompt("Inserire la tua età");
//calcolo il prezzo del biglietto 
let prezzoBiglietto= km * 0.21;
console.log(prezzoBiglietto);
//variabile che conterà la conta 
let scontoBiglietto;
//ciclo if per controllare se i dati inseriti sono effettivamente numeri 

if(isNaN(km) || isNaN(eta)){
    alert('Puoi inserire solo numeri..');
    window.location.reload();}

//ciclo if per calcolare il prezzo del biglietto 

    if(eta < 18){
        scontoBiglietto= prezzoBiglietto * 0.80;
        console.log(scontoBiglietto);
        // document.getElementById("prova").innerHTML =scontoBiglietto ;

    }   else if (eta > 65){
        scontoBiglietto=prezzoBiglietto * 0.60;
        // document.getElementById("prova").innerHTML =scontoBiglietto ;
    }   else{
        scontoBiglietto=prezzoBiglietto;
    }
    //metto il prezzo del biglietto scontato o non con due cifre decimali 
    scontoBiglietto= scontoBiglietto.toFixed(2);
    //stampo nel html il prezzo del biglietto

    document.getElementById("prezzo").innerHTML = scontoBiglietto + ' &euro;' ;
    //"Bonus"
    document.getElementById("kilometri").innerHTML = km ;   