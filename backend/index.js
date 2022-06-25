const express = require('express');

const PORT = process.env.PORT || 3001;
const APP =  express();

APP.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

APP.get('/api',(req,res)=>{
    res.json({
        message: "Hello world from Backend",
    })
});
