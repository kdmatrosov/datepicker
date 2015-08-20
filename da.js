/*created by Ivan Kamenkov*/
var domAssistant = (function(){
    var elementsStack = [];
    var elementsCount = 0;

    //TODO: in jQUery object, $ is array itself.
    //We need to remove elementsStack, make Array object the assistants prototype and append elements to assistant

    function assistant(tagName){
        elementsStack = [];
        elementsCount = 1;

        if (typeof tagName == "string")
            elementsStack[0] = document.createElement(tagName);
        else
            elementsStack[0] = tagName;

        return assistant;
    }

    assistant.createByTag = function(){
        elementsStack[0] = (document.createElement(tagName));
        return this;
    };

    assistant.appendChild = function(element, content){
        var newElement = document.createElement(element);
        if (content)
            newElement.innerHTML = content;
        elementsStack[0].appendChild(newElement);
        elementsStack.push(newElement);
        elementsCount++;

        return this;
    };

    assistant.lastNodeAppendChild = function(element, content){
        var newElement = document.createElement(element);
        if (content)
            newElement.innerHTML = content;
        elementsStack[elementsCount-1].appendChild(newElement);
        elementsStack.push(newElement);
        elementsCount++;

        return this;
    };

    assistant.removeChild = function(element){
        elementsStack[0].removeChild(element);
        return elementsStack[0].parentElement;
    };


    assistant.addClass = function(className){
        elementsStack[elementsCount-1].classList.add(className);
        return this;
    };

    assistant.removeClass = function(className){
        elementsStack[elementsCount-1].classList.remove(className);
        return this;
    };

    assistant.addAttribute = function(attributeName, attributeContent){
        elementsStack[elementsCount-1].setAttribute(attributeName, attributeContent);
        return this;
    };

    assistant.replace = function(targetElement){
        targetElement.parentNode.replaceChild(elementsStack[0],targetElement);
        return this;
    };

    assistant.get = function(last){
        if (last)
            return elementsStack[elementsCount-1];
        return elementsStack[0];
    };

    return assistant;
})();