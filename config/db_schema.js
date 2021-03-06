var mongoose		= require('mongoose'),
	Schema 			= mongoose.Schema;

var entrySchema = new Schema({
	entry_date : Date,
	amount : Number,
	paid : Boolean,
	generated_on_mode : String,
	user:{ type : Schema.Types.ObjectId, ref :'User' },
	type : String,
	approved_by:{ type : Schema.Types.ObjectId, ref : 'User'}
});


var userSchema  = new Schema({
	first_name : String,
	last_name : String,
	username :  String,
	position : String,
	is_user_maintenance : Boolean,
	is_user_approver : Boolean, 
	picture_path: String
});

var applicationConfigSchema = new Schema({
	application_modes : [],
	application_current_mode : String,
	application_name : String,
	application_version : String
});

var mongoConnectionString = process.env.MONGOLAB_URI;
mongoose.connect(mongoConnectionString);

exports.ApplicationConfig 	= mongoose.model('Application_Config', applicationConfigSchema); 
exports.Entry 				= mongoose.model('Entries', entrySchema);
exports.User 				= mongoose.model('User', userSchema);
exports.dbConnection 		= mongoose.connection;


