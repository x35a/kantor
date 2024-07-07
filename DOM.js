/*
DOM Inheritance

From js perspective every entity is an Object Type.

Object: {
    EventTarget: {
        Node: {
            // Node (and Element) is not only for html but for xml, svg, etc. 
            // Each Node has own type: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType 

            Element: {
                HTMLElement: {
                    HTML{Tag}Element: {
                        // eg: HTMLInputElement
                    }
                }
            }
        }
    }
}


https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
https://uk.javascript.info/basic-dom-node-properties
*/
