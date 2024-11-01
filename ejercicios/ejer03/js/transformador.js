"use strict";

navbar_functions("../../");

let textBox = document.getElementById("textBox");
const mayus = document.getElementById("mayus");
const minus = document.getElementById("minus");
const mayusFirst = document.getElementById("mayusFirst");
const mayusLast = document.getElementById("mayusLast");
const minusFirst = document.getElementById("minusFirst");
const minusLast = document.getElementById("minusLast");
const mayusVocals = document.getElementById("mayusVocals");
const minusVocals = document.getElementById("minusVocals");
const mayusAlfabet = document.getElementById("mayusAlfabet");
const minusAlfabet = document.getElementById("minusAlfabet");

const random = document.getElementById("random");
const stopButton = document.getElementById("stop");
const fast = document.getElementById("fast");
const slow = document.getElementById("slow");
const loadAPI = document.getElementById("loadAPI");

let continueRandom = false;
let time = 2000;

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

async function obtenerCita() {
    textBox.textContent = 'Cargando...';
  
    const url = 'https://linkedin-data-api.p.rapidapi.com/posts/reposts';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '34c648cd53mshfefe2e6b222822bp143450jsn128912a7654e',
		'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		urn: '7245786832909557760',
		page: 1,
		paginationToken: ''
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
      let randomIndex = Math.floor(Math.random() * 3);
      textBox.textContent = `"${data.data.alumniInsights.alumni[randomIndex].entityLockup.subtitle}"`;
    } catch (error) {
      textBox.textContent = 'Ocurrió un error al obtener la cita.';
      console.error(error);
    }
}

mayus.addEventListener("click", function () {
    textBox.value = textBox.value.toUpperCase();
});

minus.addEventListener("click", function () {
    textBox.value = textBox.value.toLowerCase();
});

mayusFirst.addEventListener("click", function () {
    firstLetter(true);
});

mayusLast.addEventListener("click", function () {
    lastLetter(true);
});

minusFirst.addEventListener("click", function () {
    firstLetter(false);
});

minusLast.addEventListener("click", function () {
    lastLetter(false);
});

mayusVocals.addEventListener("click", function () {
    letterChanger("aeiou", true);
});


minusVocals.addEventListener("click", function () {
    letterChanger("AEIOU", false);
});


mayusAlfabet.addEventListener("click", function () {
    letterChanger("qwrtypsdfghjklñzxcvbnm", true);
});


minusAlfabet.addEventListener("click", function () {
    letterChanger("QWRTYPSDFGHJKLÑZXCVBNM", false);
});

random.addEventListener("click", function () {
    continueRandom = true;
    ejecutarOpcion();
    console.log("Tiempo de cambio: " + time);
});

stopButton.addEventListener("click", function () {
    continueRandom = false;
});

fast.addEventListener("click", function () {
    time -= 500;
    console.log("Tiempo reducido a: " + time);
});

slow.addEventListener("click", function () {
    time += 500;
    console.log("Tiempo aumentado a: " + time);
});

loadAPI.addEventListener("click", function () {
    obtenerCita();
});