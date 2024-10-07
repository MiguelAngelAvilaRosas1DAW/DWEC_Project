<h1>INTRODUCIÓN</h1>

En este ejercicio forzare al usuario a logearse dentro de mi pagina, utilizando para ello la función prompt, que permitira al usuario introducir un nombre y contraseña que, de ser correcto, le permitira el acceso dentro de la pagina, guardando el login en una cookie la cual se utilizara para mantener logueado al usuario hasta la fecha de expiración de la cookie. En el apartado de JavaScript veremos el funcionamiento de estas reglas.

Username: miguel

Password: elmasalto

<h1>HTML</h1>

<h2>Pagina principal (index)</h2>

·HEADER: Indica el nombre de la asignatura, ademas del nombre del ejercicio que se esta realizando.

·NAVIGATION BAR: Se muestran diferentes enlaces a paginas de ayuda con HTML, CSS, JS, etc... Ademas tambien incluye el enlace a mi GitHub, en el cual esta el repositorio con el ejercicio actual que este realizando. El nombre del repositorio es: DWEC_Project.

ACTUALIZACIÓN: Ahora tambien incluye dos campos. El primero muestra un desplegable con los dos ejercicios de calculadora y conversión de datos, y el segundo es un boton que sirve para salir de la pagina principal y tener que volver a registrarse.

·LOGIN:Es lo primero que se muestra al entrar en la pagina, con dos campos para indicar el nombre de usuario y la contraseña, con un boton que manda la respuesta al JS.

·MAIN CONTENT: Muestra un contenido variable dependiendo de la opcion seleccionada en el desplegable, teniendo un mensaje introductorio que lo indica.

·FOOTER:En este pie de pagina se indica el creador de la pagina, ademas de una foto del mismo, para que no haya confusión.

<h2>Ejercicio 1 (index)</h2>

·MAIN CONTENT: Es una mini calculadora, la cual recibe dos valores introducidos por el usuario atraves de 2 campos, pudiendo realizar diferentes funciones segun el boton pulsado:

  -SUMA (+): Suma los dos valores introducidos.

  -RESTA(-): Resta los dos valores introducidos.

  -MULTIPLICACIÓN(*): Multiplica los dos valores introducidos.

  -DIVISION(/): Divide los dos valores introducidos.

  -ENTERO(_.): Saca la parte entera del resultado que haya dado la operación.

  -DECIMAL(._): Saca la parte decimal del resultado que haya dado la operación.

  -FACTORIAL(!): Saca el factorial de los dos valores.

  -RESTO(%): Te da el resto de la division de los dos valores.

Tras realizar la operación, el resultado se imprime por pantalla en le bloque inferior.

<h2>Ejercicio 2 (index)</h2>

·MAIN CONTENT: Es un convertidor de bases, recibe un valor introducido por el usuario y lo convierte en:

  -BINARIO(/2)

  -OCTAL(/8)

  -HEXADECIMAL(/16)

  -ALFANUMERICO (/36)

Tras realizar la operación, el resultado se imprime por pantalla en le bloque inferior.

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

<!-- Función que muestra el contenido principal y oculta el formulario de login -->

function mostrarContenidoPrincipal() {
    loginForm.style.display = "none";
    mainContent.style.display = "block";
    
}

<!-- Función que muestra el formulario de login y oculta el contenido principal -->
    
function mostrarLogin() {
    mainContent.style.display = "none";
    loginForm.style.display = "block";
};

<!-- Llama a la función getCookie y para comprobar si sigue existiendo, si si ese es el (), en caso contrario (). -->

