/**
 * Created by luwenxull on 2015/3/30.
 */

exports.getSecondNavModel=function(mongoose){
    var secondNavModel,Schema;
    Schema=mongoose.Schema;
    var secondNavSchema=new Schema({
        firstNav:String,
        secondNav:String
    });
    secondNavSchema.methods.findByName = function(title, callback) {
        return this.model('secondNav').find({firstNav: title}, callback);
    };
    secondNavModel = mongoose.model('secondNav', secondNavSchema);
    return secondNavModel;
};
