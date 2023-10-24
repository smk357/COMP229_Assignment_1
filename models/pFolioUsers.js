let mongoose= require('mongoose');

//create model class
let usersModel = mongoose.Schema(
    {
        name: String,
        email: String,
        username: String,
        password: String,
        contactNumber: String

    },
    {
        collection: "UserInfo"
    });
    module.exports = mongoose.model('pFolioUsers',usersModel);