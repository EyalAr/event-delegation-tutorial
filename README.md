# Events Delegation Interactive Repo

## Step 8 - A Generic Event Delegation Solution

The `delegateEvent` function should:

0. Add an event to the parent element.
0. Every time the event occurs, check the target and see if it matches a desired child element.
0. Run the handler if such an element is found.

```Javascript
function delegateEvent(parent, type, selector, handler){
    parent.addEventListener(type, function(e){
        var target = e.target,
            els = parent.querySelectorAll(selector),
            i;
        for (i = 0; i < els.length; i++){
            if (els[i] === target){
                handler(e);
                break;
            }
        }
    });
}
```

Let's try to use it:

```Javascript
delegateEvent(foo, 'click', 'div.hello', helloOnClick);
delegateEvent(bar, 'click', 'div.world', worldOnClick);
```

![preview](assets/8.gif)

It works! Now we have a generic function with which we can delegate any event to any parent element. That's great. But what if our parent element has many types of children elements? And what if each type requires a different handler? This means we have to add all those event handlers to our single parent element, which may not be very efficient.

What if we could add just one global handler to our parent element for every event type? One global handler which will manage delegation of all events of a certain type.

We will have one handler for `click` events, one handler for `mouseenter` events, etc.

Let's build the framework for this in the next few steps.

__Continue to [step-9](../../tree/step-9).__
