/**
 * PROJETO: Relógio Analógico Minimalista em Tempo Real - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Lógica interativa para o componente.
 * FINALIDADE: Manipulação de eventos, DOM e cálculos dinâmicos.
 */

let diallines = document.getElementsByClassName("diallines");
let clockE1 = document.getElementsByClassName("clock")[0];

for (var i = 1; i < 60; i++) {
    clockE1.innerHTML += "<div class='diallines'></div>";
    diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    let weekday = ["Sonday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),

        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,

        hE1 = document.querySelector(".hour-hand"),
        mE1 = document.querySelector(".minute-hand"),
        sE1 = document.querySelector(".second-hand"),
        dateE1 = document.querySelector(".date"),
        dayE1 = document.querySelector(".day");

        let day = weekday[d.getDay()];

        if(month < 9){
            month  = "0" + month;
        }

        hE1.style.transform = "rotate("+hDeg+"deg)";
        mE1.style.transform = "rotate("+mDeg+"deg)";
        sE1.style.transform = "rotate("+sDeg+"deg)";
        dateE1.innerHTML = date + "/" + month + "/" + year;
        dayE1.innerHTML = day; 
}

setInterval(clock, 100);