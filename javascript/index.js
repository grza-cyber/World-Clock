function displayDateTime() {
    let dateFormat = "MMMM Do YYYY";
    let am = `[<small>] A [</small>]`;
    let timeFormat = `H:mm:ss ${am}`;

    let zurichElement = document.querySelector("#zurich");
    zurichElement.innerHTML = "Zürich";
    let zurichDateElement = document.querySelector("#zurich-date");
    zurichDateElement.innerHTML = moment().tz("Europe/Zurich").format(dateFormat);
    let zurichTimeElement = document.querySelector("#zurich-time");
    zurichTimeElement.innerHTML = moment().tz("Europe/Zurich").format(timeFormat);

    let bathElement = document.querySelector("#bath");
    bathElement.innerHTML = "Bath";
    let bathDateElement = document.querySelector("#bath-date");
    bathDateElement.innerHTML = moment().tz("Europe/London").format(dateFormat);
    let bathTimeElement = document.querySelector("#bath-time");
    bathTimeElement.innerHTML = moment().tz("Europe/London").format(timeFormat);

    let antananarivoElement = document.querySelector("#antananarivo");
    antananarivoElement.innerHTML = "Antananarivo";
    let antananarivoDateElement = document.querySelector("#antananarivo-date");
    antananarivoDateElement.innerHTML = moment().tz("Indian/Antananarivo").format(dateFormat);
    let antananarivoTimeElement = document.querySelector("#antananarivo-time");
    antananarivoTimeElement.innerHTML = moment().tz("Indian/Antananarivo").format(timeFormat);

    let saopauloElement = document.querySelector("#sao-paulo");
    saopauloElement.innerHTML = "Sao Paulo";
    let saopauloDateElement = document.querySelector("#sau-paulo-date");
    saopauloDateElement.innerHTML = moment().tz("America/Sao_Paulo").format(dateFormat);
    let saopauloTimeElement = document.querySelector("#sau-paulo-time");
    saopauloTimeElement.innerHTML = moment().tz("America/Sao_Paulo").format(timeFormat);
}

setInterval(displayDateTime, 1000);

