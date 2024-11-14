"use strict"

async function cargarDatos(tipo) {

    const url = 'https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '34c648cd53mshfefe2e6b222822bp143450jsn128912a7654e',
            'x-rapidapi-host': 'twitter154.p.rapidapi.com'
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
        let nombreCargado = `${data.results[randomIndex].source}`;
        randomIndex = Math.floor(Math.random() * 4);
        let valorCargado = `${data.results[randomIndex].tweet_id}`;
        randomIndex = Math.floor(Math.random() * 4);
        let valorExtraIndexDb = `${data.results[randomIndex].media_url[0]}`;

        await grabarDato(nombreCargado, valorCargado, valorExtraIndexDb, tipo);


    } catch (error) {
        console.error(error);
    }
}