const Book = require('../models/book.model');

exports.getBooks = async (req, res) => {
    try {
        const books= await Book.find();

       return res.status(200).json({
        message: "Consulta de libros",
        data:books
       });
    }catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            data:error
        });
    }
}
exports.getBookId = async (req, res) => {
    const bookId=req.params.bookId;
    try {
        const book =await Book.findById(bookId);
       return res.status(200).json({
        message: "Consulta de libro por ID:"+bookId,
        data:book
       });

    }catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            data:error
        });
    }
}
//insert new book
exports.newBook = async (req, res) => {
    try {
        const {titulo,autor,isbn,genero,precio,stock} = req.body;
        const newBook=new Book({titulo,autor,isbn,genero,precio,stock});
        await newBook.save();

       return res.status(200).json({
        message: "Libro creado con exito",
        data:newBook    
       });
    }catch (error) {
        return res.status(500).json({
            message: "Error al crear libro",
            data:error
        });
    }
}

//update book
exports.updateBook = async (req, res) => {
    const bookId=req.params.bookId;
    newData=req.body;

    try {
        const updateBook= await Book.findByIdAndUpdate(bookId,newData,{new:true});

    return res.status(200).json(
        {
            message: "Actualizar libro por Id:"+bookId,
            data:updateBook
        }
       
    );
    }catch (error) {
        return res.status(500).json({
            message: "Error al actualizar libro",
            data:error
        });
    }
}
//delete book
exports.deleteBook = async(req, res) => {
    const bookId=req.params.bookId;
    try {
    await Book.findByIdAndDelete(bookId);
    return res.status(200).json(
        {
            message: "Libro eliminado por Id:"+bookId,
        }
    );
    
    }catch (error) {
        return res.status(500).json({
            message: "Error al eliminar libro",
            data:error
        });
    }
}

