console.log('frontEnd is working activly ');
function itemTemplate(item){
    return `<li
class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
<span class="item-text">${item.reja}</span>
<div> 
    <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
    <button data-id="${item._id}" class="delete-me btn btn danger btn-sm">Ochirish</button>
</div>
</li>`;
}

let createField = document.getElementById("create-Field");
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const createField = document.getElementById("create-field"); // Make sure this ID exists

    axios.post("/create-item", { reja: createField.value })
        .then((response) => {
            document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = '';
            createField.focus();
        })
        .catch((err) => {
            console.log("pls, try again");
        });
});

// Debugging Click Events
document.addEventListener("click", function (e) {
    console.log(e);
    if(e.target.classList.contains("delete-me")) {
        alert('You clicked the button delete');
    }
    if(e.target.classList.contains("edit-me")) {
        alert('You clicked the button change')
    }
});
