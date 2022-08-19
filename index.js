

function createElementAndId (tagName, idValue, elementContent)
{
    const element = document.createElement(tagName);
    element.setAttribute("id", idValue);
    element.textContent = elementContent;
    //return element;
}

const main = document.getElementById("main");
main.remove();
const newHeader = createElementAndId("h1","victory", "Jake is the champion");
