if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

const dataRoutes = require('./routes/data');

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;

app.use('/', dataRoutes);


app.listen(PORT, ()=>{
    console.log(`Listening to PORT: ${PORT}`);
})
