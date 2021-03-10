function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);
    if (this.checked) {
        itemText.style.textDecoration = "line-through";
    } else {
        itemText.style.textDecoration = "none";
    }
}

function addNewItem(list, itemText) {
    var date = new Date();
    var id = "" + date.getMinutes(); + date.getSeconds() +
        date.getMilliseconds() + "";

    var listItem = document.createElement("li");
    listItem.id = "li_" + id;

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
}

var inItemText = document.getElementById("e");

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
    var inItemText = document.getElementById("inItemText");
    var itemText = inItemText.value;
    if (!itemText || itemText === "" || itemText === " ") {
        return false;
    }

    addNewItem(document.getElementById("todolist"), itemText);
};

inItemText.onkeyup = function(event) {
    if (event.which == 13) {
        var itemText = inItemText.value;

        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }

        addNewItem(document.getElementById("todolist"), itemText);
        inItemText.focus();
        inItemText.select();
    }
};