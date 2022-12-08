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
    
    static INIT ="NO SET"
    static computerCounter = 0;

    //Ein privates Propertie (Eigenschaft) sowie getter und setter für dieses Property
    #computerName = "Toshiba"
    get computerName (){ return this.#computerName }
    set computerName(newName){ this.#computerName = newName }

    #arbeitsspeicher = Computer.INIT
    get arbeitsspeicher(){ return this.#arbeitsspeicher }

    #CPU = "Ryzen"
    set CPU(newCPU) {
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
 * Eine Klasse Farbe mit statische Variablen (=> Klassenvariablen). Diese können
 * direkt über den Klassennamen abgerufen werden
 */
class Farbe{
    static ROT = "rot";
    static GELB = "gelb";
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
    console.log (Farbe.GELB)

}


// Erst an dieser Stelle wird das Programm gestartetet, 
// nachdem alles andere zuvor deklariert und definiert wurd
start()