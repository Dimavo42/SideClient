const express = require('express');
const router = express.Router();
const Cost = require('../schemes/costs');


router.post('addcost/:user_id',function(req,res,next){
    Cost.find({id:req.params.user_id}).then((ob)=>{
        res.send(ob);
    }).catch(next);
});



module.exports = router;