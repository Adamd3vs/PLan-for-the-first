
console.log('frontEnd is working activly ');


    


function itemTemplate(item) {
return `<li
class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
<span class="item-text">${item.reja}</span>
<div> 
    <button type=submit data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">edit</button>
    <button type=submit  data-id="${item._id}" class="delete-me btn btn-danger btn-sm">delete</button>
</div> 
</li>`;}
let createField = document.getElementById("create-field");
let form = document.querySelector(".create-form"); // ✅ Fixed typo here

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!createField.value.trim()) {
      console.warn("Input is empty!");
      return;
    }

    axios
      .post("/create-item", { reja: createField.value })
      .then((response) => {
        if (response.data) {
          document
            .getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));

          createField.value = ""; // Clear input field
          createField.focus();
        } else {
          console.error("Server returned empty response.");
        }
      })
      .catch((err) => {
        console.error("Iltimos, qaytadan harakat qiling!", err);
      });
  });
} else {
  console.error("Form not found! Check if the class name is correct.");
}

document.addEventListener("click", function (e) {
  // delete operation
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")) {
      axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again");
        });
    }
  }

  // edit operation
  if (e.target.classList.contains("edit-me")) {
    let userinput = prompt("enter your change",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if (userinput) {
      axios.post("/edit-item", {id: e.target.getAttribute("data-id"),
        new_input:userinput,
      }).then(response=> {
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML= userinput; 
      }).catch(err => {
        console.log("pls try again");

      })
    }
    // Add your edit logic here
  }
});

document.getElementById("clean-all").addEventListener("click", function(){
  axios.post("/delete-all", {delete_all: true}).then(response => {
    alert(response.data.state);
    document.location.reload();
  })
})