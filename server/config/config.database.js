const mongoose = require('mongoose');

const database = "pet";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("You're in the mainframe bruh!"))
    .catch(err => console.log(`Error has occured! ${err}`))