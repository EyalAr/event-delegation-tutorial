function MyQuery(selector){
    this.els = document.querySelectorAll(selector);
    this.eventHandlers = {};
}

MyQuery.prototype.on = function(){
    /* ... */
};

function $(selector){
    return new MyQuery(selector);
}
