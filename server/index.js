const express=require('express');
require('dotenv').config();
const{ graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port=process.env.PORT || 5000;
const app=express();
<<<<<<< HEAD
//hiii
=======
//hello
>>>>>>> d4566a64aa6c352ec82dfa0fc7146d720b4fc2ad
app.use(
    '/graphql', 
    graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
    })
);
app.listen(port, console.log(`Server running on port ${port}`));
