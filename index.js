console.log("Hello World");

require ("dotenv").config()

const express = require("express")

const PORT = 8080
server.listen(PORT, ()=>{
    console.log('server running at' + PORT);
})