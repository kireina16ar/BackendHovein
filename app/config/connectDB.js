// const mongoose = require("mongoose");
// const db = require("../models")

import mongoose from "mongoose";

const urldb = "mongodb+srv://kireinaar1618:haki1613@cluster0.1hxosq6.mongodb.net/hovein?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(urldb, {
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected:${conn.connection.host}`)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

export default connectDB

// module.exports = connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(db.url, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//         })
//         console.log(`MongoDB Connected:${conn.connection.host}`)
//     } catch (error){
//         console.log(error)
//         process.exit(1)
//     }
// }



