<h1>INTRODUCIÓN</h1>

En este ejercicio forzare al usuario a logearse dentro de mi pagina, utilizando para ello la función prompt, que permitira al usuario introducir un nombre y contraseña que, de ser correcto, le permitira el acceso dentro de la pagina, guardando el login en una cookie la cual se utilizara para mantener logueado al usuario hasta la fecha de expiración de la cookie. En el apartado de JavaScript veremos el funcionamiento de estas reglas.

Username: miguel

Password: elmasalto

<h1>HTML</h1>

<h2>Pagina principal (index)</h2>

·HEADER: Indica el nombre de la asignatura, ademas del nombre del ejercicio que se esta realizando.

·NAVIGATION BAR: Se muestran diferentes enlaces a paginas de ayuda con HTML, CSS, JS, etc... Ademas tambien incluye el enlace a mi GitHub, en el cual esta el repositorio con el ejercicio actual que este realizando. El nombre del repositorio es: DWEC_Project. Ademas para acceder a los ejercicios creados hay que utilizar los desplegables de la pagina, dividida en secciones. Por ultimo hay un boton para salir de la instancia.

·LOGIN:Es lo primero que se muestra al entrar en la pagina, con dos campos para indicar el nombre de usuario y la contraseña, con un boton que manda la respuesta al JS.

·MAIN CONTENT: Muestra un contenido variable dependiendo de la opcion seleccionada en el desplegable, teniendo un mensaje introductorio que lo indica.

·FOOTER:En este pie de pagina se indica el creador de la pagina, ademas de una foto del mismo, para que no haya confusión.

<h2>Ejercicio 1 (Mini-Calculadora)</h2>

·MAIN CONTENT: Es una mini calculadora, la cual recibe dos valores introducidos por el usuario atraves de 2 campos, pudiendo realizar diferentes funciones segun el boton pulsado:

  ·SUMA (+): Suma los dos valores introducidos.

  ·RESTA(-): Resta los dos valores introducidos.

  ·MULTIPLICACIÓN(*): Multiplica los dos valores introducidos.

  ·DIVISION(/): Divide los dos valores introducidos.

  ·ENTERO(_.): Saca la parte entera del resultado que haya dado la operación.

  ·DECIMAL(._): Saca la parte decimal del resultado que haya dado la operación.

  ·FACTORIAL(!): Saca el factorial de los dos valores.

  ·RESTO(%): Te da el resto de la division de los dos valores.

Tras realizar la operación, el resultado se imprime por pantalla en le bloque inferior.

<h2>Ejercicio 2 (Conversor de bases)</h2>

·MAIN CONTENT: Es un convertidor de bases, recibe un valor introducido por el usuario y lo convierte en:

  ·BINARIO(/2)

  ·OCTAL(/8)

  ·HEXADECIMAL(/16)

  ·ALFANUMERICO (/36)

Tras realizar la operación, el resultado se imprime por pantalla en le bloque inferior.

<h2>Ejercicio 3 (Transformador del texto)</h2>

·MAIN CONTENT: Es un transformador de texto que te permitira cambiar el texto que escribas a mayusculas y minusclas, con diferentes opciones disponibles:

·A-Z: Lo pone todo en mayusculas.

·a-z: Lo pone todo en minusculas.

·A_: Pone la primera letra de cada palabra en mayuscula.

·_Z: Pone la ultima letra de cada palabra en mayuscula.

·a_: Pone la primera letra de cada palabra en minuscula.

·_z: Pone la ultima letra de cada palabra en minuscula.

·AEIOU: Pone todas las vocales en mayuscula.

·aeiou: Pone todas las vocales en minuscula.

·BCD: Pone las letras en el alfabeto en mayuscula.

·bcd: Pone las letras en el alfabeto en minuscula.


Ademas tambien se incluyen otras funciones adicionales como:

·Aleatorio: Cambia cada 2 segundos el formato del texto.

·Parar: Para a la funcion random.

·Rapido: Recorta el tiempo de cambio de la funcion random por 0.5 segundos.

