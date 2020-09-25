const Pets = require("../models/pet.model");

module.exports = {
    index:(req,res) => {
        Pets.find().sort('type')
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Pets.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Pets.findOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Pets.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true, useFindAndModify:false})
        .then(data => res.json({results:data}) )
        .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Pets.deleteOne({_id:req.params.id})
        .then(data => res.json({results:data}))
        .catch(err => res.json(err.errors))    
    }

}