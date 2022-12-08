function addiere(){
    let wert1 = parseInt(document.getElementById("wert_1").value);
    let wert2 = parseInt(document.getElementById("wert_2").value);
    
    const summe = document.getElementById("Ergebnis");
    summe.value = wert1+wert2;
}