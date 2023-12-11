const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const books = [];

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.post("/api/books", async(req, res) => {

});

app.listen(3000);