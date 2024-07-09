/*
How to add event handlers:

1 in tag attribute 
<p onclick="dosmth()">
brauser wraps onclick code in self run function so we need to run dosmth explicitly.

2 in element dom object prop
element.onclick = function () {...}
-- can't add many onclick on single element cause there's only one onclick prop in element.
elem.onclick = null // remove

3 addEventListener

https://uk.javascript.info/introduction-browser-events
*/