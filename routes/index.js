
/*
 * GET home page.
 */

module.exports=function(app,db){
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
  app.get('/blog',function(req,res){
    res.render('blog/blog')
  });
  app.get('/thumbs',function(req,res){
    console.log('get');
    res.status(200).send('success');
  });
};