"use strict"

async function cargarDatos(tipo) {

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
}