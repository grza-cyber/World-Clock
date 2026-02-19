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
    let bathElement = document.querySelector("#bath");
    if (bathElement) {
        bathElement.innerHTML = "Bath";
        let bathDateElement = document.querySelector("#bath-date");
        bathDateElement.innerHTML = moment().tz("Europe/London").format(dateFormat);
        let bathTimeElement = document.querySelector("#bath-time");
        bathTimeElement.innerHTML = moment().tz("Europe/London").format(timeFormat);
    }
    let gyeongjuElement = document.querySelector("#gyeongju");
    if (gyeongjuElement) {
        gyeongjuElement.innerHTML = "Gyeongju";
        let gyeongjuDateElement = document.querySelector("#gyeongju-date");
        gyeongjuDateElement.innerHTML = moment().tz("Asia/Seoul").format(dateFormat);
        let gyeongjuTimeElement = document.querySelector("#gyeongju-time");
        gyeongjuTimeElement.innerHTML = moment().tz("Asia/Seoul").format(timeFormat);
    }
}
setInterval(displayDateTime, 1000);


function updateTheCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split('/')[1];
    let dateFormat = "MMMM Do YYYY";
    let am = `[<small>]A[</small>]`;
    let timeFormat = `H:mm:ss ${am}`;
    let cityDate = moment().tz(cityTimeZone).format(dateFormat);
    let cityTime = moment().tz(cityTimeZone).format(timeFormat);
   
    let cityContainerElement = document.querySelector("#cities");
    let cityElement =  
        `<div class="city-select">
            <div class="city">
                <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
            </div>
            <div class="time">${cityTime}</div>
        </div>`
    cityContainerElement.innerHTML = cityElement;
  
    let linkElement = document.querySelector("#link");
    linkElement.innerHTML = `<a href="/">Back to all cities</a>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateTheCity);


