class logger21{
    static log(msg) {
        let now = new Date();
        //Uhrzeit lokal zwischenspeicher, damit der String später übersichtlich bleibt
        let hours = now.getHours();
        let min = now.getMinutes();

        // Nicht schoen aber selten: JavaScript formatiert die fuehrende Null bei 
        // Zahlen kleiner 10 weg. Daher ergänze ich sie hier wieder :-)
        let sec = now.getSeconds();
        if (sec<10){ sec = "0"+sec}
        else{ 
            //Dieser Abschnitt wird nicht berücksichtigt.
        }

        console.log(`[${hours}:${min}:${sec}] \t ${msg}`)
    }
}

export {logger21}