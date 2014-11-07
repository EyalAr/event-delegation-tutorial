function addHelloDiv(){
    var fooTr = document.querySelectorAll("div#foo table tr")[0],
        td = document.createElement("td"),
        div = document.createElement("div");

    div.innerHTML = "Hello";
    td.appendChild(div);
    fooTr.appendChild(td);

    div.addEventListener('click', helloOnClick);
}
