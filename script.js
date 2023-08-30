const container = document.getElementById("container");
const form = document.querySelector("form");
const add_btn = document.getElementById("add_btn");
const close_modal = document.querySelector("dialog > svg");
const modal = document.getElementById("popup");
let lib = (JSON.parse(localStorage.getItem("lib"))) || [];
let remove_buttons = document.querySelectorAll(".remove_btn");
display_books();
updateRemoveButtons();

// Book constructor
function book(title, author, pg, read) {
  this.title = title;
  this.author = author;
  this.pg = pg;
  this.read = read;
  this.addtolib();
}

// Add prototype functions
book.prototype = {
  info: function () {
    return (this.title + " by " + this.author + ", " + this.pg + " pages, " +
      this.read);
  },
  addtolib: function () {
    lib.push(this);
  },
};

// Utility functions
function removefromlib(param) {
  lib.splice(lib.indexOf(param), 1);
}
function display_books() {
  container.innerText = "";
  lib.forEach((element) => {
    let newdiv = document.createElement("div");
    const bookname = document.createElement("h2");
    bookname.innerText = element.title;
    newdiv.appendChild(bookname);
    const author = document.createElement("h2");
    author.innerText = "-" + element.author;
    newdiv.appendChild(author);
    const pages = document.createElement("p");
    pages.innerText = "Pages: " + element.pg;
    newdiv.appendChild(pages);
    const read_btn = document.createElement("button");
    read_btn.classList.add("toggle");
    read_btn.innerText = "Read this";
    newdiv.appendChild(read_btn);
    const remove_btn = document.createElement("button");
    remove_btn.classList.add("remove_btn");
    remove_btn.innerText = "Remove";
    newdiv.appendChild(remove_btn);
    container.appendChild(newdiv);
    updateRemoveButtons();
  });
  addRemoveButtonListeners();
}
function updateRemoveButtons() {
  remove_buttons = document.querySelectorAll(".remove_btn");
}
function addRemoveButtonListeners() {
  remove_buttons.forEach((element) => {
    element.addEventListener("click", () => {
      lib.forEach((obj) => {
        console.log(obj);
        if (obj.title === element.parentNode.firstChild.innerText) {
          removefromlib(obj);
          display_books();
          updateRemoveButtons();
          localStorage.setItem("lib", JSON.stringify(lib));
        }
      });
    });
  });
}
// Event Listeners for popup
add_btn.addEventListener("click", () => {
  modal.showModal();
});
close_modal.addEventListener("click", () => {
  modal.close();
});

// Event listener for form submit
form.addEventListener("submit", () => {
  let form_title = document.getElementById("title");
  let form_author = document.getElementById("author");
  let form_pages = document.getElementById("num_pages");
  let form_read_unread = document.getElementById("read-unread");
  new book(
    form_title.value,
    form_author.value,
    form_pages.value,
    form_read_unread.checked,
  );
  form_title.value = "";
  form_author.value = "";
  form_pages.value = "";
  form_read_unread.checked = false;
  localStorage.setItem("lib", JSON.stringify(lib));
  console.log(lib);
  display_books();
});
