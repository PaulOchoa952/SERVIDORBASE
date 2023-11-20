const moongose=require('mongoose');

let bookSchema = new moongose.Schema({
    titulo:{type:String},
    autor:{type:String},
    isbn:{type:String},
    genero:{type:String},
    precio:{type:Number},
    stock:{type:Number}
});

module.exports=moongose.model('Book',bookSchema,'book');