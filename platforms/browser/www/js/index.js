var textList = [];

function addElement(textToCreate) {
    var list = document.getElementById("list");
    if (textToCreate) {
        var text = textToCreate;
        console.log(text)
    } else {
        var text = document.getElementById("taskToAdd").value;
        console.log(text)
        textList.push(text);
    }
    
    
    localStorage.setItem("textList", JSON.stringify(textList));
    var li = document.createElement("li");
    li.setAttribute("text", text);
    var buttonToDeleteElement = document.createElement("button");
    buttonToDeleteElement.setAttribute("type", "button");
    buttonToDeleteElement.setAttribute("onclick", "deleteElementFromList(this)");
    buttonToDeleteElement.appendChild(document.createTextNode("delete"));
    li.appendChild(document.createTextNode(text));
    li.appendChild(buttonToDeleteElement);
    list.appendChild(li);
}

function deleteElementFromList(button) {
    textList = textList.filter(function(value, index, arr){
        return button.parentNode.getAttribute('text') !== value;
    });
    console.log(textList);
    localStorage.setItem("textList", JSON.stringify(textList));
    document.getElementById("list").removeChild(button.parentNode);
}

window.onload = function chargeList() {
    textList = JSON.parse(localStorage.getItem("textList"));
    if (textList){
        for (let txt of textList) {
            addElement(txt);
        }
    } else {
        textList = [];
    }

}