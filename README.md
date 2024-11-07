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

<h2>Ejercicio 4 (Generador de Matrices)</h2>

·MAIN CONTENT: Genera matrices a partir de unas dimensiones indicadas por el usuario, puediendo sumar, restar y multiplicar estas. Ademas cuenta tambien con un generador aleatorio de valores para indicar en los inputs del usuario. Otras de las opciones añadidas es la posibilidad de indicar el rango de numeros con el que se crearan las matrices.

Ademas tambien se incluyen otras funciones adicionales como:

·Aleatorio: Cambia cada 2 segundos el formato del texto.

·Parar: Para a la funcion random.

·Rapido: Recorta el tiempo de cambio de la funcion random por 0.5 segundos.

·Lento: Aumenta el tiempo de cambio de la funcion random por 0.5 segundos.

Ademas es aprueba de errores, dando alertas en caso de que el usuario no introduzca valores en todas los inputs o ponga numeros negativos.

En caso de que llege a poner decimales, el progrmas redondeara el input y mostrara el resultado correctamente.

<h2>Ejercicio 5 (Almacenamientos)</h2>

·MAIN CONTENT: Este apartado permitira al usuario guardar claves y valores de tres formas distintas: Por cookies (cookies.html), por localStorage (localStorage.html) y por IndexedDB (indexedDB.html). Cada una te dara la opción de borrar y actualizar los valores de los datos, ademas de una funcion adicional para cargar de una API valores aleatorios los cuales crearan nuevos registros.

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

<h3>navbarFunctions</h3>

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

<h3>deleteIndexedDB</h3>

Borra el valor de la clave en IndexedDB -->

async function deleteIndexedDB(name) {
    await openDatabase();
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const almacen = transaction.objectStore('LoginStore');
    const request = almacen.delete(name);

    request.onsuccess = function() {
        console.log(`IndexedDB: Eliminada la clave ${name}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al eliminar el dato', event);
    };
}

<h3>getIndexedDB</h3>

Obtiene el valor de una clave especifica en IndexedDB -->

async function getIndexedDB(name) {
    await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['LoginStore'], 'readonly');
        const store = transaction.objectStore('LoginStore');
        const request = store.get(name);
        request.onsuccess = function (event) {
            if (request.result) {
                const value = decodeURIComponent(request.result.value);
                console.log(`IndexedDB: Recuperado ${name}=${value}`);
                resolve(value);
            } else {
                console.log(`IndexedDB: No se encontró el valor para ${name}`);
                resolve(null);
            }
        };

        request.onerror = function (event) {
            console.error('IndexedDB: Error al obtener el dato', event);
            reject(event);
        };
    });
}

<h3>indexedDB</h3>

Abre la base de datos de IndexedDB -->

let db;
async function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('LoginDB', 1);
        request.onerror = function (event) {
            console.error('IndexedDB: Error al abrir la base de datos', event);
            reject(event);
        };
        request.onsuccess = function (event) {
            db = event.target.result;
            console.log('IndexedDB: Base de datos abierta exitosamente');
            resolve(db);
        };

        request.onupgradeneeded = function (event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains('LoginStore')) {
                db.createObjectStore('LoginStore', { keyPath: 'name' });
                console.log('IndexedDB: Almacén creado');
            }
        };
    });
}

<h3>setIndexedDB</h3>

Crean una nueva clave en IndexedDB -->

async function setIndexedDB(nombre, value) {
    await openDatabase();
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const almacen = transaction.objectStore('LoginStore');
    const request = almacen.put({ name: nombre, value: encodeURIComponent(value || "") });

    request.onsuccess = function() {
        console.log(`IndexedDB: Guardado ${nombre}=${encodeURIComponent(value || "")}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al guardar el dato', event);
    };
}

<h3>crearMatriz</h3>

Crea una matriz vidimensional numerica vacia -->

function crearMatriz(matrizDimensions) {

    console.log(matrizDimensions);

    let matriz = [];

    for (let i = 0; i < matrizDimensions; i++) {
        matriz[i] = [];
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let x = 0; x < matrizDimensions; x++) {
            matriz[i][x] = 0;
        }
    }

    return matriz;
}

