var Recipe = require('../models/Recipe')

function recipesController (app){
    app.post('/recipes', function(req, res){
        res.send({
            hello: 'world'
        })
    })
}

module.exports = recipesController

