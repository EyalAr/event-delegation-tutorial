# Events Delegation Interactive Repo

## Step 11 - A Generic Event Delegation Framework

The `initGlobalHandler` function is called only one time - on the first time we delegate an event of a certain type on our `MyQuery` object. This function needs initialize each of the DOM elements selected by our `MyQuery` object:

0. Create a global events handling function for the element.
0. Add an event listener for the element with the created function.

```Javascript
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
```

Now, every time an event is triggered on one of the elements selected by our `MyQuery` object; the global handling function (which was created with `gHandler(el)`) will be called.

The last remaining step is to define how this function works.

__Continue to [step-12](../../tree/step-12).__
