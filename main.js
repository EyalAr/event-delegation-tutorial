'use strict';

var helloDiv = document.querySelectorAll("div#foo div")[0],
    worldDiv = document.querySelectorAll("div#bar div")[0];

helloDiv.addEventListener('click', helloOnClick);
worldDiv.addEventListener('click', worldOnClick);

function helloOnClick(){ 
    beep(); 
}

function worldOnClick(){ 
    beep();
    setTimeout(beep, 200);
}
