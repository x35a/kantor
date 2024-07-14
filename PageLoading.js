/*
DOMContentLoaded event
document.addEventListener("DOMContentLoaded", (event) => {});
fires when dom is ready. 
dom ready usecase - all page elements can be accessed from js if dom is ready.

DOMContentLoaded doesn't wait for: imgs, styles, async scripts.

steps before dom ready event:
blocking scripts // inline scripts and src scripts are loaded and executed
defer and module scripts are loaded and executed
defer scripts are waiting for styles loaded,so DOMContentLoaded must wait for styles 
if there are styles before inline or src scripts (blocking scripts) they must wait for styles loaded. // https://uk.javascript.info/onload-ondomcontentloaded#domcontentloaded-ta-stili
dom is ready // all elements can be accessed


DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. 
Also, scripts which aren't deferred or async (e.g. <script>) will wait for already-parsed stylesheets to load.
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event


blocking scripts:
inline scripts
src scripts

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