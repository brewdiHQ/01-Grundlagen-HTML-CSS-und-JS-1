/**
 * Objekt21 stellt ein physischees / museales Objekt dar, das in Ausstellungen 
 * oder Sammlungen gezeigt werden kann.
 */
class Objekt21 {

    #objektID = "OXXXX";
    #name
    #untertitel 
    #kurzbeschreibung
    #langbeschreibung 
    Bild
    #bereitstellendeInstitution
    #urheber
    #eigentuemer
    
    //Objekte koennen z.B Statuen, Bilder, 3D-Objekte uvm sein.
    #artDesObjekts 
    #audiodeskription

    //Getter
    get objektID () {return this.#objektID}    
    get name () {return this.#name}
    get untertitel () {return this.#untertitel}
    get kurzbeschreibung () {return this.#kurzbeschreibung}
    get langbeschreibung () {return this.#langbeschreibung}
    get bereitstellendeInstitution () {return this.#bereitstellendeInstitution}
    get urheber () {return this.#urheber}
    get eigentuemer () {return this.#eigentuemer}
    get artDesObjekts () {return this.#artDesObjekts}
    get audiodeskription () {return this.#audiodeskription}

    // Hier Setter ergaenzen

    constructor() {
        this.#name = "name des Objekts"
    }
}

function machwas(){
    console.log("machtwas")
}


export {Objekt21, machwas};