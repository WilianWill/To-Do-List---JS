/* get fields */
let $task_input = document.querySelector("#task_input");
let $add_task_button = document.querySelector("#add_task_button");
let $ul_items = document.querySelector(".ul_items");

/* create dialog */
let dialog = document.createElement("dialog");

const closeModal = () => {
  dialog.querySelector(".close_dialog").addEventListener("click", () => {
    dialog.close();
    document.body.removeChild(dialog);
  });
};

const add_task = () => {
  $add_task_button.addEventListener("click", () => {
    /* get values */
    let li = document.createElement("li");
    let task_input_value = $task_input.value;

    if (task_input_value === "") {
      /* create dialog box */
      dialog.innerHTML = `
        <h1>The task field is empty</h1>
        <button class="close_dialog">Close</button>
      `;

      document.body.appendChild(dialog);
      dialog.showModal();
      closeModal();
    } else {
      /* add list items */
      $ul_items.style.display = "block";
      li.innerHTML = `
        <span class="task_text">${task_input_value}</span>   
        <span>
          <button class="remove_btn">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="edit_btn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </span> 
      `;

      $ul_items.appendChild(li);

      /* create task button events */
      li.querySelector(".remove_btn").addEventListener("click", () => {
        li.remove();
      });

      li.querySelector(".edit_btn").addEventListener("click", () => {
        let editTask = prompt("Edit your task here");
        if (editTask !== "") {
          li.querySelector(".task_text").innerHTML = editTask;
        }
      });

      /* clear input */
      $task_input.value = "";
      $ul_items.style.display = "block";
    }
  });
};

/* show tasks feature */
const show_task_btn = document.querySelector("#show_tasks");
const eyeIcon = document.querySelector("#eye");

show_task_btn.addEventListener("click", (e) => {
  if ($ul_items.innerHTML.trim() === "") {
    dialog.innerHTML = `
      <h3>The Task not found, first add one Task</h3>
      <button class="close_dialog">Close</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
    closeModal();
    console.log(e);
  }

  /*
    includes(....)
    verifica se contem um determinado valor na string
  */

  if (e.target.className.includes("fa-eye-slash")) {
    eyeIcon.className = "fa-regular fa-eye";
  } else {
    eyeIcon.className = "fa-regular fa-eye-slash";
  }

  $ul_items.style.display =
    $ul_items.style.display === "block" ? "none" : "block";
});

add_task();
