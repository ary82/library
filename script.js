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
