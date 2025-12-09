# Factorial en JavaScript

Este proyecto calcula el **factorial de un número ingresado por el usuario** utilizando JavaScript.
Incluye validaciones para asegurar que la entrada sea correcta y muestra el resultado tanto en **consola** como en el **DOM**.

---
## 🌐 Demo en GitHub Pages
Puedes ver el proyecto funcionando aquí:
👉 https://adrianjobhi.github.io/Logica-Programacion-3/

---
## 🚀 Objetivo
Crear un programa que:

- Solicite un número al usuario mediante un input en pantalla.
- Valide que la entrada sea un número válido.
- Calcule el **factorial** del número.
- Muestre el resultado de forma clara en la página.
- Muestre mensajes de error cuando sea necesario.

---

## 🧠 ¿Qué es el factorial?

El factorial de un número **n** se define como:

```
n! = 1 × 2 × 3 × ... × n
```

Ejemplos:

- 5! = 120
- 6! = 720
- 0! = 1

---

## 🧪 Capturas del funcionamiento
### ✔ Resultado para 5
### ✔ Resultado para 6
### ❌ Error al ingresar un negativo

---

## 🧾 Código principal del ejercicio (main.js)

```javascript
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
```

---

## 📁 Estructura del proyecto

```
LOGICA-PROGRAMACION-3/
│── assets/
│   └── logica.png
│
│── Capturas/
│   ├── Factorial_de_-5_error.png
│   ├── Factorial_de_5.png
│   └── Factorial_de_6.png
│
│── js/
│   └── main.js
│
│── index.html
└── README.md
```

---

## 🛠 Tecnologías utilizadas
- HTML5
- JavaScript
- Bootstrap

---

## ▶️ Cómo ejecutarlo

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/logica-programacion-3.git
   ```
2. Abre el archivo **index.html** en tu navegador.
3. Ingresa un número en el input.
4. Observa el resultado del factorial en la página.

---

## 👤 Autor
Proyecto realizado por **Adrian Job Hernández Ibarra** como práctica de lógica de programación en JavaScript.
