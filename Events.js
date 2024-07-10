/*
How to add event handlers:
https://uk.javascript.info/introduction-browser-events#vikoristannya-atributa-html

1 in tag attribute 
<p onclick="dosmth()">
browser wraps onclick code in self run function so we need to run dosmth explicitly. https://uk.javascript.info/introduction-browser-events#poshireni-pomilki

2 in element dom object prop
element.onclick = function () {...}
-- can't add many onclick on single element cause there's only one onclick prop in element.
elem.onclick = null // remove

3 addEventListener
removeEventListener
++ support many handlers on same event on same element.
thera some events that can be handled using addEventListener only.


Event object

There are many events like click, input, keydown etc.
There are some event groups in mdn like: Device Orientation Events, Pointer Events, Server Sent Events, Touch Events, UI Events
Search 'events' word here https://developer.mozilla.org/en-US/docs/Web/API to found event groups.

Each tag has some events like click etc. The list of events it has depend on its dom interface (eg HTMLInputElement) and what dom interfaces it inherits, see dom interface inheritance.
Methods like addEventListener(), removeEventListener(), dispatchEvent() come from EventTarget which is a root dom interface. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

When event happens and eventhandler function runs, the handler function gets Event object as its argument. // eventHandler (event) {...}
Event object passed automatically and it has props about this event like event.type etc.
https://uk.javascript.info/introduction-browser-events#obyekt-podiyi
https://developer.mozilla.org/en-US/docs/Web/API/Event
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects

What is inside Event object?
There are many props inside Event object that describe event but they are not always the same.
List of props depend on type of event (eg click) and what event interfaces this event inherits.
For example this is inheritance chain for click event. It looks similar to dom inheritance chain.
Event < UIEvent < MouseEvent < PointerEvent
https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
List of Event interfaces is here https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event
Each Event interface provide some props and methods and depends on what type of event happend the event inherits some Event interfaces with theirs props and methods.


Bubbling
https://uk.javascript.info/bubbling-and-capturing

form > div > p
if click happens on p elements then click event happens on p element then on div then on form and up to document - it is bubbling.
it doen't matter if elements have event listeners or hadlers, click event fires and bubbling every time the click happens.
to catch the click event we add eventListener and handlers to do smth on this event.
if div and form have on click listener and some handlers then listeners fire and handlers run if click happed on p element no matter does p have on click listener on not.

event.target // reference to the object to which the event was originally dispatched. (returns element who has fired event)
this (= event.currentTarget) // it is an object of the current element who has gotten some event
event.currentTarget may not be the same as event.target
eg: if click happend on p then it comes to form elem so from form handler persteptive event.currentTarget is form and event.target is p. 
https://uk.javascript.info/bubbling-and-capturing#event-target
https://developer.mozilla.org/en-US/docs/Web/API/Event/target

*/