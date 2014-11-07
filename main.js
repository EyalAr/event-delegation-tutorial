'use strict';

var foo = document.getElementById("foo"),
    bar = document.getElementById("bar");

foo.addEventListener('click', helloOnClick);
bar.addEventListener('click', worldOnClick);

function helloOnClick() {
    beep();
}

function worldOnClick() {
    beep();
    setTimeout(beep, 200);
}
