const express=require('express');
const morgan=require('morgan');


require('./utils/mongoConnection');

const bookRouter=require('./routers/book.router');
const UsersRouter=require('./routers/users.router');

const app=express();
const port=3003;
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    res.send("Bienvenido a libreria Api");
});
app.use(express.json({limint:"50mb"}));


app.use('/books',bookRouter);
app.use('/users',UsersRouter);

app.listen(port,()=>{
    console.log("Servidor iniciado http://localhost:" + port );
});