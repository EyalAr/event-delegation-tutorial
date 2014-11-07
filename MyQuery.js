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
    /* ... */
}

function $(selector){
    return new MyQuery(selector);
}
