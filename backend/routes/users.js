const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) =>{
    //list of all the users , returned in json format
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    //part of request body
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;