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
