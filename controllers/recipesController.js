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

      app.put('/recipes/:recipeId', function(req, res){
       Recipe.update({_id: req.params.recipeId}, {$set:req.body}, function(error, rawResponse){
           if (error){
               res.send({error: "Unable to update recipe"})

               return
           }
           res.send(rawResponse)
       }) 
    })

    app.delete('/recipes/:recipeId', function(req, res){
        Recipe.remove({_id:req.params.recipeId}, function(error, rawResponse){
            if (error){
                res.send({error: 'Unable to remove recipe'})
                return
            }
            res.send(rawResponse)
        })

    })
}


module.exports = recipesController

