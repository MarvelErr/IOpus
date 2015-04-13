/**
 * Created by luwenxull on 2015/3/30.
 */

exports.getCatalogueModel=function(mongoose){
    var Schema=mongoose.Schema;
    var catalogueSchema=new Schema({
        id:Number,
        fl_c:String,
        sl_c:String,
        content:Array
    });
    catalogueSchema.methods.sl = function(title, callback) {
        return this.model('catalogue').find({fl_c: title}, callback);
    };
    catalogueSchema.methods.getContent = function(title, callback) {
        return this.model('catalogue').find({sl_c: title}, callback);
    };
    var catalogueModel = mongoose.model('catalogue', catalogueSchema);
    return catalogueModel;
};
/*userModel*/
exports.getUserModel=function(mongoose){
    var Schema=mongoose.Schema;
    var userSchema=new Schema({
        name:String,
        password:String
    });
    userSchema.methods.findByName=function(name,callback){
        return this.model('user').find({name:name},callback)
    };
    var userModel=mongoose.model('user',userSchema);
    return userModel;
};
