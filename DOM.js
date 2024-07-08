/*
DOM interface inheritance

> Each tag is js object with own props and methods.
> Each tag object inherits dom interfaces and this creates inheritance chain like:
> EventTarget > Node > Element > HTMLElement > HTMLInputElement https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
> Each item in the chain is a dom interface.
> Technically dom interfaces are objects with some props and methods but some of them are abstract it means i can't call object directly if it is abstract.
> Why dom interfaces? - 
> -- dom is a general idea about how to represent documents (eg xml/html/svg) so they had to create some abstract general model first to describe any part of the content in file,
> thats why for example Node is an abstract that is not direct equivalent to html tag. whereas tags have theire own interfaces and these interfaces inherit Node interface.
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
> -- dom interfaces (eg Node or Document) provide props, methods, events to navigate and manipulate any part of file content.
> While parsing xml/html/svg file, each part of the file content (like: tags, attrs, text inside tag, comments, whitespaces, line breaks, etc) converts into object.
> Each object gets its dom interface eg HTMLInputElement for input or Text interface for text inside tag, etc.
dom interfaces https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces extended by html dom intefaces https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_dom_api_interfaces
> Depends on what interface object have it inherits some other interfaces, eg Text interface inherits Node inteface, thats how an object that represents just a text doesn't have props and methods that input tag has.
> Node inteface has types. Each Node has it own Type. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
> So DOM tree is a bunch of nested objects. Each object has its interface and inherits some other dom interfaces.

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

https://uk.javascript.info/dom-nodes
https://uk.javascript.info/basic-dom-node-properties


Document

> From js perspective document is api entry point to access all the content in xml/html/svg file.
> Document interface is a type of Node. 

https://developer.mozilla.org/en-US/docs/Web/API/Document
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree


Object: {
    // regular object

    EventTarget: {
        // implements event methods for objects like addEventListener()
    
        Node: {
            // Node is abstract i can't call any Node directly eg: document.parentNode is null but Node provides some props and methods to navigate through dom tree.
            // Each Node has type, node types: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
            // document.nodeType // to check node type

            DocumentType: {
                // DocumentType is a type of Node
                // represents doctype https://developer.mozilla.org/en-US/docs/Web/API/DocumentType
            }

            Document: {
                // document is a type of Node 
                // document is API to access each line of the document like tags, comments, bare text, whitespaces, line breaks, etc.

                document.doctype // doctype (Node type: DocumentType)
                document.documentElement // html tag
                document.head // head tag
            }

            Element: {
                // is a type of Node 
                // Element provides props and methods for html, xml, svg, etc.
                 
                HTMLElement: {
                    HTML{Tag}Element: {
                        // eg: HTMLInputElement
                        // chain EventTarget > Node > Element > HTMLElement > HTMLInputElement https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
                    }
                }
            }

            Attribute: {
                // is a type of Node
                // Attr https://developer.mozilla.org/en-US/docs/Web/API/Attr
            }

            CharacterData: {
                // is abstract, it represents a Node object that contains characters https://developer.mozilla.org/en-US/docs/Web/API/CharacterData

                Text: {
                    // is a type of Node
                    https://developer.mozilla.org/en-US/docs/Web/API/Text
                }
                Comment: {
                    // is a type of Node
                    https://developer.mozilla.org/en-US/docs/Web/API/Comment
                }
            }
        }

        Window: {
            https://developer.mozilla.org/en-US/docs/Web/API/Window

            window.HTMLDocument is alias on for Document for historical reasons https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument
            https://uk.javascript.info/basic-dom-node-properties
        }
    }
}
*/


/*
CSS

CSSStyleDeclaration
interface that represents a list of element's css rules
https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

How to call CSSStyleDeclaration:

1 element.style
returns list of INLINE css rules of the element. if element doesn't have inline styles it returns css rules with empty values.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

element.style.{cssProp} = val // set css prop value
it is recomended to set styles dynamically using this method. https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle#description

elem.style.display = "" // reset css prop value
A style declaration is reset by setting it to null or an empty string, e.g., elt.style.color = null. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
https://uk.javascript.info/styles-and-classes#skidannya-vlastivosti-v-elem-style


2 window.getComputedStyle(element, pseudoElt)
returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.
should be used to inspect the element's style — including those set by a <style> element or an external stylesheet.
https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 

element.classList // get/add/remove classes
https://uk.javascript.info/styles-and-classes#classname-ta-classlist
*/