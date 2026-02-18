function displayDateTime() {
    let dateFormat = "MMMM Do YYYY";
    let am = `[<small>] A [</small>]`;
    let timeFormat = `H:mm:ss ${am}`;
    let antananarivoElement = document.querySelector("#antananarivo");
    if (antananarivoElement) {
        antananarivoElement.innerHTML = "Antananarivo";
        let antananarivoDateElement = document.querySelector("#antananarivo-date");
        antananarivoDateElement.innerHTML = moment().tz("Indian/Antananarivo").format(dateFormat);
        let antananarivoTimeElement = document.querySelector("#antananarivo-time");
        antananarivoTimeElement.innerHTML = moment().tz("Indian/Antananarivo").format(timeFormat);
    }
}
setInterval(displayDateTime, 1000);


function updateTheCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split('/')[1];
    let dateFormat = "MMMM Do YYYY";
    let am = `[<small>]A[</small>]`;
    let timeFormat = `H:mm:ss ${am}`;
    let cityDate = moment().tz(cityTimeZone).format(dateFormat);
    let cityTime = moment().tz(cityTimeZone).format(timeFormat);
   
    let cityContainerElement = document.querySelector("#city-container");
    let cityElement =  
        `<div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityDate}</div>
        </div>
        <div class="time">${cityTime}</div>`
    cityContainerElement.innerHTML = cityElement;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateTheCity);


