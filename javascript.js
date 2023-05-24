function clicar(num){
const  resultado = document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = resultado + num

}
function apagar_tudo(){
    document.getElementById('resultado').innerHTML = ""
}
function apagar(){
    const resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}
function resultado(){
    var resultadotela = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultadotela)
    }
}
