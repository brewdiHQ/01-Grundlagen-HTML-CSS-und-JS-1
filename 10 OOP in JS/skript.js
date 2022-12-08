/**
 * Objektorientierung umfasst 4 Konzepte:
 * 1. Abstraktion
 * 2. Datenkapselung
 * 3. Vererbung
 * 4. Polymorphie
 */


/**
 * Objektorientierung (OOP) in JavaScript:
 * 1. Prototypische OOP
 * 2. Pseudoklassische OOP
 * 3. OOP in Klassensyntax
 */


/**
 * 0. Objekt-Literale
 */
//JSON => JavScript Object Notation
let meinSmartphone = {
    betriebssystem: "android",
    betriebssystem_version: 12,
    display_diagonale: 6.7,
    farbe: "schwarz",

    forEach: function (element){
        console.log(meinSmartphone)
    },

    updateOS: function (){
        this.betriebssystem_version++;
    }
}
// Meine eigene Implementierung einer "ForEach-Methode"
// meinSmartphone.forEach();

/* console.log(meinSmartphone.betriebssystem);
console.log(meinSmartphone.betriebssystem_version);
console.log(meinSmartphone.display_diagonale);
console.log(meinSmartphone.farbe); */

function updateSmartphoneOS(phone){
    if(phone=== undefined) debugger;
    phone.betriebssystem_version++;
}

wert_x = 7
function aendere_Wert (wert) {
    wert++;
    return wert
}

// Basisdatentypen werden per Value übergeben => der Wert wird kopiert
// console.log(wert_x)
// aendere_Wert(wert_x)
// console.log(wert_x)

// Komplexe Datentypen werdcen per Reference übergeben => Ein Zugriff auf das 
// Objekt wird übergeben
// console.log(meinSmartphone.betriebssystem_version);
// updateSmartphoneOS(meinSmartphone);
// updateSmartphoneOS(meinSmartphone);
// updateSmartphoneOS(meinSmartphone);
// meinSmartphone.updateOS()

// console.log(meinSmartphone.betriebssystem_version);




/***********************************************
 * 1. Prototypische OOP
 */

const Stadt = {
    name: "Berlin",
    _einwohner: "3.6 Mio",
    bezirke_anzahl: "12",
    ekligste_ubahn_station: "U-Bhf Schönleinstraße (U8)",

    getEinwohner(){
        console.log ("Einwohner ausgegeben");
        return this._einwohner;
    }
}

// console.log(Stadt);
// console.log(Stadt.bezirke_anzahl);
// console.log(Stadt.getEinwohner());
// console.log(Stadt.ekligste_ubahn_station);



// //Prototyp Objekt im klassischen (ES5) JavaScript Stil
const Auto = {
    max_Geschwindigkeit:'180',
    hersteller: 'NOT_SET',
    farbe: 'NOT_SET',

    fahren: function () {console.log("... fahre ...")},
    planeRoute: function (meinZielort) {console.log("Vielen Dank, Route nach " + meinZielort + " wird erstellt.")},
    blinken: function(richtung){
        if (richtung=="links"){console.log("blinke links")}
        else if (richtung == "rechts") { console.log("blinke rechts")}
        else if (richtung == "beide"){console.log("ACHTUNG: WARNBLINKER")}
        else {console.log("Oh Oh, das sollte nicht passiern");}
    },

    stehenBleiben: () => {console.log("bremse ab und bleibe stehen");}
}

// const audi_a3 = Object.create(Auto);
// audi_a3.fahren();
// audi_a3.blinken("rechts");
// audi_a3.stehenBleiben();
// audi_a3.planeRoute("Hamburg");

// const dacia_sandero = Object.create(Auto);
// dacia_sandero.planeRoute = function(meinZielort){
//      console.log("sorry, kein Navi an board")
//  }

// dacia_sandero.fahren();
// dacia_sandero.blinken("links");
// dacia_sandero.stehenBleiben();
// dacia_sandero.planeRoute("Hamburg");


/***********************************************
 *  * 2. Pseudoklassische OOP
 */

function Kochrezept (Zutaten, Dauer, Schwierigkeit){
    this.zutaten = Zutaten;
    this.dauer = Dauer;
    this.schwierigkeit = Schwierigkeit

    this.druckeKochrezept = function () {
        this.zutaten.forEach((element, index) => {console.log(index + ": " + element)
        });
    }
}

let meineZutaten = ["Nudel", "Ei", "Schinken", "Parmesan"]
let spaghetti_carbonara = new Kochrezept(meineZutaten, "15 Minuten", "leicht");
// console.log(spaghetti_carbonara);
// spaghetti_carbonara.druckeKochrezept();


/***********************************************
 * 3. Mit Klassensyntax (ab ES6)
 */

const INIT_VALUE ="NOT SET"; 
class Haushaltsgeraet{
    typ = INIT_VALUE;
    hersteller = INIT_VALUE;
    el_Leistung = INIT_VALUE;

    constructor(typ_des_Geraets, nameHersteller, elektrische_Leistung) {
        this.typ = typ_des_Geraets;
        this.hersteller = nameHersteller;
        this.el_Leistung = elektrische_Leistung;
    }

    leistung_anzeigen(){
        console.log(this.el_Leistung);
    }
}

let akku_schrauber = new Haushaltsgeraet("Akku Schrauber", "Bosch", "2000W");
akku_schrauber.leistung_anzeigen();
console.log( akku_schrauber.hersteller);