function Box(w, h, l, material, cntnt) {
    var content;

    if (!w)
        this.width = 0;
    else
        this.width = w;

    if (!h)
        this.height = 0;
    else
        this.height = h;

    if (!l)
        this.length = 0;
    else
        this.length = l;

    if (!material)
        this.material = "cardboard";
    else
        this.material = material;

    if (!cntnt)
        content = [];
    else
        content = cntnt;

    this.no_of_books = content.length;

    Box.prototype.toString = function () {
        return "Width: " + this.width + ", height: " + this.height + ", length: " + this.length +
            ", No. of Books: " + this.no_of_books;
    }

    Box.prototype.valueOf = function () {
        return this.no_of_books;
    }

    Box.prototype.deleteBook = function (title) {
        var i = 0;
        while (i < this.no_of_books) {
            if (content[i].title === title) {
                content.splice(i, 1);
                this.no_of_books = content.length;
            } else {
                ++i;
            }
        }
        return content;
    }
}


function Book(title, chapters, author) {
    if (!title)
        this.title = "";
    else
        this.title = title;

    if (!chapters)
        this.chapters = 0;
    else
        this.chapters = chapters;

    if (!author)
        this.author = "";
    else
        this.author = author;
}

var bk1_1 = new Book("harry potter", 20, "Dennings");
var bk1_2 = new Book("Song of ice and fire", 16, "maxuill");
var bk1_3 = new Book("العظماء ال 100",1,"النابلسى");

var bx1 = new Box(2,4,3,"plastic",[bk1_1,bk1_2,bk1_3]);


var bk2_1 = new Book("How To for dummies", 50, "Dummy");
var bk2_2 = new Book("O'Raily", 20, "Oracle");

var bx2 = new Box(5,7,2,"metal",[bk2_1,bk2_2]);