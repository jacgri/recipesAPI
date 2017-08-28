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

    app.get('/recipes', function(req, res){
        Recipe.find({}, function(error, recipes){
            if(error){
                res.send({error: "Unable to retrieve recipes"})
                return
            }
            res.send(recipes)
        })
    })

    app.get('/recipes/:recipeId', function(req, res){
        Recipe.findOne({_id:req.params.recipeId}, function(error, recipe){
            if(error){
                res.send({error: "Unable to retrieve recipe"})
                return
            }
            res.send(recipe)
        })
    })
}


module.exports = recipesController

