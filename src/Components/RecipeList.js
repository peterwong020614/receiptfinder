import React, {useState} from "react";

const RecipeList =({recipes, onRecipeClick}) => {
    const [expanded, setExpanded] = useState({});

  const toggleShowMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

    return (
        <div lassName ="recipe-list">
            {recipes.length > 0 ?(
                recipes.map((recipe) => (
                    <div key ={recipe.id} className="recipe-card" onClick={()=> onRecipeClick}>
                        <img src={recipe.image} alt={recipe.name}/>
                        <h2>{recipe.name}</h2>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                        <p><strong>Cooking Time:</strong> {recipe.cooking_time ? `${recipe.cooking_time} mins` : 'N/A'}</p>
                        {expanded[recipe.id] && <p><strong>Instructions:</strong> {recipe.instructions}</p>}
            <button onClick={() => toggleShowMore(recipe.id)}>
              {expanded[recipe.id] ? 'Show Less' : 'Show More'}
            </button>
            <button onClick={() => onRecipeClick(recipe)}>View Details</button>
                    </div>
                ))
            ):(
                <p>No recipes found. Try searching for something else!</p>
            )}
         
        </div>
    );
};

export default RecipeList;