<h3>rellenarMatriz</h3>

Rellena todas las columnas de la matriz con numeros aleatorios con un rango entre 2 valores -->

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function rellenarMatriz(matriz, lowerRange, superiorRange) {

    console.log(lowerRange);
    console.log(superiorRange);

    for (let i = 0; i < matriz.length; i++) {
        for (let x = 0; x < matriz.length; x++) {
            matriz[i][x] = numeroAleatorio(lowerRange,superiorRange);
        }
    }

    console.table(matriz);

    return matriz;
}

<h3>mostrarMatriz</h3>

Crea una tabla, creando filas y columnas donde se almacenaran todos los datos de un array bidimensional, que dara lugar a una tabla -->

function mostrarMatriz(matriz) {
    let tabla = document.createElement('table');
    for (let i = 0; i < matriz.length; i++) {
        let fila = document.createElement('tr');
        for (let x = 0; x < matriz.length; x++) {
            let contenido = document.createTextNode(matriz[i][x]);
            let columna = document.createElement('td');
            columna.appendChild(contenido);
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);

    }

    return tabla;
}

<h3>ecuacionesMatrices</h3>

Realiza operaciones con matrices y devuelve el resultado en una nueva matriz -->

function ecuacionesMatrices(matrizA, matrizB, matrizResultado, operador) {

    let num1;
    let num2;

    for (let i = 0; i < matrizResultado.length; i++) {
        for (let x = 0; x < matrizResultado.length; x++) {
            num1 = matrizA[i][x];
            num2 = matrizB[i][x];

            switch (operador) {
                case "sumar":
                    matrizResultado[i][x] = num1 + num2;
                break;

                case "restar":
                    matrizResultado[i][x] = num1 - num2;
                break;

                case "multiplicar":
                    matrizResultado[i][x] = num1 * num2;
                break;
            }
        }
    }
    

    return matrizResultado;

}

<h3>generadorMatrices</h3>

Genera valores aleatorios en los tres inputs utilizando un rango entre dos valores -->

valoresAleatorios.addEventListener("click", function () {
    matrizDimensions.value = numeroAleatorio(1, 10);
    lowerRange.value = numeroAleatorio(1, 100);
    superiorRange.value = numeroAleatorio(1, 100);
});


Genera matrices y remplaza parrafos por tablas que muestran susodichas raices -->

generarMatrices.addEventListener("click", function () {
    if (matrizDimensions.value == "" || lowerRange.value == "" || superiorRange.value == "") {
        matrizB.replaceChildren("Debe introducir TODOS los valores numericos que se le piden.");
    } else if (matrizDimensions.value < 0 || lowerRange.value < 0 || superiorRange.value < 0) {
        matrizB.replaceChildren("NO se permite utilizar numeros NEGATIVOS.");
    } else {

        matrizDimensions.value = Math.round(matrizDimensions.value);
        lowerRange.value = Math.round(lowerRange.value);
        superiorRange.value = Math.round(superiorRange.value);

        dataMatrizA = crearMatriz(matrizDimensions.value);
        dataMatrizA = rellenarMatriz(dataMatrizA, lowerRange.value, superiorRange.value);
        matrizA.replaceChildren(mostrarMatriz(dataMatrizA));

        dataMatrizB = crearMatriz(matrizDimensions.value);
        dataMatrizB = rellenarMatriz(dataMatrizB, lowerRange.value, superiorRange.value);
        matrizB.replaceChildren(mostrarMatriz(dataMatrizB));
    }

});

<h3>scriptCookies y scriptLocalStorage</h3>

