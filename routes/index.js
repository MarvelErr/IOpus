
/*
 * GET home page.
 */

module.exports=function(app){
  app.get('/',function(req,res){
    res.render('index')
  });
  app.get('/chatRoom',function(req,res){
    res.render('chatRoom')
  })
};