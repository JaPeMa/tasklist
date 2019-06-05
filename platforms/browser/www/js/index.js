function addElement() {
    var list = document.getElementById("list");
    var text = document.getElementById("taskToAdd").value;
    var li = document.createElement("li");
    var buttonToDeleteElement = document.createElement("button");
    buttonToDeleteElement.setAttribute("type", "button");
    buttonToDeleteElement.setAttribute("onclick", "deleteElementFromList(this)");
    buttonToDeleteElement.appendChild(document.createTextNode("delete"));
    li.appendChild(document.createTextNode(text));
    li.appendChild(buttonToDeleteElement);
    list.appendChild(li);
}

function deleteElementFromList(button) {
    console.log(button.parentElement);
}