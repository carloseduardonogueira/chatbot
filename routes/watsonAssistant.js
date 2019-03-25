var express = require('express');
var router  = express.Router();
const watsonAssistant = require('../config/watsonConfig.js');

router.post('/',function(req,res,next){
    var{text,context} = req.body;
    context = JSON.parse(context);

    const params ={
        input:{ text } ,
        workspace_id: 'a90c504f-c4aa-43e6-b742-4ee587911043',
        context
    };

    watsonAssistant.message(
        params,
        function(err,response){
            if(err)
            res.json({status:'ERRO',data:err});
            else{
                res.json ({status: 'OK', data:response});
            }
        }
    );
});
module.exports= router;