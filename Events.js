/*
How to add event handlers:

1 in tag attribute 
<p onclick="dosmth()">
brawser wraps onclick code in self run function so we need to run dosmth explicitly.

2 in element dom object prop
element.onclick = function () {...}
-- can't add many onclick on single element cause there's only one onclick prop in element.
elem.onclick = null // remove

3 addEventListener
removeEventListener
++ support many handlers on same event on same element.
thera some events that can be handled using addEventListener only.


There are many event types like click, input, keydown etc.
There are some events groups in mdn like: 
Device Orientation Events, Pointer Events, Server Sent Events, Touch Events, UI Events
Search 'events' word here https://developer.mozilla.org/en-US/docs/Web/API to found event groups.

EventTarget
is a root dom interface that provides methods: addEventListener(), removeEventListener(), dispatchEvent()



Event
is an event object that is automatically passed as argument into handler function when event happens. it has some specific info about this event. // eventHandler (event) {...}
https://uk.javascript.info/introduction-browser-events#obyekt-podiyi
https://developer.mozilla.org/en-US/docs/Web/API/Event
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects


Events have similar inheritance chain for example click:
Event < UIEvent < MouseEvent < PointerEvent
https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

*/