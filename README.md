# Events Delegation Interactive Repo

## Summary

Throughout this guide we saw different methods to handle events in our application. The simplest approach is to manually handle adding and removing events from our DOM elements. There is nothing wrong with it; and, in fact, this is how it was done when web applications were mainly composed of static HTML pages.

Today we develop dynamic web application, in which we manipulate the DOM by dynamically adding, moving and removing elements. Our pages can have thousand of elements which need to respond to user actions. We do this by adding events. Our elements have logic behind them, which depends on user choices and actions. This is mostly done by responding to events triggered by the user.

Instead of adding events to specific elements, it would be more elegant (and easier to manage) to add events based on an element's position in the DOM and its properties. We would like to say things like "if this element is the child of another element, and has a certain class; then it should have a 'click' event". This is much easier and more understandable than specifically adding a 'click' event when we create this element.

Fortunatelly, we have a great way to describe DOM elements - CSS selectors. CSS selectors provide us with a concise and understandable way to describe an element or a group of elements based on their position and properties. For example, the selector `'table#foo tr:nth-child(even)'` means "Select all table-row elements inside the "#foo" table, which are at an even position". Binding an event to all elements which match this description is much (much!) easier than actually writing JavaScript code which manually checks if the element is at an even position (if, for example, we add a row somewhere in the table, we have to check again all the rows after it).

So how do we actually link CSS selectors to events? The answer is event delegation.

All events will be delegated to one parent element. Each event handler we want to call will be associated with a CSS selector. Events are only added to the parent element. There, we will examine the target of the event (for example, when we click a table row, the event will be handled on the table itself, but the target is the row). If the target matches any of the registered selectors, we will call the handler function associated with this selector. Thus simulating adding the event to any child element which matches this selector; but without having to manually adding an event to each element.

This gives us the convenience of managing the logic of our application without the grunt work and performance impact of registered and managing thousands of events for thousands of DOM elements.

In steps 9-12 we implemented a framework based on these concepts. Those are the same principals by which actuall frameworks like jQuery work.

### Additional resources

0. [jQuery's `.on()` method docs](http://api.jquery.com/on/)
0. [Understanding Event Delegation](http://learn.jquery.com/events/event-delegation/) (jQuery's learning center)
0. [jQuery's event delegation source code](https://github.com/jquery/jquery/blob/0d5ec2d8ac94a419ee47a39319c43ff9a7326b50/src/event.js)
0. [Optimizing large selector sets](https://github.com/blog/1756-optimizing-large-selector-sets) (Github's blog post on improving performance of event delegation)
