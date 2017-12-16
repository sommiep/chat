var models = require('../model/model.js');
var path = require('path');
var bodyParser = require('body-parser');



module.exports = function (app,io){
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({     
        extended: true
    }));
    
    app.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname+"/../home/home.component.html"));
    });
}

app.post('/register',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
    var user={
        "email":req.body.email,
        "password":req.body.password,
    };
    console.log(user);
    models.user.findOne({"handle":req.body.handle},function(err,doc){
        if(err){
            res.json(err); 
        }
        if(doc == null){
            models.user.create(user,function(err,doc){
                if(err) res.json(err);
                else{
                    res.send("success");
                }
            });
        }else{
            res.send("User already found");
        }
    })
    
});