var vornamename = "manuel";
let nachname = "fischer";
const DENIZ ="deniz";

let deniz ="deniz";
showAndTypeOfOhneParam();

deniz=35
showAndTypeOfOhneParam();

deniz=true;
showAndTypeOfOhneParam();


function showAndTypeOfOhneParam(){
    console.log(deniz);
    console.log (typeof(deniz))
}



function getpartData(){
   // window.open(
   ///let site = window.open("menu.html");
   menuDOM = new DOMParser()
   let menu = menuDOM.parseFromString("menu.html", "text/html");
   menu.f
   let par = menu.getElementById("menu-id")
   let x =1;
   //site.document.getElementsByClassName("meni");
}
getpartData();


function showAndTypeOf(param){
    let neuervar= 0
    console.log(param);
    console.log (typeof(param))
}

/**
if (vornamename == "manuel") {    
    console.log (nachname);
} else {
    console.log ("Hallo " + deniz);
}
*/

//console.log ("das sollte nicht gehen: " + nachname);
/**
 * Ausgabe auf die Konsole
 */
//console.log (vornamename + nachname);




/*
function show_alert(){
    //1. alert ("hallo");
    prompt ("hallo", "Sag deinen Namen");
    
    //confirm ("hallo confirm");
    
    console.log("2. Box beendet");
}
console.log("1. Gleich kommt der alert");
show_alert();
console.log("3. JS Dateiende");
console.error("oh je, das war nicht :-( ");
console.warn("achtung warnug");
*/