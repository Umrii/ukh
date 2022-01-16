var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	cnic: Number,
	phone: Number,
	type:String

}),
User = mongoose.model('User', userSchema);
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String,
	},
		PPH: Number,
		PPD: Number,
		PPM: Number,
		rating:Number
}),
Cars = mongoose.model('CARS', imageSchema);
//Image is a model which has a schema CarsSchema

module.exports = Cars;  

module.exports = User;