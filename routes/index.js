
/*
 * GET home page.
 */

module.exports=function(app,db,mongoose){
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
  app.get('/sl_c',function(req,res){
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
  app.get('/blogContent',function(req,res){
    var catalogue=new catalogueModel({});
    catalogue.getContent(req.query.sl_c,function(err,results){
      if(err){
        res.send({status:'err'});
      }else{
        res.send({status:'suc',results:results});
      }
    });
  });
  /*博客内容*/
  app.get('/blog/vo',function(req,res){
    res.render('blog/VariableObject')
  });
  app.get('/blog/this',function(req,res){
    res.render('blog/This')
  });
  app.get('/blog/sc', function (req, res) {
    res.render('blog/ScopeChain')
  });

  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};