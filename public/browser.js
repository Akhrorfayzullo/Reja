console.log("Browser js is working");

function itemTemplate(item) {
  return `<li style="margin-bottom: 4px;"
    class="list-group-item list-group-item-info align-items-center d-flex justify-content-between">
    <span class="item-text">
        ${item.reja}
    </span>
    <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary"
            style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">Edit</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger"
            style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">
            delete
        </button>
    </div>
</li>`;
}

const createForm = document.getElementById("create-form");
let createField = document.getElementById("create-field");

createForm.addEventListener("submit", (event) => {

  event.preventDefault();
  if (createField.value.trim() === "") {
    alert("Please enter a reja before submitting.");
    createField.focus();
    return; // stop here
  }
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      //   console.log("DATA: ", response);

      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try one more time: ", err.message);
    });
});

document.addEventListener("click", function (event) {
  // delete
  if (event.target.classList.contains("delete-me")) {
    // console.log(e.target);
    if (confirm("Aniq ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: event.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Qayta urining", err);
        });
    }
  }

  // edit button
  if (event.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Inputni ozgartiring",
      event.target.parentElement.parentElement
        .querySelector(".item-text")
        .innerHTML.trim()
    );

    if (userInput) {
      axios
        .post("/edit-item", {
          id: event.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);

          event.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("smth went wrong");
        });
    }
  }
  // Delete all
  document.getElementById("delete-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
      // alert(response.data.state);
      document.location.reload();
    });
  });
});
