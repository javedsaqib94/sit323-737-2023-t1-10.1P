const express = require('express');

const app = express();

app.get ('/', (req,res) => {
     console.log("hello there")
    res.send("hello there")
} )
app.listen(3000, () =>{
    console.log("Server has started on port no:  3000")
});