·Lento: Aumenta el tiempo de cambio de la funcion random por 0.5 segundos.

<h1>JAVASCRIPT</h1>

<h3>login</h3>

·Guarda el nombre de usuario y contraseña necesario para entrar:
    const storedUsername = "miguel";
    const storedPassword = "elmasalto";

function login (): Realiza varias comprovaciones para dejar al usuario acceder a la pagina, entre ellas:

Guarda en variables los elementos de login del HTML, para asi utilizarlas para hacer validaciones. -->

  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const mainContent = document.getElementById("mainContent");
  const submitButton = loginForm.querySelector('input[type="submit"]');
  const loginMessage = document.getElementById("loginMessage");

Función que muestra el contenido principal y oculta el formulario de login -->


function mostrarContenidoPrincipal() {
    loginForm.style.display = "none";
    mainContent.style.display = "block";
    
}

Función que muestra el formulario de login y oculta el contenido principal -->

    
function mostrarLogin() {
    mainContent.style.display = "none";
    loginForm.style.display = "block";
};

Llama a la función getLocalStorage y para comprobar si sigue existiendo la sesion. -->


if (getLocalStorage("loggedIn") === "connected") {
    window.location.assign("mainPage.html");
    }


Se espera al evento submit manda los resultados dados por el usuario, utilizando event.preventDefault() para que no se recarge la 
pagina de manera predeterminada y se pueda realizar la comprovación.-->
  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

Examina que el nombre usuario tiene minimamente 3 caracteres, en caso contrario, manda un alert e impide que el usuario pueda 
mandar esa respuesta. -->
  const usernameRegex = /^.{3,}$/;
            if (!usernameRegex.test(usernameValue)) {
                alert("El nombre de usuario debe tener al menos 3 caracteres.");
                return;
            }

