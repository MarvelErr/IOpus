/*
 * GET home page.
 */

module.exports = function (app, db, mongoose) {
    var fs = require('fs');
    var models = require('./mongoModel');
    var onlineUsers=[];
    var catalogueModel = models.getCatalogueModel(mongoose), userModel = models.getUserModel(mongoose);
    var count = 1;
    app.put('/homepageCount', function (req, res) {
        console.log(count++);
        res.send('get')
    });
    app.get('/', function (req, res) {
        res.render('index')
    });
    /*chatRoom*/
    app.get('/chatRoom', function (req, res) {
        res.render('chatRoom/chatRoom')
    });
    app.post('/signUp', function (req, res) {
        //console.log(req);
        var user = new userModel({
            name: req.body.name,
            password: req.body.password
        });
        user.findByName(req.body.name, function (err, results) {
            if (err) {
                console.log(err)
            } else if (results.length > 0) {
                res.send({status: 'failed'})
            } else {
                user.save(function (err) {
                    if (err) console.log(err);
                    else {
                        //console.log('new user was saved');
                        res.send({status: 'success'});
                    }
                });
            }
        });
    });
    app.post('/signIn',function(req,res){
        onlineUsers.push(req.body.name);
        res.send({status:'success'});
    });
    app.get('/myResume', function (req, res) {
        res.render('resume/resume')
    });
    /*blog*/
    app.get('/blog', function (req, res) {
        res.render('blog/blog')
    });
    app.get('/blog/sl_c', function (req, res) {
        var catalogue = new catalogueModel({});
        var query = req.query.fl_c;
        catalogue.sl(query, function (err, results) {
            if (err) {
                res.send({status: 'err'});
            } else {
                res.send({status: 'suc', results: results});
            }
        });
    });
    app.get('/blog/title', function (req, res) {
        var catalogue = new catalogueModel({});
        catalogue.getContent(req.query.sl_c, function (err, results) {
            if (err) {
                res.send({status: 'err'});
            } else {
                res.send({status: 'suc', results: results});
            }
        });
    });
    app.get('/blog/content', function (req, res) {
        res.render(req.query.src)
    });
    /*博客内容*/
    app.get('/blog/vo', function (req, res) {
        res.render('blog/js/VariableObject')
    });
    app.get('/blog/this', function (req, res) {
        res.render('blog/js/This')
    });
    app.get('/blog/sc', function (req, res) {
        res.render('blog/js/ScopeChain')
    });
    app.get('/blog/fc', function (req, res) {
        res.render('blog/js/Functions')
    });
    app.get('/blog/object', function (req, res) {
        res.render('blog/js/Object')
    });
    app.get('/blog/prototype', function (req, res) {
        res.render('blog/js/Proto')
    });
    /*blog/html*/
    app.get('/blog/position', function (req, res) {
        res.render('blog/html/position')
    });
    app.get('/blog/svg', function (req, res) {
        res.render('blog/html/svg')
    });
    app.get('/thumbs', function (req, res) {
        console.log('get');
        res.status(200).send('success');
    });
};