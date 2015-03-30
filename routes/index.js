
/*
 * GET home page.
 */

module.exports=function(app,db,mongoose){
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
    var Schema=mongoose.Schema;
    var secondNavSchema=new Schema({
      navTitle:String
    });
    var secondNav = mongoose.model('secondNav', secondNavSchema);
    var luwenxu=new secondNav({navTitle:'wenxu'});
    luwenxu.save(function(err){
      if(err){
        console.log(err)
      }else{
        console.log('saved OK!')
      }
    });
    console.log(req.query.firstNav);

    res.end('success');
  });
  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};