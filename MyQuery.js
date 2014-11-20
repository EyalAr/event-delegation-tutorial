function MyQuery(selector){
    this.els = Array.prototype.slice.call(
        document.querySelectorAll(selector)
    );
    this.eventHandlers = {};
}

MyQuery.prototype.on = function(type, selector, handler){

    if (!this.eventHandlers[type]){
        initGlobalHandler.call(this, type);
        this.eventHandlers[type] = [];
    }

    this.eventHandlers[type].push({
        selector: selector,
        handler: handler
    });

};

function initGlobalHandler(type){
    var i, el;

    for(i = 0; i < this.els.length; i++){
        el = this.els[i];
        el.addEventListener(type, gHandler(el));
    }

    // generate a global handler function
    // for the root element 'el'.
    function gHandler(root){
        return function(e){ /* ... */ };
    }
}

function $(selector){
    return new MyQuery(selector);
}
