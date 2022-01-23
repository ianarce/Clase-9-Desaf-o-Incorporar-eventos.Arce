//DECLARACION DE UNA CLASE
class Moneda{
    constructor(Denominacion,ValorDolares){
        this.Denominacion=Denominacion
        this.ValorDolares=ValorDolares
    }
}

//FUNCION PARA CONVERTIR EL VALOR INGRESADO A DOLARES
function Convertir(ValorIngresado,ValorRetorno){
    return ValorIngresado*ValorRetorno
}

let monedasALL = []
//MONEDAS DISPONIBLES
const moneda1= new Moneda("Pesos Mexicanos",20)
const moneda2= new Moneda("Pesos Argentinos",103)
const moneda3= new Moneda("Yenes",115)
const moneda4= new Moneda("Pesos Uruguayos",44)


monedasALL.push(moneda1)
monedasALL.push(moneda2)
monedasALL.push(moneda3)
monedasALL.push(moneda4)

const monedaMEX=moneda1
const monedaARG=moneda2
const monedaYEN=moneda3
const monedaURU=moneda4

//VALIDAR EL VALOR A CONVERTIR 
function optenerValor() {
    opcion1 = document.getElementById("opciones1").value
    opcion2 = document.getElementById("opciones2").value
    valor = document.getElementById("valorIn").value
    
    if ((opcion1==0) && (opcion2==1)){
        valorRe = Convertir(valor,103/20)
        resultado = document.getElementById("resultado")
        resultado.innerHTML = `El resultado es ${valorRe} ${moneda2.Denominacion}`
    }

    if ((opcion1==1) && (opcion2==0)){
        valorRe = Convertir(valor,20/103).toFixed(2)
        resultado = document.getElementById("resultado")
        resultado.innerHTML = `El resultado es ${valorRe} ${moneda1.Denominacion}`
    }

    if(opcion1==opcion2){
        resultado = document.getElementById("resultado")
        resultado.innerHTML = `ERROR POR FAVOR INGRESE DOS MONEDAS DISTINTAS `
    }
}





//AGREGAR UN EVENTO AL BOTON
document.getElementById("enviar").addEventListener("click",optenerValor)


