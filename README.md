# Events Delegation Interactive Repo

## Step 2 - Adding Simple DOM Events

The first step in adding DOM events is finding the DOM elements we need:

```Javascript
var helloDiv = document.querySelectorAll("div#foo div")[0],
    worldDiv = document.querySelectorAll("div#bar div")[0];
```

Then adding the events is as simple as:

```Javascript
helloDiv.addEventListener('click', helloOnClick);
worldDiv.addEventListener('click', worldOnClick);
```

When `helloDiv` is clicked, we should hear one beep:

```Javascript
function helloOnClick(){ 
    beep(); 
}
```

and When `worldDiv` is clicked, we should hear two beeps:

```Javascript
function worldOnClick(){ 
    beep();
    setTimeout(beep, 200);
}
```

![preview](assets/2.gif)

That's great. Now let's see what happens when we manually add a new `"Hello"`
DIV element.

__Continue to [step-3](../../tree/step-3).__
