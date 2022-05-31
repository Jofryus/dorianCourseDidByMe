/* Enunciado del ejercicio:
x - Crea una clase Libro
x - La clase libro tendrá título, autor, año y género.
x - Crea un método que devuelva toda la información del libro
x - Pide 3 libros y guárdalos en un array
x - Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
x - Validar que los campos no se introduzcan vacíos
x - Validar que el año sea un número y que tenga 4 dígitos
x - Validar que el género sea: aventuras, terror o fantasía
X - Crea una función que muestre todos los libros
X - Crea una función que muestre los autores ordenados alfabéticamente
X - Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información */

class Book {
    constructor(titulo, autor, fecha, genero){
        this.titulo = titulo
        this.autor = autor
        this.fecha = fecha
        this.genero = genero
    }

    infoLibro (){
        return `${this.titulo}, es un libro de ${this.autor}, publicado el año ${this.fecha} y es del genero de ${this.genero}`
    }

    consultaGenero (){
        return this.genero
    }
}

let bookList = [];

function quitBlank(question){
    let answer;
    do {
        answer = prompt(question);
    } while (answer == '')
    return answer;
}

function enterDate(question){
    let answer;
    let notAnswered = true
    while (notAnswered) {
        answer = Number(prompt(question));
        if (answer <= 10000 && answer >= 999){
            return answer;
            notAnswered = false
        }
    }
}

function enterGender(question){
    let answer;
    let notAnswered = true
    while (notAnswered) {
        answer = prompt(question);
        if (answer == 'aventuras' || answer == 'terror' || answer == 'fantasía'){
            return answer;
            notAnswered = false
        }
    }
}

function createBook (){

    titulo = quitBlank('titulo:');
    autor = quitBlank('autor:');
    fecha = enterDate('fecha de publicación:');
    genero = enterGender('introduce el genero (aventuras, terror, fantasía):');

    return new Book(titulo, autor, fecha, genero);
    //    console.log(libro);
};

function createBookList(){
    let bookList = [];
    for (i=0; i<3; i++){
        bookList[i] = createBook();

    };
    return bookList;

}

// console.log(bookList);

function mostrarLibros (bookList){
    for (book of bookList){
        console.log(book.infoLibro());
    }
};

function ordenedAuthorsList(bookList){
    let authorList = [];

    for (book of bookList){
        authorList.push(book.autor)
//        console.log(book.autor) 
    }
    console.log(authorList.sort())
}

function getForGender(bookList){
    let genderList = [];
    gender = prompt('Introduce el genero: ')
    for (book of bookList){
        if (book.genero == gender){
            genderList.push(book);
        }
    }
    for (book of genderList){
        console.log(book.infoLibro(genderList));
    }
}



let bookList1 = createBookList();
ordenedAuthorsList(bookList1);
// console.log(bookList1);

/* let newBook = createBook()
console.log(newBook.infoLibro()) */
mostrarLibros(bookList1);

getForGender(bookList1);

