/*
DOM Inheritance

> Each part of xml/html/svg file content (tags, attrs, text inside tag, comments, whitespaces, line breaks, etc) converts into Node entity then Nodes composing into tree structure.
> Each Node has on of the Node Type.

> Each tag is js object with own props and methods.
> Each tag object inherits other dom objects and this creates inheritance chain like:
> EventTarget > Node > Element > HTMLElement > HTMLInputElement https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
> Dom objects are abstracts so we can't call them directly but they provide some prop, methods, events to navigate and manipulate any part of file content, 
> after that "real" object like tag object inherits dom objects with their props and methods. 
> Why dom objects? - dom is a general idea about how to represent documents (eg xml/html/svg) thats why for example Node is an abstract that is not direct equivalent to html tag.


> 
> Text inside tag, comments, etc are also objectes, they inherit dom objects and have theie own Node Type.
> So DOM tree is a bunch of nested objects and each one inherits abstract dom objects.


> Document provides access to all content in xml/html/svg file. Document is a type of Node. 

https://uk.javascript.info/dom-nodes
https://uk.javascript.info/basic-dom-node-properties


Object: {
    // regular object

    EventTarget: {
        // implements event methods for objects like addEventListener()
    
        Node: {
            // Node is abstract i can't call any Node directly eg: document.parentNode is null but Node provides some props and methods to navigate and change dom tree.
            // Each Node has type, node types: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
            // document.nodeType // to check node type

            DocumentType: {
                // DocumentType is a type of Node
                // represents doctype https://developer.mozilla.org/en-US/docs/Web/API/DocumentType
            }

            Document: {
                // document is a type of Node 
                // document is API to access each line of the document like tags, comments, bare text, whitespaces, line breaks, etc.

                https://developer.mozilla.org/en-US/docs/Web/API/Document
                https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree
                https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

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
