/*
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