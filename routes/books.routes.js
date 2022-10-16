const BookController = require("../controllers/books.controller");

module.exports=(app)=>{

    app.post("/api/v1/books",BookController.create);

    app.get("/api/v1/books",BookController.findAll);

    app.post("/api/v1/books/:bookId/:userId",BookController.performAction);


    app.get("/api/v1/books/rented/:userId",BookController.findAllRentedBooks);


}