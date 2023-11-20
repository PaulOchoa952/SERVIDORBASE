const express=require('express');
const router=express.Router();
const bookController=require('../controllers/books.controlles');
const authMiddleWare=require('../utils/auth.middleware');

router.get("/",bookController.getBooks);

router.get("/:bookId",bookController.getBookId);

router.post("/",authMiddleWare.authenticateToken,bookController.newBook);

router.put("/:bookId",bookController.updateBook);

router.delete("/:bookId",bookController.deleteBook);

module.exports=router;