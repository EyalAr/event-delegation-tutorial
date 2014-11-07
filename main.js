'use strict';

var foo = document.getElementById("foo"),
    bar = document.getElementById("bar");

foo.addEventListener('click', helloOnClick);
bar.addEventListener('click', worldOnClick);

function helloOnClick(e){ 
    if (e.target.matches("div#foo div.hello")){
        beep();
    }
}

function worldOnClick(e) {
    if (e.target.matches("div#bar div.world")){
        beep();
        setTimeout(beep, 200);
    }
}
