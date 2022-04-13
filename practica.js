
function verificar() {
  const stock = 100;
  const cantidad = parseInt(document.getElementById("txtCantidad").value);

  switch (cantidad !== "" || isNaN(cantidad) === false) {

    case cantidad > stock:
      console.log("La cantidad es mayor al stock");
      break;
    case cantidad < stock:
      console.log("La cantidad es menor al stock");
      break;
    case cantidad === stock:
      console.log("La cantidad es igual al stock");
      break;
    default:
      console.log("El valor ingresado no es un numero");
      break;
  }
}



// document.getElementById("app").innerHTML = `
// <h1>Ejemplo de condicionales</h1>
// `;

/*let textoDelMain = "";
const divMain = document.getElementById("divMain");
divMain.innerHTML = textoDelMain;

const cantidad = 106;
const stock = 100;

const resultado = parseInt(cantidad) - parseInt(stock);
console.log("Resultado", resultado);

//Verificar con el switch lo mismo que en el IF
switch (resultado) {
    case 0:
        console.log("La cantidad es igual al stock");
        break;
    case 5:
        console.log("La cantidad menos el stock es 5");
        break;
    default:
        console.log("Otro");
        break;
}*/

/*if(resultado != NaN){
  if(resultado>0){
    console.log('La cantidad supera el stock')
  }
  else if(resultado === 0){
    console.log('La cantidad igual')
  }
  else{
    console.log('La cantidad es menor')
  }
}
else{
  console.log('otro')
}
*/

/*if(parseInt(cantidad) > parseInt(stock)){
  console.log('La cantidad supera el stock')
}
else if(parseInt(cantidad) === parseInt(stock)){
  console.log('La cantidad igual')
}
else if(parseInt(cantidad) < parseInt(stock)){
  console.log('La cantidad es menor')
}
else{
  console.log('otro')
}
*/


/*function verificar() {
  const stock = 100;
  const cantidad = document.getElementById("txtCantidad").value;

  if (cantidad !== "" && isNaN(cantidad) === false) {
    if (parseInt(cantidad) > stock)

      console.log("La cantidad es mayor al stock");

    else if (parseInt(cantidad) < stock)

      console.log("La cantidad es menor al stock");

    else console.log("La cantidad es igual al stock");

  } else {

    console.log("El valor ingresado no es un numero");

  }
}*/

