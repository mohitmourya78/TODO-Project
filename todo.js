function loadListItems() {
    const savedItems = localStorage.getItem("savedItems");
    if (savedItems) {
        document.getElementById("list").innerHTML = savedItems;
    }
}

window.addEventListener("load", loadListItems);

function saveListItems() {
    const listItemsHTML = document.getElementById("list").innerHTML;
    localStorage.setItem("savedItems", listItemsHTML);
}


function listprint() {
    let li = document.getElementById("list")
    const listitem = document.getElementById("listitem").value;
    var input = document.getElementById("listitem");

    if (listitem === "") {
        input.placeholder ="Please enter the valid item";
        input.classList.add("placeholder-red"); 
        return;
    } else {
        input.placeholder = "Enter the item"; 
        input.classList.remove("placeholder-red"); 
    }

    document.getElementById("warningMessage").style.display = "none";

    var listItemContainer = document.createElement("div");
    listItemContainer.classList.add("listitemcontainer");



    var numlistItem = document.createElement("li");
    numlistItem.textContent = listitem;
    listItemContainer.appendChild(numlistItem);

    let btn = document.createElement("button");
    let txt = document.createTextNode("Remove me");
    btn.append(txt);
    listItemContainer.append(btn);
    btn.classList.add("myrmvbtn");
    btn.addEventListener("click", function () {
        li.removeChild(listItemContainer)
        saveListItems();
    });

    li.appendChild(listItemContainer);
    document.getElementById("listitem").value = "";

    saveListItems();
}


document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.classList.contains("myrmvbtn")) {
        const listItemContainer = event.target.parentNode;
        const li = listItemContainer.parentNode;
        li.removeChild(listItemContainer);
        saveListItems(); 
    }
});




var input = document.getElementById("listitem");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myaddbtn").click();
    }
});

document.body.addEventListener("click", function(event) {
    if (event.target !== input && event.target !== myaddbtn) {
        input.placeholder = "Enter the item";
        input.classList.remove("placeholder-red");
    }
});






