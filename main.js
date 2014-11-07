'use strict';

var foo = document.getElementById("foo"),
    bar = document.getElementById("bar");

delegateEvent(foo, 'click', 'div.hello', helloOnClick);
delegateEvent(bar, 'click', 'div.world', worldOnClick);

function helloOnClick(e){
    beep();
}

function worldOnClick(e) {
    beep();
    setTimeout(beep, 200);
}
