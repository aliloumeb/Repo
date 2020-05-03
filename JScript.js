var button = document.querySelector("#enter");
var input = document.querySelector("input");
var itemsList = document.querySelector("ul");

// Adding an Item function
function addItem () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    itemsList.appendChild(li);
    input.value = "";
// Removing Item function
    function remItem () {
        li.style.display="none";
    }
    deleteButton.addEventListener("click",remItem);
    // Mark as done function
    function done () {
      li.classList.toggle("done")
    }
    li.addEventListener("click",done);
}

//Make sure the input isn't empty
function enterItem () {
    if (input.value.length != 0) {
      addItem();
    }
    else {
      alert("Please Enter an Item");
    }
}
button.addEventListener("click",enterItem);
