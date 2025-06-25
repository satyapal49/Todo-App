let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Event listener for input field
btn.addEventListener("click", function(event) {
    event.stopPropagation();
    let li = document.createElement("li");
    li.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");
    

    li.appendChild(dltBtn);
    ul.appendChild(li);
    inp.value = "";

let delbtns = document.querySelectorAll(".delete");
for (del of delbtns) {
    del.addEventListener("click", function(event) {
        event.stopPropagation();
        let par = this.parentElement;
        par.remove();
        console.log("Delete button clicked");
    });
    }


});

