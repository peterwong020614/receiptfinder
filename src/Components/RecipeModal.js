import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        <p>Cooking Time: {recipe.cooking_time} mins</p>
       
      </div>
    </div>
  );
};

export default RecipeModal;