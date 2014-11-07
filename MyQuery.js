function MyQuery(selector){
    this.els = document.querySelectorAll(selector);
}

MyQuery.prototype.on = function(){
    /* ... */
};

function $(selector){
    return new MyQuery(selector);
}
