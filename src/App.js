import React, { useState } from 'react';
import RecipeList from './Components/RecipeList';
import RecipeModal from './Components/RecipeModal';
import recipesData from './Data/recipes.json';
import './Style/App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = () => {
    const results = recipesData.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredRecipes(results);
  };

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <header>
        <h1>Recipe Finder</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type ingredient name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      <main>
        <RecipeList recipes={filteredRecipes} onRecipeClick={openRecipe} />
      </main>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeRecipe} />
      )}
    </div>
  );
};

export default App;