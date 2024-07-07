/*
DOM Inheritance

From js perspective every entity is an Object Type.

Object: {
    EventTarget: {
        // implements event methods for objects like addEventListener()
    
        Node: {
            // Node is abstract i can't call any Node directly eg: document.parentNode is null but Node provides some props and methods to navigate and change dom tree.
            // Each Node has own type: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType 

            Document: {
// provides access to entire document like doctype, html, head, body, title, etc.
                https://developer.mozilla.org/en-US/docs/Web/API/Document

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree
                https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
            }

            Element: {
                // Element provides props and methods for html, xml, svg, etc.
                 
                HTMLElement: {
                    HTML{Tag}Element: {
                        // eg: HTMLInputElement
                    }
                }
            }
        }

        Window: {
            https://developer.mozilla.org/en-US/docs/Web/API/Window
        }
    }
}


EventTarget, Node, Element, HTMLElement, HTMLInputElement https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
https://uk.javascript.info/basic-dom-node-properties
*/
