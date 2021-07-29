
let impresion= [];
function formulario1 ()
{
    
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let email = document.getElementById("email").value;
    let ciudades = document.getElementById("ciudades").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let jsonEnviar = {
        nombre:"nombre",
        numero:"numero",
        email:"email",
        ciudades:"ciudades",
        mensaje:"mensaje"
        }
    impresion.push(jsonEnviar)
    console.log(jsonEnviar);
}

let impresion2=[];                  
function formulario2(){
    let impresion2 = document.getElementById("ciudades").value;
    console.log(ciudades);
    impresion2=impresion.filter((e)=> e.ciudades== impresion2)
    alert(JSON.stringify(impresion)) 
}
   
