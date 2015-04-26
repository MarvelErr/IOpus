/**
 * Created by luwenxull on 2015/4/26.
 */
module.exports={
    changeState:function(err,res,data){
        if(err){
            this.failed(res)
        }else{
            var endData=data||{status:'success'};
            this.success(res,endData)
        }
    },
    success:function(res,data){
        res.send(data)
    },
    failed:function(res){
        res.send({status:'failed'})
    }
};
