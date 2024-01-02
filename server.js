// const express = require("express")
// const cors = require("cors")
// const db = require("./app/models")
// const app = express()
// const connectDB = require("./app/config/connectDB");

import cors from "cors";
import express from "express";
import connectDB from "./app/config/connectDB.js";
import Router from "./app/routes/hovein.route.js";
connectDB();
const app = express();

const corsOptions = {
    origin: "*"
}

// register cors middleware

app.use(cors(corsOptions));
app.use(express.json());
app.use(Router);
app.listen(8000, () => console.log("server started on port http://localhost:8000"))

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

// // konek ke database
//     // const mongooseConfig = {
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true
//     // }

//     // db.mongoose.connect(db.url, mongooseConfig);
// connectDB()


// // memanggil routes etalase
// require("./app/routes/hovein.route")(app);


// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`));
