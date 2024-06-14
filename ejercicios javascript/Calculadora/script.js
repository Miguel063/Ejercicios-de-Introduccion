function addToDisplay(value) {
    document.getElementById ("Display").value += value
}
function calculate(){
    var expression = document.getElementById("Display").value
    //la funcion eval toma la cadena de expresion y la ejecuta como si fuera js
    var result = eval(expression) 
    document.getElementById("Display").value = result;
}
function clearDisplay() {
    document.getElementById ("Display").value = " "
}