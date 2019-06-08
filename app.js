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



// averiguar cual es el numero mayor de un array
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = 0;

for ( let i = 0;  i<=numeros.length ; i++ ){
if(numeros[i]>=mayor){
    mayor = numeros[i];
    console.log(numeros[i]>=mayor)
    
}

};
console.log(mayor);


// total*%/100
//Sacar porcentaje
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    let inputTextType3 = document.getElementById("valorPorncentaje").value;
    let inputTextType4 = document.getElementById("valorTotal").value;
    let regex_numeros = /^[0-9]+$/;
    if (regex_numeros.exec(inputTextType3) && (regex_numeros.exec(inputTextType4))) {
        // calcular formula
        let formulaPorcentaje = inputTextType4 *inputTextType3/ 100;
        let show = document.getElementById("resultPorcentaje").innerHTML = "<h3>" + Math.round(formulaPorcentaje) + "</h3>";

    } else {
        // agregar un return con html
        let newElement = document.getElementById("resultPorcentaje").innerHTML = '<p style="display:block;">'+'Introducir un numero entero!'+'</p>';
    }
}
); 