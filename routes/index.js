
/*
 * GET home page.
 */

module.exports=function(app){
  app.get('/',function(req,res){
    res.render('index')
  });
  app.get('/chatRoom',function(req,res){
    res.render('chatRoom')
  });
  app.get('/myResume',function(req,res){
    res.render('resume/resume')
  });
  app.get('/blog',function(req,res){
    res.render('blog/blog')
  });
};