const express = require("express");
const app = express();
const PORT = 8080;

import express from "express"

app.get("/hoangduc", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
})