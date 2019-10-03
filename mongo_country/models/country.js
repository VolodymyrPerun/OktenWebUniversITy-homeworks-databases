let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let countrySchema = new Schema({
    name:String,
    people:Number,
    weapon:Boolean, 
    square:Number,     
    army:Number   
})
let countryModel = mongoose.model('Counties', countrySchema);
module.exports=countryModel;