import React, { useEffect } from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') 
      {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => 
    {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose]);
  
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <p><strong>Cooking Time:</strong> {recipe.cooking_time ? `${recipe.cooking_time} mins` : 'N/A'}</p>
        <p><strong>Instructions:</strong> {recipe.instructions || 'No instructions available.'}</p>
      </div>
    </div>
  );
};

export default RecipeModal;