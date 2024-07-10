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
removeEventListener // needs same handler function and params to get work https://uk.javascript.info/bubbling-and-capturing#zanurennya 
++ support many handlers on same event on same element.
thera some events that can be handled using addEventListener only.
about passive: true param https://uk.javascript.info/default-browser-action#opciya-pasivnogo-obrobnika


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


Bubbling phase
https://uk.javascript.info/bubbling-and-capturing

form > div > p
if click happens on p elements then click event happens on p element then on div then on form and up to Window - it is bubbling. https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase#event.bubbling_phase_3
it doen't matter if elements have event listeners or hadlers, click event fires and bubbling every time the click happens.
to catch the click event we add eventListener and handlers to do smth on this event.
if div and form have on click listener and some handlers then listeners fire and handlers run if click happed on p element no matter does p have on click listener on not.

event.target // reference to the object to which the event was originally dispatched. (returns element who has fired event)
this (= event.currentTarget) // it is an object of the current element who has gotten some event
event.currentTarget may not be the same as event.target
eg: if click happend on p then it comes to form elem so from form handler persteptive event.currentTarget is form and event.target is p. 
https://uk.javascript.info/bubbling-and-capturing#event-target
https://developer.mozilla.org/en-US/docs/Web/API/Event/target

event.stopPropagation() // stops bubbling and cupture phase on current listener
event.stopImmediatePropagation() // stops bubbling and cupture phase on all listeners
https://uk.javascript.info/bubbling-and-capturing#pripinennya-splivannya


Capture phase
Runs before Bubbling phase.
Starts from Window to target element.
event.eventPhase // indicates which phase of the event flow is currently being evaluated. https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase#event.capturing_phase_1
https://uk.javascript.info/bubbling-and-capturing#zanurennya


Event delegation
the idea behind is to put one listener on the root element of ui component and handle all events inside the component using one listener.
https://uk.javascript.info/event-delegation
 
few examples how to add event listener that will work even if remove element and then add it again.
https://uk.javascript.info/event-delegation#priklad-deleguvannya-diyi-v-rozmitci
https://uk.javascript.info/event-delegation#shablon-povedinki
https://uk.javascript.info/event-delegation#povedinka-peremikach


Browser default actions
https://uk.javascript.info/default-browser-action

event.preventDefault() // prevent browser defualt actions like form submit etc.

if event is set using on<event> (in html or dom prop) then use 'return false' in handler function to stop default action.

event.defaultPrevented // true indicates that the default action was prevented, and false indicates that it was not.
https://uk.javascript.info/default-browser-action#event-defaultprevented
https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented


Custom events
https://uk.javascript.info/dispatch-events

let event = new Event(type, options) // create custom event https://developer.mozilla.org/en-US/docs/Web/API/Event/Event

document.addEventListener("hello", function(event) {...})
let helloEvent = new Event("hello", {bubbles: true})
element.dispatchEvent(helloEvent) // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

event.isTrusted // true when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), 
and false when the event was dispatched via EventTarget.dispatchEvent(). https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted

let event = new CustomEvent(type, options) // same as new Event the diff is options can hace detail prop with arbitary data like detail: { name: "ololo" }
https://uk.javascript.info/dispatch-events#koristuvacki-podiyi
https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

info about how to add own props into event interfaces. it is not clear about usecases, need research https://uk.javascript.info/dispatch-events#mouseevent-keyboardevent-ta-inshi


*/