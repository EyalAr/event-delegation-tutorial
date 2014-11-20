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
    var self = this;
    function gHandler(root){

        // return an event handling function
        return function(event){

            var target = event.target,
                handlers = self.eventHandlers[type],
                i, j, selector, handler, els;

            for (i = 0; i < handlers.length; i++){

                selector = handlers[i].selector;
                handler = handlers[i].handler;

                // get all the child elements which match the
                // current selector
                els = root.querySelectorAll(selector);

                // check if one of them matches the target element
                for (j = 0; j < els.length; j++){
                    // if a match is found, call the respective handler
                    if (els[j] === target){
                        handler(event);
                        break;
                    }
                }

            }

        };

    }
}

function $(selector){
    return new MyQuery(selector);
}
