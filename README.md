# Events Delegation Interactive Repo

## Step 7 - A Generic Event Delegation Solution

A more scalable solution would allow us to delegate events to some parent element without us having to modify our handlers.

Let's propose a function `delegateEvent` which would be used as follows:

```Javascript
delegateEvent(foo, 'click', 'div.hello', helloOnClick);
delegateEvent(bar, 'click', 'div.world', worldOnClick);
```

The first line delegates a `click` event to the `foo` element and limits it only to clicks on DIV elements with a `.hello` class. Similarly, the second line delegates `click` events on DIV elements with a `.world` class to the `bar` element.

Let's implement this function in the next step.

__Continue to [step-8](../../tree/step-8).__
