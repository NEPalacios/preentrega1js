// Definir los precios de los productos PRUEBA
// function sumarPrecios(producto1, producto2) {
//     console.log(producto1 + producto2)
// }




// sumarPrecios(1, 2);
// sumarPrecios(10, 2);
// sumarPrecios(10, 20);
// sumarPrecios(10, 220);

// Definir los precios de los productos 
function sumarPrecios() {
    let producto1 = document.getElementById("producto1").value;
    let producto2 = document.getElementById("producto2").value;
    let producto3 = document.getElementById("producto3").value;

    // cambiar de string a numero:
    let numero1 = parseFloat(producto1);
    let numero2 = parseFloat(producto2);
    let numero3 = parseFloat(producto3);

    //condicional:
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese solo numeros";
    } else {
        
        // sumar todo
        let suma = numero1 + numero2 + numero3;

        //imprimir
        document.getElementById("resultado").textContent = "La suma es: " + suma;

    }
}