if (getCookie("loggedin") === username.value) {
    mostrarContenidoPrincipal()
    console.log("La cookie existe.");
    
    } else {
        mostrarLogin();
        console.log("La cookie no existe.");


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

<!-- Comprueba si son iguales los valores dados por el usuarios y aquellos dados por la pagina. En caso de ser iguales se indicara un mensaje de bienvenida y se guardara, con la funcion setCookie(), la sesion del usuario, para que este pueda seguir logueado en la pagina, sin necesidad de incluir los datos al recargarla. 2 segundos mas tarde (). En caso de ser incorrectos los valores, se reiniciara la pagina y se mostrara un mensaje indicando el acceso fallido. -->
  if (usernameValue === storedUsername && passwordValue === storedPassword) {
        loginMessage.style.color = "green" ;
        loginMessage.innerText = "¡Bienvenido!";

        setCookie("loggedin", usernameValue, 1);

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

  <!-- Cuando el usuario decide cerrar sesion usando el boton de LOG OFF, este borrara la cookie utilizando la funcion eraseCookie(), y ademas reiniciara la pagina para que el usuario tenga que volver a iniciar sesion. -->
  exit.addEventListener("click", function () {
    eraseCookie("loggedin");
    location.reload();
  });

<h3>mainPage</h3>

<!-- Crea constantes de diferentes elementos dentro de la pagina principal -->
const exit = document.getElementById("logOut");
const ejercicios = document.getElementById("ejercicios");
const mainContent = document.getElementById("mainContent");

<!-- Llama a la función getCookie y le pasa el nombre de la cookie creada en el login, en caso de que la cookie aun exista, mandara un mensaje por la consola indicandolo, y en caso contrario redigira al usuario a la pagina de login para que se vuelva a registrar. -->

if (getCookie("loggedin") === "true") {
    console.log("La cookie existe.");
    
    } else {
        console.log("La cookie no existe.");
        window.location.assign("index.html");

}

<!-- Se coge el valor de la opcion elejida en el desplegable, y dependiendo de cual sea, cambia el contenido principal de la pagina por una cart o por otra. -->

ejercicios.addEventListener("change", function () {
    const selectedOption = this.value;

    // Cambiar el contenido del HTML de la sección en función del valor seleccionado
    switch (selectedOption) {
        case "miniCalculator":
            mainContent.innerHTML = '<div class="card"> <h2>Mini Calculadora</h2> <p>Una calculadora para realizar diferentes operaciones aritmaticas.</p> <a href="./ejercicios/ejer01/index.html">Ir</a> </div>';
            break;
        case "converter":
            mainContent.innerHTML = "<div class='card'> <h2>Conversor de bases</h2> <p>Convierte un valor que le pases a binario, octal o hexadecimal.</p> <a href='./ejercicios/ejer02/index.html'>Ir</a> </div>";
            break;
    }
});

<!-- Si el usuario pulsa el boton para salir de la aplicación, se llamara a la funcion eraseCookie para borrar la cookie creada en el login, acto segido se reiniciara la pagina para que al hacer la comprobación de la existencia de la cookie, esta no exista, y mande al usuario a la pagina de login. -->

exit.addEventListener("click", function () {
    eraseCookie("loggedin");
    location.reload();
});

<h3>getCookie</h3>

  Esta función nos permitira recorre un Array de todas la cookies del sistema, y comprobar si la cookie creada por el usuario que inicio sesion en la pagina esta entre ellas, devolviendo un valor distinto dependiendo de cada situación.

  <!-- Declaramos dos constantes, las cuales seran el nombre que tendra la cookie y el array con las diferentes cookies guardadas en la pagina, separadas por ; con la función split()). -->

  const nameCookie = name + "=";
  const cookiesArray = document.cookie.split(';');

  <!-- Iremos analizando cada componente en el array, quitandole los espacios en blanco a cada elemento con la funcion trim(), tras esto utilizaremos la funcion subtring para comprobar el valor de la cookie y ver si esta vacia o no. En caso de existir la cookie, se devolvera el valor true, y en caso contrario, se devolvera null. -->

  for(let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameCookie) === 0) {
            return "true";
        }
    }
    return null;

<h3>setCookie</h3>

  Esta funcion nos permitira crear una nueva cookie, pasandole el nombre, el valor, y el tiempo de expiración de la misma en minutos.

  <!-- Coge la hora actual del sistema y lo pasa a milisegundos, sumandole el tiempo de expiración que se le pase. -->
    const date = new Date();
    console.log("Conectado el " + date);
    date.setTime(date.getTime() + (time * 60 * 1000));
    
  <!-- Coge el tiempo de expiración total y lo añade en una variable con el texto que idica la expiración de la cookie. Una vez con todo listo, añade todas las variable y las junta en una sentencia que crea con la cookie con el nombre, valor y fecha de expiración indicada. -->

    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict;Secure`;

  <!-- Manda mensajes por la consola indicando el tiempo en que se creo la cookie y el nombre y valor de la misma. -->

    console.log("Cookie creada: " + document.cookie);
    console.log("Duración de la cookie: " + time + " minuto/s.");

  <h3>eraseCookie</h3>

  Borra una cookie con un nombre especifico, indicando que su fecha de caducidad expiro en la fecha mas antigua que tiene JS registrada.

  function eraseCookie(name) {
    document.cookie = name + "= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
  }


<h3>calculadora</h3>

·Funciones:

  -factorialIterativo(): Obtiene el factorial de un numero que se le pase.

  -calculator(): Recibe un String con la operación que tenga que realizar, y dependiendo de cual sea realizara un calculo u otro.

<!-- Cuando el usurio pulse algun boton para una operación, este llamara al función calculator() y realizara el calculo indicado.-->

(operacion).addEventListener("click", function () {
    calculator("(operacion)");
});

<h3>conversorDeBases</h3>

·Funciones:

  -converter(): Recibe un String con la operación que tenga que realizar, y dependiendo de cual sea realizara una conversión u otra.

<!-- Cuando el usurio pulse algun boton para una conversión, este llamara al función converter() y realizara la conversión indicada.-->

(conversor).addEventListener("click", function () {
    calculator("(conversor)");
});

<!-- Coge la id del boton y el texto de resultado que se muestra -->
  const boton = document.getElementById("boton");
  const resultado = document.getElementById("resultado");

Cuando se presiona el boton, el click se registra y llama a la función dentro de funciones, pasandole el texto que tiene que remplazar.
