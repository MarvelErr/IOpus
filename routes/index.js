/*
 * GET home page.
 */

module.exports = function (app, db, mongoose) {
    /*状态*/
    var fs = require('fs');
    var models = require('./mongoModel');
    var resState = require('./resState');
    var onlineUsers = [];
    var catalogueModel = models.getCatalogueModel(mongoose), userModel = models.getUserModel(mongoose);
    var supporterModel = models.getSupporterModel(mongoose), supCountModel = models.getSupCountModel(mongoose);
    var count = 1;
    app.get('/', function (req, res) {
        res.render('index');
        console.log(new Date());
        console.log(count++);
    });
    /*chatRoom*/
    app.get('/chatRoom', function (req, res) {
        res.render('chatRoom/chatRoom')
    });
    app.get('/getUsername', function (req, res) {
        res.send({name: req.session})
    });
    app.delete('/userExit', function (req, res) {
        res.send('ok')
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
                        res.send({status: 'success'});
                    }
                });
            }
        });
    });
    app.post('/signIn', function (req, res) {
        //onlineUsers.push(req.body.name);
        var user = new userModel({
            name: req.body.name,
            password: req.body.password
        });
        user.findByName(req.body.name, function (err, results) {
            if (err) {
                console.log(err)
            } else if (results.length > 0 && results[0].password == req.body.password) {
                res.send({status: 'success'});
                req.session[req.body.name] = req.body.name;
                onlineUsers.push(req.body.name);
            } else {
                res.send({status: 'failed'})
            }
        });
    });
    app.get('/myResume', function (req, res) {
        res.render('resume/resume')
    });
    /*留言*/
    function updateSupCount(res) {
        supCountModel.findOne({name: 'supCount'}, function (err, results) {
            var count = results.count + 1;
            supCountModel.update({name: 'supCount'}, {count: count}, function (err, raw) {
                resState.changeState(err, res, {status: 'success', count: count});
            });
        });
    }

    app.get('/supCount', function (req, res) {
        supCountModel.findOne({name: 'supCount'}, function (err, results) {
            resState.changeState(err, res, {status: 'success', count: results.count});
        });
    });
    app.post('/leaveWords', function (req, res) {
        var supporter = new supporterModel({}), supCount = new supCountModel({});
        supporter.fbn(req.body.name, function (err, results) {
            if (err) {
                console.log(err);
                res.send({status: 'failed'});
            } else {
                if (results.length != 0) {
                    var comments = results[0].comments, name = req.body.name;
                    comments.push(req.body.comments);
                    supporterModel.update({name: name}, {comments: comments}, function (err, raw) {
                        updateSupCount(res)
                    });
                } else {
                    supporter = new supporterModel({
                        name: req.body.name,
                        comments: [req.body.comments]
                    });
                    supporter.save(function (err) {
                        updateSupCount(res);
                    })
                }
            }
        });
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
    /*js设计模式*/
    app.get('/blog/singleton', function (req, res) {
        res.render('blog/js/singleton')
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

    /*sparrow.js*/
    app.get('/sparrow', function (req, res) {
        res.render('sparrow/sparrow')
    })
};