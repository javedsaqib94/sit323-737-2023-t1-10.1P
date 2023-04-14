const express =  require('express');
 
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello there app2 is here for testing')
});


app.listen(PORT,HOST, ()=>{
    console.log('It is running on http://' +PORT +':'+HOST)
});