function listprint() {
    let li = document.getElementById("list")
    const listitem = document.getElementById("listitem").value;

    if (listitem === "") {
        document.getElementById("warningMessage").style.display = "flex";
        return;
    }

    document.getElementById("warningMessage").style.display = "none";

    var listItemContainer = document.createElement("div");
    listItemContainer.classList.add("listitemcontainer");
    listItemContainer.style.display = "flex";
    listItemContainer.style.justifyContent = "space-around";
    listItemContainer.style.alignItems = "center";




    var numlistItem = document.createElement("li");
    numlistItem.textContent = listitem;
    listItemContainer.appendChild(numlistItem);

    let btn = document.createElement("Button");
    let txt = document.createTextNode("Remove me");
    btn.append(txt);
    listItemContainer.append(btn);
    btn.classList.add("myrmvbtn");
    btn.addEventListener("click", function () {
        li.removeChild(listItemContainer)
    });

    li.appendChild(listItemContainer);
    document.getElementById("listitem").value = "";


}

var input = document.getElementById("listitem");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myaddbtn").click();
    }
});
