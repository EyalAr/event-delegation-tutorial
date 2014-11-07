'use strict';

var helloDiv = document.getElementsByClassName("hello")[0],
    worldDiv = document.getElementsByClassName("world")[0];

helloDiv.addEventListener('click', helloOnClick);
worldDiv.addEventListener('click', worldOnClick);

function helloOnClick(){ 
    beep(); 
}

function worldOnClick(){ 
    beep();
    setTimeout(beep, 200);
}
