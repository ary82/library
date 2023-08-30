let lib = [];
function book(title, author, pg, read) {
  this.title = title;
  this.author = author;
  this.pg = pg;
  this.read = read;
  this.addtolib();
}

book.prototype = {
  info: function () {
    return (this.title + " by " + this.author + ", " + this.pg + " pages, " +
      this.read);
  },
  addtolib: function () {
    lib.push(this);
  },
  removefromlib: function () {
    lib.splice(lib.indexOf(this), 1);
  },
};
const stranger = new book("The stranger", "Albert Camus", 171, "read");
console.log(lib);

function addBook() {
  let newdiv = document.createElement("div");
  const bookname = document.createElement("h2");
  bookname.innerText = stranger.title;
  newdiv.appendChild(bookname);
  const author = document.createElement("h2");
  author.innerText = stranger.author;
  newdiv.appendChild(author);
  const pages = document.createElement("p");
  pages.innerText = stranger.pg;
  newdiv.appendChild(pages);
  const read_btn = document.createElement("button");
  read_btn.innerText = "Read this";
  newdiv.appendChild(read_btn);
  const remove_btn = document.createElement("button");
  remove_btn.innerText = "remove this";
  newdiv.appendChild(remove_btn);
  document.getElementById("container").appendChild(newdiv);
}
addBook();

const add_btn = document.getElementById("add_btn");
const close_modal = document.querySelector("dialog > svg");
const modal = document.getElementById("popup");
add_btn.addEventListener("click", () => {
  modal.showModal();
});
close_modal.addEventListener("click", () => {
  modal.close();
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
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
  console.log(lib);
});
