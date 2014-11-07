# Events Delegation Interactive Repo

## Step 10 - A Generic Event Delegation Framework

Let's build the `on` method of our `MyQuery` object. This method delegates an event of a certain type to the `MyQuery` object; with a handler to be called when the event target matches a selector. It needs to do 2 simple things:

0. Initialize a global handler on the parent element for the event type when it's called for the first time.
0. Add an event handler to be called when the target matches the selector.

```Javascript
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
```

In the next step we will implement the `initGlobalHandler` function, which actually does the heavy lifting of handling delegated events.

__Continue to [step-11](../../tree/step-11).__
