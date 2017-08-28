var Recipe = require('../models/Recipe')

function recipesController (app){
    app.post('/recipes', function(req, res){
       var recipe = Recipe(req.body)

       recipe.save(function(error, savedRecipe){
           if(error){ 
               res.send({
                   error: "unable to perform request. An error occured"
               })
           return    
        }
        res.send({_id: savedRecipe._id})
       })
    })
}


module.exports = recipesController

