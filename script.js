let todolist = document.querySelector("#todolist");

todolist.addEventListener("submit" , addItem);
function addItem(e) {
    e.preventDefault();

    let data = this.elements.writeList.value;
    let list = document.querySelector("ol");
    let item = document.createElement("li");
    let text = document.createElement("p");

    text.textContent = data ;
    this.elements.writeList.value = "";
    item.appendChild(text);
    list.appendChild(item);

    let removeBtn = document.createElement("span");
    removeBtn.classList.add("remove");
    item.appendChild(removeBtn);
    removeBtn.addEventListener("click" , deleteItem);

    item.addEventListener("click" , doneItem);
}

function deleteItem(e) {
    this.parentElement.remove();
}

function doneItem(e) {
    this.classList.toggle("done");
}
