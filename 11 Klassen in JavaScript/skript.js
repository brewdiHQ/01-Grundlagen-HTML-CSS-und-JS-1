/**
 * In dieser Datei wird gezeigt, wie in JavaScript Objekt und Klassen erstellt werden können.
 * 
 * 
 * Hilfreiche Quellen:
 * 
 * getter:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get?retiredLocale=de
 * 
 * setter:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 * 
 * static:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
 * 
 * 
 * private Klassenelemente:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
 */


// Alter Variante, um über eine Funktion ein Objekt zu erstellen
function AltComputer (ram) {
    // Propertie des Objekt 
    this._computerName = "Toshiba"
    // Getter und Setter 
    this.computerName = () => { return this._computerName }
    this.setComputerName = (newName) => { this._computerName = newName }

    this.arbeitsspeicher = ram
    this.CPU = "Ryzen"

    logCPUName = function () { 
        console.log(this.CPU)
    } 
}

// Neue Version mittels Klassen und (echten) privante Properties
class Computer {
    
    // Hier werden statische Variablen definiert. Diese sind über den Klassennamen aufrufbar
    // Statische Variablen gehören NICHT zu Objekten. Statische Variablen können NICHT über this aufgerufen werden
    static INIT ="NO SET"
    static computerCounter = 0;

    //Ein privates Propertie (Eigenschaft) sowie getter und setter für dieses Property
    #computerName = "Toshiba"
    get computerName (){ return this.#computerName }
    set computerName(newName){ this.#computerName = newName }

    // Ein private Eigenschaft #arbeitsspeicher, die nur eine Getter-Methode hat => Zugriff von außen nur lesend
    #arbeitsspeicher = Computer.INIT
    get arbeitsspeicher(){ return this.#arbeitsspeicher }

    #CPU = "Ryzen"
    //MIT ABSICHT kein Set sondern setCPU
    setCPU(newCPU) {
        this.#CPU = newCPU
    }

    constructor (ram){
        this.#arbeitsspeicher = ram;
        this.#CPU="Intel"
        Computer.computerCounter++;
    }

    logCPUName() {
        console.log(this.#CPU)
    }
}

/**
 * Eine neue Klasse "Spielkonsole", die von der Klasse Computer abgeleitet wird
 */
class Spielkonsole extends Computer{
    #grafikkarte = "richtig gut"
    constructor () {
        super("4GB");
    }
}

/**
 * Eine Weitere Klasse Gameboy, die von Spielekonsole abgeleitet wird. Damit
 * Ist sie über Spielekonsole von "Computer" abgeleitet
 */
class Gameboy extends Spielkonsole{
    #akkukapazitaet = Computer.INIT
    get akkukapazitaet () {return this.#akkukapazitaet }
    constructor(akkukapazitaet = "5000mAh" ) {
        super();
        this.#akkukapazitaet =akkukapazitaet
        super.setCPU("AMD")
    }
}

/**
 * Der Einstiegspunkt für die Demo-App
 */
function start () {
    let xbox = new Spielkonsole();
    console.log( "Arbeitsspeicher meiner Konsole: "+ xbox.arbeitsspeicher)

    let gb = new Gameboy("10.000 mAh")
    console.log( "Arbeitsspeicher meines Gameboys: "+gb.arbeitsspeicher);
    gb.logCPUName();
    console.log("Akku des Gameboys" + gb.akkukapazitaet)

    let computer = new Computer("16 GB");
    console.log(Computer.computerCounter);

    let laptop = new Computer("32 GB");
    console.log(Computer.computerCounter);

    let PC = new AltComputer("8GB")
    console.log ("der alter Computer: " + PC.arbeitsspeicher);
    console.log ("der alter Computer: " + PC.computerName());
    PC.setComputerName("MSN")
    console.log ("der alter Computer: " + PC.computerName());

    console.log(computer.arbeitsspeicher)
    console.log(laptop.arbeitsspeicher)
    
    computer.computerName = "LG"
    console.log(computer.computerName)
    console.log(laptop.computerName)

    computer.logCPUName()

    console.log(Computer.INIT)
}

// Erst an dieser Stelle wird das Programm gestartetet, 
// nachdem alles andere zuvor deklariert und definiert wurd
start()





/**
 * Eine Klasse Farbe mit statische Variablen (=> Klassenvariablen). Diese können
 * direkt über den Klassennamen abgerufen werden
 */
class Farbe{
    static ROT = "rot";
    static WEIS = "weiß";
    static GELB = "gelb";

    static schreibAlleFarben(){
        console.log("rot, gelb, grün")
    }

    aktuellefarbe = ""
    constructor(){
        this.aktuellefarbe = Farbe.WEIS;
    }
}

// Es können beliebig viele Objekte der Klassen Farbe erstellt werden
let f = new Farbe()
console.log(f.aktuellefarbe)
f.aktuellefarbe = Farbe.GELB
console.log(f.aktuellefarbe)

let gelb = new Farbe()
gelb.aktuellefarbe = Farbe.GELB

let rot = new Farbe()
rot.aktuellefarbe = Farbe.ROT

// schreibAlleFarben ist eine statische Methode. 
// => Die Methode kann nur über den Klassennamen aufgerufen werden
// Es gibt diese Methode NUR einmal, unabhängig davon wieviele Objeke der Klasse Farbe es gibt.
Farbe.schreibAlleFarben()




class Auto {
    
    constructor () {
        this.#marke = "VW"
    }

    // Zur Veranschaulichung: Die Schlüsselworte get und set im vergleich zur 
    // Erstellung von "klassischen" Getter und Setter Methoden
    #marke;
    set automarke(name) {this.#marke = name}
    setAutomarke(name) {this.#marke = name}

    get automarke () {return this.#marke}
    getAutomarke () {return this.#marke}

    #Leistung = 120
    //hier wird eine private Variable definiert
    #fahren = "Daniel"
}
// Ein Objekt auto vom Typ Auto wird erstellt. 
// Der ZUgriff erfolgt einerseits über die JavaScript Mechanismus mittels set andererseits übe eine set-Methode
let auto = new Auto();
auto.automarke = "Toyota"
auto.setAutomarke("OPEL");

// Im ersten Fall erfolgt der lesende Zugriff über das Schlüsselwort get
// Im zweiten Fall erfolgt der lesende Aufruf über eine "get-Methode"
console.log(auto.automarke)
console.log(auto.getAutomarke())

console.log(auto.Leistung)

/**
 * ACHTUNG ACHTUNG ACHTUNG ACHTUNG 
 * Hier wird eine neue Variable "fahren" erstellt.
 * Es wird NICHT auf die private Variable "fahren" zugegriffen
 */
auto.fahren="jodi"
console.log(auto.fahren)

let keinesAuto = new Auto()
console.log(keinesAuto.fahren)

/**
 * ACHTUNG ACHTUNG ACHTUNG ACHTUNG 
 * Hier wird ein Fehler provoziert. 
 * Dem Objekt "auto" wird dynamisch eine Variable "fahren" hinzugefügt und mit dem Wert "Daniel" belegt.
 * Die If-Abfrage ist immer true
 */
if (auto.fahren = "Daniel"){
    console.log(auto)
}else {
    console.log("Der else-Zweig kann nie erreicht werden. Ein schwer zu findender Fahler, da in JavaScript hier kein Fehler generiert wird")
}

