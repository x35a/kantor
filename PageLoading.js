/*
# DOMContentLoaded event
document.addEventListener("DOMContentLoaded", (event) => {});

fires when dom is ready. 
usecase - all page elements can be accessed from js if dom is ready.

DOMContentLoaded doesn't wait for: imgs, styles, async scripts.

https://uk.javascript.info/onload-ondomcontentloaded#domcontentloaded
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

steps before DOMContentLoaded event:
> inline scripts and src scripts are loaded and executed.
https://uk.javascript.info/script-async-defer
> if there are styles before inline or src scripts then DOMContentLoaded must wait for styles loaded.
https://uk.javascript.info/onload-ondomcontentloaded#domcontentloaded-ta-stili
> defer and module scripts are loaded and executed.
> defer scripts are waiting for styles loaded, so DOMContentLoaded must wait for styles if there is defer script in the document.
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// gemini says defer script could be executed after DOMContentLoaded - test needed.

DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. 
Also, scripts which aren't deferred or async (e.g. <script>) will wait for already-parsed stylesheets to load.
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event


# Scripts in the document
do: test styles + scripts on diff positions in the document.

blocking scripts:
inline scripts
src scripts

none blocking:
script defer
script async
inserted scripts // document.createElement('script')
https://uk.javascript.info/script-async-defer#dinamichni-skripti
https://uk.javascript.info/onload-onerror#zavantazhennya-skripta


# load event
fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

window.addEventListener("load", (event) => {console.log("page is fully loaded")});

https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
https://uk.javascript.info/onload-ondomcontentloaded#window-onload

btw, load event also fires on most element ls that have src like img, script, style, etc.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/load_event
https://uk.javascript.info/onload-onerror#zavantazhennya-skripta


# document.readyState
values:
loading // dom is not ready 
interactive // dom is ready but scripts, styles, images are not. equal to DOMContentLoaded event.
complete // everything is loaded. equal to load event.

document.readyState can check document state at any time.

https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

readystatechange event
document.addEventListener('readystatechange', (event) => {console.log(document.readyState)})
fires each time when document changes it state.

https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event
https://uk.javascript.info/onload-ondomcontentloaded#readystate
*/