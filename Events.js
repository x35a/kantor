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


Events have similar inheritance chain for example click:
Event < UIEvent < MouseEvent < PointerEvent
https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

Event
this object is passing into handler function when event happens.
https://developer.mozilla.org/en-US/docs/Web/API/Event

https://uk.javascript.info/introduction-browser-events
*/