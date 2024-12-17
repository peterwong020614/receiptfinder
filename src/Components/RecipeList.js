import React from "react";

const RecipeList =({recipes, onRecipeClick}) => {
    return (
        <div lassName ="recipe-list">
            {recipes.length > 0 ?(
                recipes.map((recipe) => (
                    <div key ={recipe.id} className="recipe-card" onClick={()=> onRecipeClick}>
                        <img src={recipe.image} alt={recipe.name}/>
                        <h2>{recipe.name}</h2>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                        <p><strong>Cooking Time:</strong> {recipe.cooking_time ? `${recipe.cooking_time} mins` : 'N/A'}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions || 'No instructions available.'}</p>
                    </div>
                ))
            ):(
                <p>No recipes found. Try searching for something else!</p>
            )}
         
        </div>
    );
};

export default RecipeList;