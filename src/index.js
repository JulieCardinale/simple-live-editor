/* === SIMPLE LIVE EDITOR ===========================================

To do :
Create a HTML live editor.                      => htmlGenerator

Steps :
1. Display default exemple.
2. User enter a text.
3. Text is interpreted as HTML.

Actions :
* We have to get from DOM *
> User input area                               => .editor__input
> Interpreted HTML area                         => .editor__result

* We have to listen *
> User input area                               => editorInput
> The document                                  => document

* We have to create those methods *
> Display default exemple.                      => displayExemple()
> Display user text as HTML                     => displayResult()

=================================================================== */

htmlGenerator = {

    init : function() {
        
        // DOM elements
        let editorInput = document.querySelector('.editor__input');

        // Events listeners
        editorInput.addEventListener('keyup', htmlGenerator.displayResult);
        document.addEventListener('DOMContentLoaded', htmlGenerator.displayExemple);  

    },

    // Display default exemple.
    displayExemple : function() {

        let editorResult = document.querySelector('.editor__result');
        editorInput = document.querySelector('.editor__input');
        editorInput.textContent = editorResult.innerHTML;

    },

    // Display user text as HTML
    displayResult : function(event) {

        let editorResult = document.querySelector('.editor__result');
        let editorInputValue = event.target.value;
        editorResult.innerHTML = editorInputValue;

    }

};

htmlGenerator.init();