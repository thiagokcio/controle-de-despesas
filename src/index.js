require("dotenv").config();
const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router)

app.listen(process.env.PORT, () =>
    console.log(`Server running at port ${process.env.PORT}`)
);