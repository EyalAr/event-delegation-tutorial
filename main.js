'use strict';

var foo = $("#foo"),
    bar = $("#bar");

foo.on('click', 'div.hello', helloOnClick);
bar.on('click', 'div.world', worldOnClick);

function helloOnClick(e){
    beep();
}

function worldOnClick(e) {
    beep();
    setTimeout(beep, 200);
}