Comprueba si son iguales los valores dados por el usuarios y aquellos dados por la pagina. En caso de ser iguales se indicara un 
mensaje de bienvenida y se guardara, con la funcion setLocalStorage(), la sesion del usuario, para que este pueda seguir logueado en la pagina, sin necesidad de incluir los datos al recargarla. 2 segundos mas tarde (). En caso de ser incorrectos los valores, se reiniciara la pagina y se mostrara un mensaje indicando el acceso fallido. -->
  if (usernameValue === storedUsername && passwordValue === storedPassword) {
        loginMessage.style.color = "green" ;
        loginMessage.innerText = "¡Bienvenido!";

        setLocalStorage("loggedIn", "connected");

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

  Cuando el usuario decide cerrar sesion usando el boton de LOG OFF, este borrara la cookie utilizando la funcion eraseCookie(), y 
  ademas reiniciara la pagina para que el usuario tenga que volver a iniciar sesion. -->
  exit.addEventListener("click", function () {
    eraseCookie("loggedin");
    location.reload();
  });

<h3>mainFunctions</h3>

Crea constantes de diferentes elementos dentro de la pagina principal -->

const exit = document.getElementById("logOut");
const ejercicios = document.getElementById("ejercicios");
const mainContent = document.getElementById("mainContent");

Con esta función podremos comprobar de forma independiente en cada pagina de la aplicación si la cookie sigue existiendo, llamando 
a la función getCookie. Ademas con esta tambien podremos cambiar el contenido principal de la pagina, poniendo en su lugar cards con enlaces a los diferentes ejercicios de la pagina, los cuales se iran asignando dependiendo de los valores que se le pasen a la función.-->

function navbar_functions(link) {
    if (getCookie("loggedin") === "true") {
        console.log("La cookie existe.");
        
        } else {
            console.log("La cookie no existe.");
            window.location.assign(`${link}/index.html`);
    
    }
    
    ejercicios.addEventListener("change", function () {
        const selectedOption = this.value;
    
        switch (selectedOption) {
            case "miniCalculator":
                mainContent.innerHTML = `
                <div class="card">
                    <h2>Mini Calculadora</h2> 
                    <p>Una calculadora para realizar diferentes operaciones aritmaticas.</p>
                    <a href="${link}/ejercicios/ejer01/index.html">Ir</a>
                </div>`;
                break;
            case "converter":
                mainContent.innerHTML = `
                <div class="card">
                    <h2>Conversor de bases</h2>
                    <p>Convierte un valor que le pases a binario, octal o hexadecimal.</p>
                    <a href="${link}/ejercicios/ejer02/index.html">Ir</a>
                </div>`;
                break;
        }
    });   
}

Si el usuario pulsa el boton para salir de la aplicación, se llamara a la funcion eraseCookie para borrar la cookie creada en el 
login, acto segido se reiniciara la pagina para que al hacer la comprobación de la existencia de la cookie, esta no exista, y mande al usuario a la pagina de login. Se le preguntara al usuario si quiere cerrar sesion antes de nada. -->

exit.addEventListener("click", function () {
    const tryAgain = confirm("¿Quieres cerrar sesión?");
        if (tryAgain) {
            eraseCookie("loggedin");
            location.reload();
        }
});

<h3>navbarFunctions</h3>
Esta funcion sirve principalmente para llamar a la función de navbar_functions, asignandole los valores necesarios para que se pueda ejecutar de manera independiente en la pagina principal.

<h3>getLocalStorage</h3>

Comprueba si la sesion a sido iniciada y da una respuesta de verdadero y falso. -->


  function getLocalStorage(name) {
    const value = localStorage.getItem(name);
    console.log(`localStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}

<h3>setLocalStorage</h3>

Crea un inicio de sesion con una clave y un valor. -->


function setLocalStorage(name, value) {
    localStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`localStorage: ${name}=${encodeURIComponent(value || "")}`);
}

Borra el valor de la sesion inciada, y reenvia al usuario a el login de nuevo. -->


  <h3>deleteLocalStorage</h3>

function deleteLocalStorage(name) {
    localStorage.removeItem(name);
    console.log(`localStorage: Eliminada la clave ${name}`);
}

<h3>calculadora</h3>

·Funciones:

  -factorialIterativo(): Obtiene el factorial de un numero que se le pase.

  -calculator(): Recibe un String con la operación que tenga que realizar, y dependiendo de cual sea realizara un calculo u otro.

Llama a la función navbar_functions para revisar el estado de la cookie y cambiar el contenido de la pagina principla. -->


navbar_functions("../../") ;

Cuando el usurio pulse algun boton para una operación, este llamara al función calculator() y realizara el calculo indicado.-->


(operacion).addEventListener("click", function () {
    calculator("(operacion)");
});

<h3>conversorDeBases</h3>

·Funciones:

  -converter(): Recibe un String con la operación que tenga que realizar, y dependiendo de cual sea realizara una conversión u otra.

Llama a la función navbar_functions para revisar el estado de la cookie y cambiar el contenido de la pagina principla. -->


navbar_functions("../../") ;

Cuando el usurio pulse algun boton para una conversión, este llamara al función converter() y realizara la conversión indicada.-->


(conversor).addEventListener("click", function () {
    calculator("(conversor)");
});

Coge la id del boton y el texto de resultado que se muestra -->

  const boton = document.getElementById("boton");
  const resultado = document.getElementById("resultado");

Cuando se presiona el boton, el click se registra y llama a la función dentro de funciones, pasandole el texto que tiene que remplazar.

<h3>transformador</h3>

Con esta función declaramos un nuevo texto que sustituira a la area de texto principal, en este, se cambiara la primera letra de 
cada palabra por su versión mayuscula o minuscula. -->

function firstLetter(size) {
    let text = textBox.value.split(" ") ;
    let firstLetter;
    let newText = "";
    text.forEach(word => {
        if (size) {
            firstLetter = word.charAt(0).toUpperCase();
            
        } else {
            firstLetter = word.charAt(0).toLowerCase();
        }
        let otherText = word.slice(1, word.length);
        word = firstLetter + otherText;
        newText += word + " ";
        })
    textBox.value = textBox.value.replace(textBox.value, newText).trim();
}

Con esta función declaramos un nuevo texto que sustituira a la area de texto principal, en este, se cambiara la ultima letra de 
cada palabra por su versión mayuscula o minuscula. -->

function lastLetter(size) {
    let text = textBox.value.split(" ") ;
    let lastLetter;
    let newText = "";
    text.forEach(word => {
        if (size) {
            lastLetter = word.charAt(word.length-1).toUpperCase();
            
        } else {
            lastLetter = word.charAt(word.length-1).toLowerCase();
        }
        let otherText = word.slice(0, word.length-1);
        word = otherText + lastLetter;
        newText += word + " ";
        })
    textBox.value = textBox.value.replace(textBox.value, newText).trim();
}

En caso de que queramos cambiar letras especificas en nuestro texto a mayusculas o minusculas, esta funcion nos permitira indicar 
cuales son esas letras, y cambiarlas. -->

function letterChanger(letters, size) {
    let text = textBox.value.split(" ") ;
    let newText = "";
    let newWord = "";
        for (let word of text) {
            for (let letter of word) {
                for (let vocal of `${letters}`) {
                    if (letter.includes(vocal)) {
                        if (size) {
                            letter = letter.toUpperCase();
                        } else {
                            letter = letter.toLowerCase();
                        }
                        
                    }
                }
                    newWord += letter;

            }
            newText += newWord + " ";
            newWord = "";
        }
    textBox.value = textBox.value.replace(textBox.value, newText).trim();
}

Esta funcion llamara a una API externa, y sacara un valor de la misma, la cual sera un texto aleatorio, que luego se podra 
modificar en el textArea. -->

async function obtenerCita() {
    // Mostrar un mensaje mientras se carga la cita
    textBox.textContent = 'Cargando...';
  
    const url = 'https://linkedin-data-scraper.p.rapidapi.com/company_insights?link=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoogle';
    const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': '34c648cd53mshfefe2e6b222822bp143450jsn128912a7654e',
          'x-rapidapi-host': 'linkedin-data-scraper.p.rapidapi.com'
      }
  };
  
    try {
      // Realizar la solicitud a la API
      const response = await fetch(url, options);
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      console.log(response);
      // Convertir la respuesta a JSON
      const data = await response.json();
      console.log(data);
      // Mostrar la cita y el autor en la página
      let randomIndex = Math.floor(Math.random() * 3);
      textBox.textContent = `"${data.data.alumniInsights.alumni[randomIndex].entityLockup.subtitle}"`;
    } catch (error) {
      // Manejar errores
      textBox.textContent = 'Ocurrió un error al obtener la cita.';
      console.error(error);
    }
}

Esta función ira ligada a el boton ALEATORIO, el cual ira rotando en las diferentes opciones de cambio de texto presentadas y 
elijira cual utilizar en un rango de tiempo definido con anterioridad, siendo el prestablecido de 2 segundos. -->

function ejecutarOpcion() {
    if (!continueRandom) return;

    let opcion = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    switch (opcion) {
        case 1:
            mayus.click();
            break;

        case 2:
            minus.click();
            break;

        case 3:
            mayusFirst.click();
            break;

        case 4:
            mayusLast.click();
            break;

        case 5:
            minusFirst.click();
            break;

        case 6:
            minusLast.click();
            break;

        case 7:
            mayusVocals.click();
            break;

        case 8:
            minusVocals.click();
            break;

        case 9:
            mayusAlfabet.click();
            break;

        case 10:
            minusAlfabet.click();
            break;
    }

    setTimeout(ejecutarOpcion, time);
}

Con este boton, pararemos el proceso del boton random, al cambiar la variable que lo sigue ejecutando. -->


stopButton.addEventListener("click", function () {
    continueRandom = false;
});

Con este boton recortaremos el tiempo necesario para cambiar aleatoriamente el texto de la area de texto. -->


fast.addEventListener("click", function () {
    time -= 500;
    console.log("Tiempo reducido a: " + time);
});

Con este boton aumentaremos el tiempo necesario para cambiar aleatoriamente el texto de la area de texto. -->


slow.addEventListener("click", function () {
    time += 500;
    console.log("Tiempo aumentado a: " + time);
});