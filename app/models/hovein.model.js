import mongoose from "mongoose";

const hoveinSchema = mongoose.Schema({
    nama: String,
    email: String,
    namatempat: String,
    message: String,
    rekomendasi: String,
    rating: String,
    tempatinginkunjung: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const hovein = mongoose.model("hovein", hoveinSchema)
export default hovein


// module.exports = mongoose =>{

//     const schema = mongoose.Schema(
//         {
//             nama: String,
//             email: String,
//             namatempat: String,
//             mesaage: String,
//             rekomendasi: String,
//             rating: String,
//             tempatinginkunjung: String,

//         }, {
//             timestamps: true
//         }
//     );

//     schema.method("toJSON", function(){
//         const {__v, _id, ...object} = this.toObject();
//         object.id = _id;

//         return object;
//     });

//     return mongoose.model("hovein", schema);

// }