/**
 * Created by luwenxull on 2015/3/30.
 */

exports.getSecondNav=function(mongoose){
    var secondNav,Schema;
    Schema=mongoose.Schema;
    var secondNavSchema=new Schema({
        navTitle:String
    });
    secondNavSchema.methods.findByName = function(title, callback) {
        return this.model('secondNav').find({navTitle: title}, callback);
    };
    secondNav = mongoose.model('secondNav', secondNavSchema);
    return secondNav;
};
