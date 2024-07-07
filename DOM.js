/*
DOM Inheritance

From js perspective every entity is an Object Type.

Object: {

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
                // abstract represents a Node object that contains characters https://developer.mozilla.org/en-US/docs/Web/API/CharacterData

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


https://uk.javascript.info/dom-nodes
https://uk.javascript.info/basic-dom-node-properties
*/
