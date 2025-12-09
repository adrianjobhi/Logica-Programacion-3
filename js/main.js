const txtNum1 = document.getElementById("num1");
const alertResultado = document.getElementById("resultado");
const btnEnviar = document.getElementById("btnEnviar");

function validarNumero(valor) {
  if (valor.trim().length === 0){
    return false;
  }//if (valor.length === 0)

  if (isNaN(valor)){
    return false;
  } // if (isNaN(valor)

  return true;
}// function validarNumero

function factorial(n){
  let resultado = 1;

  for(let i = 1; i <= n; i++){
    resultado *=i;
  }
  return resultado;
}//function factorial

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  txtNum1.style.border = "";
  alertResultado.style.display="none";
  alertResultado.innerHTML = "";
  let esValido = true;

  if (!validarNumero(txtNum1.value)) {
    txtNum1.style.border = "solid medium red";
    alertResultado.className = "alert alert-danger";
    alertResultado.style.display="block";
    alertResultado.innerHTML ="Por favor, ingresa solo números.";
    return;
  }// if (!validarNumero(txtNum1.value))

  const num = Number(txtNum1.value);

  if(num < 0){
    txtNum1.style.border = "solid medium red";
    alertResultado.className = "alert alert-danger";
    alertResultado.style.display="block";
    alertResultado.innerHTML ="Por favor, ingresa un número mayor o igual que 0";
    return;
  }

  const resultadoFactorial = factorial(num);

  alertResultado.className = "alert alert-primary";
  alertResultado.style.display="block";
  alertResultado.innerHTML =
  ` <p class="mb-0"><strong>El factorial de ${num} es: </strong>${resultadoFactorial}</p>`;
});