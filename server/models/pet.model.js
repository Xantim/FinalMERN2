const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Hey you need a pet name"],
        minlength:[3, "need more than 3 characters"],
    },
    type:{
        type: String,
        required:[true,"Hey you need a pet type"],
        minlength:[3, "need more than 3 characters"],
    },
    description:{
        type: String,
        required:[true,"Hey you need a description"],
        minlength:[3, "need more than 3 characters"],
    },
    skillOne:{
        type: String,
        default:""
    },
    skillTwo:{
        type: String,
        default:""
    },
    skillThree:{
        type: String,
        default:""
    },
}, {timestamps:true})

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;

