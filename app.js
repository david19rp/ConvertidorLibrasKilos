// libras a kilos
let btn = document.getElementById("btn1");
btn.addEventListener("click", function () {
    let inputTextType = document.getElementById("valorPrimero").value;
    let regex_numeros = /^[0-9]+$/;
    if (regex_numeros.exec(inputTextType)) {
        // calcular formula
        let formulaLibrasKilogramos = inputTextType / 2.2046;
        let show = document.getElementById("resultLibrasGramos").innerHTML = "<h3>" + Math.round(formulaLibrasKilogramos) + "kg " + "</h3>";

    } else {
        // agregar un return con html
        let newElement = document.getElementById("resultLibrasGramos").innerHTML = '<p style="display:block;">'+'Introducir un numero entero!'+'</p>';
        
         
    

    }



    

}
);  

// kilometros a millas


let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    let inputTextType = document.getElementById("valorPrimero2").value;
    let regex_numeros = /^[0-9]+$/;
    if (regex_numeros.exec(inputTextType)) {
        // calcular formula
        let formulakilometrosMillas = inputTextType * 0.62;
        let show = document.getElementById("resultKilometrosMillas").innerHTML = "<h3>" + Math.round(formulakilometrosMillas) + "Millas " + "</h3>";

    } else {
        // agregar un return con html
        let newElement = document.getElementById("resultKilometrosMillas").innerHTML = '<p style="display:block;">'+'Introducir un numero entero!'+'</p>';
        
         
    

    }



    

}
);  

