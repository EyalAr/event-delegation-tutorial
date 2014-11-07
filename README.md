# Events Delegation Interactive Repo

## Step 9 - A Generic Event Delegation Framework

Our goal is to build a framework which allows us to:

0. Select elements
0. Delegate events to selected elements

(Just like jQuery works)

Let's define a jQuery-like syntax of what we want to do:

```Javascript
var foo = $("#foo"),
    bar = $("#bar");

foo.on('click', 'div.hello', helloOnClick);
bar.on('click', 'div.world', worldOnClick);
```

First, we select an element (`$("#foo")` selects the `#foo` DIV). Then, we add a delegated event to this element. `foo.on('click', 'div.hello', helloOnClick)` adds a click event to every child DIV element with class `.hello` and delegates it to `#foo`.

The basis of our framework will be an object which represents selected DOM elements. Let's define its constructor:

```Javascript
// constructor
function MyQuery(selector){
    this.els = document.querySelectorAll(selector);
}
```

This object should have an `on` method as described above:

```Javascript
MyQuery.prototype.on = function(){
    /* ... */
};
```

We will implement this method later.

Finally, we want to have the `$` function create this kind of object for us:

```Javascript
function $(selector){
    return new MyQuery(selector);
}
```

In the next steps we will build the `on` method.

__Continue to [step-10](../../tree/step-10).__