Estos scripts registran el contenido de su html y generan funciones para cada boton de interaccion del usuario, creando ademas un array para guardar el contenido que se almacene -->

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (navigator.cookieEnabled == true) { // comprueba que el navegador sea compatible
    const nombre = document.getElementById("nombre"); // accedo al valor del input para el nombre
    const valor = document.getElementById("valor"); // accedo al valor del input para la clave

    const grabar = document.getElementById("guardar");
    const cargar = document.getElementById("cargarApi");
    const cargar5 = document.getElementById("cargarApi5");

    mostrarDatos(); // muestro el contenido de las 'cookies'
    grabar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await grabarDato(nombre.value, valor.value); // grabo una 'cookie'
    });
    cargar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await cargarDatos(); // cargo una API
    });
    cargar5.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        for (let index = 0; index < 5; index++) {
            await cargarDatos(); // cargo una API
        }
    });

} else {
    alert("El uso de cookies está desactivado");
}

<h3>scriptIndexedDb</h3>

IndexedDB hace lo mismo que el script anterior, pero creando y abriendo una base de datos utilizando los comandos necesarios de la misma para funcionar.

    let datos = [];
    let solicitudDB,
        bd,
        canalBD;
    let nombreBD = "DATOS";
    let versionBD = 1;
    let tablaBD = "datos";
    solicitudDB = indexedDB.open(nombreBD, versionBD); 
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`); 
    };
    solicitudDB.onsuccess = function (event) { 
        console.info('Conexión satisfactoria'); 
        bd = event.target.result; 
    };
    solicitudDB.onupgradeneeded = function (event) { 
        console.info('Base de datos creada'); 
        bd = event.target.result; 
        let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
        registros.createIndex("nombre", "nombre", { unique: false }); // CREAMOS UN CAMPO 'nombre'
        registros.createIndex("edad", "edad", { unique: false }); // CREAMOS UN CAMPO 'clave'

        registros.oncompleted = function (event) {
            console.info('Almacen de datos creado');
        }
    };

    mostrarDatos("indexedDb"); // MUESTRO LOS DATOS
    // DATOS
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    // GUARDAR
    const guardar = document.getElementById("guardar");
    const cargar = document.getElementById("cargarApi");
    const cargar5 = document.getElementById("cargarApi5");

    guardar.addEventListener("click", function () {
        grabarDato(nombre.value, edad.value, "indexedDb");
    });

    cargar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await cargarDatos("indexedDb"); // cargo una API
    });
    cargar5.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        for (let index = 0; index < 5; index++) {
            await cargarDatos("indexedDb"); // cargo una API
        }
    });

<h3>grabarDato</h3>

    Esta funcion utiliza un switch para elegir entre la grabación de los datos por IndexedDb, localStorage o cookies, utilizando cada una sus funcionalidades para ello:

<h4>Cookies (Creando una nueva cookie con sus parametros)</h4>

            let caducidadCookie = 1 * 60 * 1000; // caducidad por defecto, 1 minutos

            let theDate = new Date(); // obtengo la fecha actual
            let currentMiliseconds = theDate.getTime(); // obtengo la fecha actual en milisegundos
            let expirationMiliseconds = currentMiliseconds + caducidadCookie; // añado la caducidad en milisegundos
            theDate.setTime(expirationMiliseconds); // actualizo la fecha (ahora con el incremento de la caducidad)
            console.log(`Fecha caducidad: ${theDate}`);

            // creo la 'cookie' con los atributos correspondientes
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";
            mostrarDatos("cookie");
            break;

<h4>LocalStorage (Introduciendo nuevos parametros al array)</h4>

            datosAcceso.push({
                nombre: name,
                valor: value
            }); // introduzco los datos: nombre y clave, en el 'array'

            // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
            localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));
            mostrarDatos("localStorage");
            break;

<h4>IndexedDB (Abriendo la base de datos e introduciendo nuevos valores a la misma)</h4>

            solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
                canalBD.put({ nombre: name, edad: value }); // Almacena los valores obtenidos de los campos de entrada
                mostrarDatos("indexedDb");
            };
            break;

<h3>borrarDato</h3>

    Esta funcion utiliza un switch para elegir entre el borrado de los datos por IndexedDb, localStorage o cookies, utilizando cada una sus funcionalidades para ello:

<h4>Cookies (Cambiando la caducidad de la cookie para que deje de existir)</h4>

            let caducidadCookie = 1 * 60 * 1000;

            let theDate = new Date();
            let currentMiliseconds = theDate.getTime();
            let expirationMiliseconds = currentMiliseconds - caducidadCookie;
            theDate.setTime(expirationMiliseconds);
            console.log(`Fecha caducidad: ${theDate}`);

            document.cookie = nombre + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";

            mostrarDatos("cookie");

<h4>LocalStorage (Creando un nuevo array con los nuevos datos, sustituyendo a los antiguos)</h4>

    let newDatosAcceso = [];
            let cont = 0;

            datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
            for (let i = 0; i < datosAcceso.length; i++) {
                if (!(datosAcceso[i].nombre == nombre)) { // recorro el 'array' hasta encontrar el dato que busco
                    newDatosAcceso[cont] = datosAcceso[i];
                    cont++;
                }
            }
            datosAcceso = [...newDatosAcceso]; // 'spread' the array (clonar el array)
            // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
            localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));
            break;

<h4>IndexedDB (Abriendo la base de datos y utilizando el parametro .delete para borrar el dato especifico)</h4>

    solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
                canalBD.delete(nombre);
            };
            mostrarDatos("indexedDb");

<h3>cargarDatos</h3>

Carga una API con valores aleatorios y graba los resultados con Cookies, localStorage o IndexedDB dependiendo del parametro que se le mande -->

const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=5';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '34c648cd53mshfefe2e6b222822bp143450jsn128912a7654e',
            'x-rapidapi-host': 'random-words5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        let randomIndex = Math.floor(Math.random() * 4);
        let nombreCargado = `${data[randomIndex]}`;
        randomIndex = Math.floor(Math.random() * 4);
        let valorCargado = `${data[randomIndex]}`;

        switch (tipo) {
            case "cookie":
                await grabarDato(nombreCargado, valorCargado, "cookie");
            break;
        
            case "localStorage":
                await grabarDato(nombreCargado, valorCargado, "localStorage");
            break;

            case "indexedDb":
                await grabarDato(nombreCargado, valorCargado, "indexedDb");
            break;

        }
        
    } catch (error) {
        console.error(error);
    }

<h3>mostrarDatos</h3>

Este script se divide en tres secciones separadas por un switch, cada caso se realizara en caso de que se quiera realizar con cookies, localStorage o indexedDB.

En todos los casos se crea una tabla con una seccion para la clave y otra para el valor, junto a 2 botones para borrar o actualizar los valores-->

    let linea = document.createElement("tr"), // creo una fila
    campoNombre = document.createElement("td"), // creo una celda para el nombre
    campoValor = document.createElement("td"), // creo una celda para la clave
    campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
    campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'

    botonBorrar = document.createElement("button"), // creo un botón type="button"
    imagenBorrar = document.createElement("img"), // creo una imagen
    botonActualizar = document.createElement("button"), // creo un botón type="button"
    imagenActualizar = document.createElement("img"); // creo una imagen

Y dependiendo de cada caso, tendra una forma distinta de borrar o actualizar la cookie, sin embargo el codigo es muy similar, excepto por indexedDB, que se mandan los parametros de forma distinta en el borrar y actualizar.

<h4>Cookies y localStorage</h4>

botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso.nombre, "localStorage"); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                        mostrarDatos("localStorage");
                    });

botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso.nombre, "localStorage");
                        datoAcceso.nombre = document.getElementById("nombre").value;
                        console.log(datoAcceso[0]);
                        datoAcceso.valor = document.getElementById("valor").value;
                        console.log(datoAcceso[1]);
                        actualizar.click();
                    });

<h4>IndexedDB</h4>

botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                            borrarDato(registro.id, "indexedDb"); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                        });

botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                            borrarDato(registro.id, "indexedDb");
                            registro.nombre = document.getElementById("nombre").value;
                            registro.edad = document.getElementById("edad").value;
                            actualizar.click();
                        });