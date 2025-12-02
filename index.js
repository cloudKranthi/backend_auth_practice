const express= require('express');
require('dotenv').config();
const app = express();
const home_page = require('./routes/home_page');
const PORT = process.env.PORT ;
app.use(home_page);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})