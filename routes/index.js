
/*
 * GET home page.
 */

module.exports=function(app,db,mongoose){
  var models=require('./mongoModel');
  var secondNav=models.getSecondNav(mongoose);
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
    var secondNavEntity=new secondNav({});
    /*secondNavEntity.findByName(req.query.firstNav,function(err,results){
      if(err){
        console.log(err)
      }else{
        console.log(results)
      }
    });*/
    var query=secondNav.where({navTitle:req.query.firstNav});
    query.findOne(function(err,results){
      if(err){
        console.log(err)
      }else{
        console.log(results)
      }
    });
    /*luwenxu.save(function(err){
      if(err){
        console.log(err)
      }else{
        console.log('saved OK!')
      }
    });*/
    res.end('success');
  });
  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};