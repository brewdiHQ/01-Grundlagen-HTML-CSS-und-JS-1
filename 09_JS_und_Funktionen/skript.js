// 1 Eine regul├ñre Funktion
function regulaereFunktion (x, y){
    if(x===undefined || y===undefined)  debugger;   
    return x+y;
}
console.log("1. Regul├ñrer Aufruf: " + regulaereFunktion(18,7));

// // 2. Jeder "regul├ñrer" Funktionsaufruf0 kann einer Variablen 
// // zugewiesen werden.
let regulaereSumme = regulaereFunktion;
console.log("2. Als Referenz auf eine Funktion: " + regulaereSumme(18,5));

// // 3. Es k├Ânnen annonyme Funktionen erstellt und zugewiesen werden
let summe = function(x, y){ return x+y;}
console.log("3. Als Annonyme Funktion: " + summe(18,7));

// 4. Funktionen k├Ânnen in der "vereinfachten" Arrow schreibweise dargestellt werden
let arrowsumme = (x, y=7) => { return x+y;}
console.log("4. Funktion mittels Arrow Schreibweise: " + arrowsumme(18));

/**
 * Vertiefende Infos:
 * Mozilla (englisch)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?retiredLocale=de#function_parameters
 * 
 * SelfHtml (deutsch)
 * https://wiki.selfhtml.org/wiki/JavaScrip