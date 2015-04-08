
/*
 * GET home page.
 */

module.exports=function(app,db,mongoose){
  var fs=require('fs');
  var models=require('./mongoModel');
  var catalogueModel=models.getCatalogueModel(mongoose);
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
  app.get('/blog/sl_c',function(req,res){
    var catalogue=new catalogueModel({});
    var query=req.query.fl_c=='JavaScript'?'JS':req.query.fl_c;
    catalogue.sl(query,function(err,results){
      if(err){
        res.send({status:'err'});
      }else{
        res.send({status:'suc',results:results});
      }
    });
  });
  app.get('/blog/title',function(req,res){
    var rs=fs.createReadStream('./views/blog/js/Object.ejs',{encoding:'utf-8'});
    rs.on('data',function(data){
      res.send(data)
    });
   /* var catalogue=new catalogueModel({});
    catalogue.getContent(req.query.sl_c,function(err,results){
      if(err){
        res.send({status:'err'});
      }else{
        res.send({status:'suc',results:results});
      }
    });*/
  });
  /*博客内容*/
  app.get('/blog/vo',function(req,res){
    res.render('blog/js/VariableObject')
  });
  app.get('/blog/this',function(req,res){
    res.render('blog/js/This')
  });
  app.get('/blog/sc', function (req, res) {
    res.render('blog/js/ScopeChain')
  });
  app.get('/blog/fc', function (req, res) {
    res.render('blog/js/Functions')
  });
  app.get('/blog/object',function(req,res){
    res.render('blog/js/Object')
  });
  app.get('/blog/prototype',function(req,res){
    res.render('blog/js/Proto')
  });

  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};