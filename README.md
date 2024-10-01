<h1>INTRODUCIÓN</h1>

En este ejercicio forzare al usuario a logearse dentro de mi pagina, utilizando para ello la función prompt, que permitira al usuario introducir un nombre y contraseña que, de ser correcto, le permitira el acceso dentro de la pagina. En el apartado de JavaScript veremos el funcionamiento de estas reglas.

Username: miguel

password: elmasalto

<h1>HTML</h1>

<h2>Pagina principal (index)</h2>

·HEADER: Indica el nombre de la asignatura, ademas del nombre del ejercicio que se esta realizando.

·NAVIGATION BAR: Se muestran diferentes enlaces a paginas de ayuda con HTML, CSS, JS, etc... Ademas tambien incluye el enlace a mi GitHub, en el cual esta el repositorio con el ejercicio actual que este realizando. El nombre del repositorio es: DWEC_Project

·LOGIN:Es lo primero que se muestra al entrar en la pagina, con dos campos para indicar el nombre de usuario y la contraseña, con un boton que manda la respuesta al JS.

·MAIN CONTENT: Incluye cards con enlaces a dos ejercicios, los cuales su funcionamiento se explica mas adelante. Ademas este permanecera oculto hasta el usuario se logue correctamente en la pagina.

·FOOTER:En este pie de pagina se indica el creador de la pagina, ademas de una foto del mismo, para que no haya confusión.

<h2>Ejercicio 1 y 2 (index)</h2>

·MAIN CONTENT: Cambia el mensaje de una card pulsando el boton de la misma, dando un resultado indicado en el JS.

<h1>JAVASCRIPT</h1>

<h3>login</h3>

·Guarda el nombre de usuario y contraseña necesario para entrar:
    const storedUsername = "miguel";
    const storedPassword = "elmasalto";

function login (): Realiza varias comprovaciones para dejar al usuario acceder a la pagina, entre ellas:

<!-- Guarda en variables los elementos de login del HTML, para asi utilizarlas para hacer validaciones. -->
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const mainContent = document.getElementById("mainContent");
  const submitButton = loginForm.querySelector('input[type="submit"]');
  const loginMessage = document.getElementById("loginMessage");

<!-- Se espera al evento submit manda los resultados dados por el usuario, utilizando event.preventDefault() para que no se recarge la pagina de manera predeterminada y se pueda realizar la comprovación.-->
  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

<!-- Examina que el nombre usuario tiene minimamente 3 caracteres, en caso contrario, manda un alert e impide que el usuario pueda mandar esa respuesta. -->
  if (usernameValue.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        return;
  }

<!-- Comprueba si son iguales los valores dados por el usuarios y aquellos dados por la pagina. En caso de ser iguales se indicara un mensaje de bienvenida y 2 segundos mas tarde desaparecera el contenido de la pagina y se remplazara por el MAIN CONTENT. En caso de ser incorrectos los valores, se reiniciara la pagina y se mostrara un mensaje indicando el acceso fallido. -->
  if (usernameValue === storedUsername && passwordValue === storedPassword) {
        loginMessage.style.color = "green" ;
        loginMessage.innerText = "¡Bienvenido!";

        setTimeout(function () {
            loginForm.style.display = "none";
            mainContent.style.display = "block";
            loginMessage.innerText = "";
        }, 2000);
    } else {
        username.disabled = false;
            password.disabled = false;
            loginForm.querySelector('input[type="submit"]').disabled = false;
            loginForm.reset();
            loginMessage.style.color = "red" ;
            loginMessage.innerText = "Acceso denegado.";
    }

<h3>funciones</h3>

·function mostrar(): Coge el id del campo resultado y cambia el contenido que tiene con .innerHTML

<h3>script</h3>

<!-- Coge la id del boton y el texto de resultado que se muestra -->
  const boton = document.getElementById("boton");
  const resultado = document.getElementById("resultado");

Cuando se presiona el boton, el click se registra y llama a la función dentro de funciones, pasandole el texto que tiene que remplazar.
