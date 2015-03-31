
/*
 * GET home page.
 */

module.exports=function(app,db,mongoose){
  var models=require('./mongoModel');
  var secondNavModel=models.getSecondNavModel(mongoose);
  app.get('/',function(req,res){
    res.render('index')
  });
  /*chatRoom*/
  app.get('/chatRoom',function(req,res){
    res.render('chatRoom/chatRoom')
  });
  app.post('/register',function(req,res){
    console.log(req.params);
    res.end('success');
  });
  app.get('/myResume',function(req,res){
    res.render('resume/resume')
  });
  /*blog*/
  app.get('/blog',function(req,res){
    res.render('blog/blog')
  });
  app.get('/secondNavOfBlog',function(req,res){
    /*简单的初始化*/
    /*var arrs=['JavaScript--作用域链与闭包','JavaScript--浏览器兼容实例'];
    for(var i=0;i<arrs.length;i++){
      var secondNavEntity=new secondNavModel({firstNav:'javascript',secondNav:arrs[i]});
      secondNavEntity.save(function(err){
        if(err){
          console.log(err)
        }else{
          console.log('saved OK!')
        }
      });
    }*/
    var secondNavEntity=new secondNavModel({});
    secondNavEntity.findByName(req.query.firstNav.toLowerCase(),function(err,results){
      if(err){
        res.send({status:'err'});
      }else{
        res.send({status:'suc',results:results});
      }
    });
/*    var query=secondNav.where({firstNav:req.query.firstNav});
    query.findOne(function(err,results){
      if(err){
        console.log(err)
      }else{
        console.log(results)
      }
    });*/
  });
  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};