let edad="18";

function ingreso(){

    let ingresar=false;
    let edadUsuario=prompt("Ingresa tu edad en números. Debés ser mayor de edad para utilizar nuestros servicios")
    if (edadUsuario>=edad){
        alert ("podés calcular tu préstamo.")
        ingresar=true
        
    }else{
        alert("Error. Debés ser mayor de edad.")
    }
    return ingresar;


}
//Accedemos a simular el prestamo
let exito=ingreso(true);

if(exito){
     
    let monto=prompt("Escribe el monto solicitado")
    let cuotas=prompt("Escribe la cantidad de cuotas mensuales")
    let interes=cuotas * 1.60    
    let resultado=(monto / cuotas) + interes
    let final=alert("Pagarías una suma mensual de $" + resultado)
    


}



console.log(ingreso);