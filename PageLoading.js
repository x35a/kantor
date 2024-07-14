/*
DOMContentLoaded
document.addEventListener("DOMContentLoaded", (event) => {});

fires when:
dom is ready // all elements can be accessed 


not waiting for:
imgs, styles

blocking scripts:
inline script
script src

none blocking:
script defer
script async
inserted scripts // document.createElement('script')


https://uk.javascript.info/onload-ondomcontentloaded#domcontentloaded
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

document.readyState
values:
loading // dom is not ready 
interactive // dom is ready but scripts, styles, images are not 
complete // everything is loaded 

document.readyState can check document state at any time.

https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

readystatechange event
document.addEventListener('readystatechange', (event) => {console.log(document.readyState)})
fires each time when document changes it state.

https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event

https://uk.javascript.info/onload-ondomcontentloaded#readystate
*/