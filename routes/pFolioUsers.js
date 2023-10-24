let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let pFolioUsers = require('../models/pFolioUsers');

router.get('/', (req,res,next)=>
{
    pFolioUsers.find().then((err,userList)=>
    {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            console.log(userList);
        }
    });
});



module.exports = router;