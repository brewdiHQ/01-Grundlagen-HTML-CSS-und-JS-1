/**
Error:          Error-Objekte werden ausgelöst, wenn Laufzeitfehler auftreten. 
                Error kann als "Basisobjekt" / "Basisklasse" für benutzerdefinierte 
                Ausnahmen verwendet werden.

EvalError:      EvalError-Objekte zeigen einen Fehler der globalen Funktion eval() an. 
                Diese Ausnahme wird nicht mehr von JavaScript ausgelöst, das 
                EvalError-Objekt bleibt jedoch aus Kompatibilitätsgründen bestehen.

RangeError:     Wird ausgelöst, wenn eine numerische Variable oder ein Parameter 
                außerhalb ihres gültigen Bereichs liegt.

ReferenceError: Wird ausgelöst, wenn beim Dereferenzieren eine ungültigen Referenz 
                auftritt.

SyntaxError:    Wird ausgelöst, wenn ein Syntaxfehler festgestellt wurde.

TypeError:      Wird ausgelöst, wenn eine Variable oder ein Parameter keinen 
                gültigen Typ hat.

URIError:       Wird ausgelöst, wenn encodeURI() oder decodeURI() ungültige 
                Parameter übergeben werden.

AggregateError: Erstellt eine Instanz, die mehrere Fehler in einem einzigen Fehler-Objekt
                repräsentiert, wenn mehrere Fehler von einer Operation gemeldet werden 
                müssen, z. B. von Promise.any(). 

InternalError   [Nicht standardmäßig]: Ein Fehler, der auftritt, wenn ein interner 
                Fehler in der JavaScript-Engine ausgelöst wird. Z.B. "zu viel Rekursion".

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

*/

// Try-Catch-Block
try{
    /** Hier ist der try-Block.
     * Code, den ich ausprobieren möchte UND der evtl. zu einem Fehler bzw. 
     * einer Ausnahme führen könnten platziere ich hier
     */

   //console.log("probier mal");
}catch (ausnahme) {
    /**
     * Hier möchte ich eigentlich nicht sein, denn dann ist eine Ausnahme bzw.
     * ein Fehler eingetretten. ABER: Hier habe ich die möglichkeit auf den Fehler
     * zu reagieren und ihn ggf. zu korrigieren
     */

} finally {
    /**
     * Dieser Abschnitt wird immer erreicht.
     * Nach der Ausnahmebehandlung kann ich in diesem Abschnitt weiter machen.
     */
}



class UeberlaufError extends Error{
    constructor(errMsg){
        super(errMsg)
        this.name = "UeberlaufError";
    }
}



try {
    //machwas();
    //let freunde = ["Tim", "Ingo", "Hannes"];
    //console.log(freunde[-1]); 
    //let o = new KlasseDieEsNichtGibt();
    //throw new SyntaxError("Hallo das ist ein Syntaxfehler", "someFile.js", 10);
    //throw new TypeError("type fehler")
    let i = 10
    let fehlerzähler =0;
    let text
    while (i == 10) {
        text = "The number is " + i +"\n";
        console.log(text)
        
        fehlerzähler++

        if(fehlerzähler> 50){
            throw new UeberlaufError("das hätte nie passieren sollen")
        }
    }

// Anhand eines Buchstabens wird der ASCII-Wert bestimmt
const dasZeichen ="A"
const result = dasZeichen.charCodeAt(0);
console.log(`Der ASCII-Wert für ${dasZeichen} lautet: ${result}`);

//Anahnd des ASCII-Dezimalcodes wird das Zeichen ausgegben
console.log(String.fromCharCode(44))

    
    //machwas();
    console.log("Das wird nie erreicht")
} catch (ausnahme) {
    if (ausnahme instanceof ReferenceError){     
        console.log("ich muss was mit dem Referenz Error machen")
    }
    else if(ausnahme instanceof SyntaxError){
        console.log("ich muss was mit dem Syntax Error machen")
    }
    else if(ausnahme instanceof TypeError){
        console.log("ich muss was mit dem TypeError machen")
    }
    else{

    }
    
    console.error(
        "[FEHLERTYP]:\t" + ausnahme.name + 
        "\n[NACHRICHT]:\t" + ausnahme.message +  
        "\n[URSACHE]:\t" + ausnahme.cause +
        "\n[STACK]:\t" + ausnahme.stack)
    
}
finally{
    console.log("Dieser Abschnitt wird immer erreicht")
}




















class meinFehler extends Error{
    constructor(message) {
        super(message);
        this.name = 'MyError';
      }
}

