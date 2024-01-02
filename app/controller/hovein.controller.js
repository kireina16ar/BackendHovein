// const db = require("../models")
// const hovein = db.hovein

import hovein from "../models/hovein.model.js";

 const create = (req, res) => {
    try {
        const data = req.body;
        hovein
        .create(data)
        .then(() => res.send({message: "Data Berhasil disimpan"}))
        .catch(err => res.status(500).send({message: err.message}));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

 const findAll = (req, res) => {
    try {
        hovein.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

 const show = (req, res) => {
    try {
        const id = req.params.id;
        hovein.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

 const update = (req, res) => {
    try {
        const id = req.params.id;
        const {nama,email,namatempat,message,rekomendasi,rating,tempatinginkunjung} = req.body;
        hovein.findByIdAndUpdate(id, {nama,email,namatempat,message,rekomendasi,rating,tempatinginkunjung}, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message : "Tidak dapat mengupdate"})
            }
            res.send({message: "Data Terupdate"})
        })
        .catch(err => res.status(500).send({message: err.message}));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

 const deleteData = (req, res) => {
    try {
        const id = req.params.id;
        hovein.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message : "Tidak dapat menghapus data"})
            }
            res.send({message: "Data Terhapus"})
        })
        .catch(err => res.status(500).send({message: err.message}));
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export default {create, findAll, show, update, deleteData}