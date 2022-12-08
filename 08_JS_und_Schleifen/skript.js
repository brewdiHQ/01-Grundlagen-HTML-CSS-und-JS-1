// Konstanten
const INIT_WERT = -100;
const DEFAULT_WERT = "KEIN NAME GESETZT";

// Variablendefinition -und -initialisierung
let vornname = DEFAULT_WERT;

/**
 * 1. Auswertung der Variablen mittels IF-Anweisung
 */
vornname = "tom"
if( vornname == "tom"){
    console.log ("Hallo " + vornname);
}
else if (vornname =="andre"){
    console.log ("der zweite IF-Zweig");
}
else if (vornname =="inga"){
    console.log ("der drite IF-Zweig");
}
else if (vornname =="inga"){
    // ACHTUNG: Dieser Zweig ist fehlerhaft. Er wird nie erreicht, weil die 
    // Bedingung identisch zu dem Zweig davor ist
    console.log ("der vierte IF-Zweig");
}
else if (vornname =="paule"){
    console.log ("der fünfte IF-Zweig");
}
else {
    // Dieser Zweig wird NIE erreicht
    console.error("HIER WOLLTE ICH NIE SEIN !!!");   
}

// 2. Unterscheidung mittels SWITCH CASE
vornname = "andre"
switch (vornname){
    case "tom":
        console.log ("Hallo " + vornname + " ... mit SWITCH-CASE");
        break;
    case "andre":
        console.log ("Switch Case mit Andre: " + vornname);
        break;
    
    default:
        // Dieser Zweig wird NIE erreicht
        console.error("IM DEFAULT Zweig WOLLTE ICH NIE SEIN !!!");   
}

//console.log ("nach SWITCH-CASE Anweisung");








/**
 * For Schleife
 */

/* for(let i=0; i < 10; i++){
    console.log("Das ist Durchlauf: " + i)
} */


let freunde = ["Jan", "Joni", "Nils", "Jacob", "Alex"]

/* for (let i = 0; i < freunde.length; i++){
    console.log(freunde[i]);
} */

// for (let freund in freunde){
//     console.log("For ...in Schleife: " + freund);
// }

// for (let freund of freunde){
//     console.log("For ...of Schleife: " + freund);
// }



/**
 * FOR Each in JavaScript
 */

// 1. Arrow Function
// freunde.forEach(e => {console.log("Arrow Function" + e)});


// // 2. Callback Function
// freunde.forEach(konsolenAufruf)
// function konsolenAufruf(item, index){
//     console.log(index + ": " + item)
// }

// 3. Inline Funktion
//freunde.forEach(function(e, i){console.log("inline [" + i + "]: "+ e)});


/**
 * BEISPIEL: For-Each Schleife eines Arrays
 */

let lieblingsessen = new Map();
 
 lieblingsessen.set("Jan","Pizza");
 lieblingsessen.set("Nils","Pommes");
 lieblingsessen.set("Jacob","Nudeln");
 lieblingsessen.set("Joni","Eis");
 lieblingsessen.set("Alex","Schokolade");
 
 freunde.forEach(schreibeLieblingsEssen);
 function schreibeLieblingsEssen(e, i){
     console.log(e +" mag am liebsten " + lieblingsessen.get(e));
 }
 
 for(let freund of lieblingsessen.keys() ){
    console.log("Mit Map" + freund + " mag am liebsten " + lieblingsessen.get(freund));
 }