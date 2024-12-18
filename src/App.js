import React, { useState } from 'react';
import RecipeList from './Components/RecipeList';
import RecipeModal from './Components/RecipeModal';
import recipesData from './Data/recipes.json';
import './Style/App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  const validateInput = (input) => {
    if (!input.trim()) {
      return 'Search query cannot be empty. Please enter a valid ingredient.';
    }
    if (!/^[a-zA-Z0-9 ]*$/.test(input)) {
      return 'Search query contains invalid characters. Use letters, numbers, or spaces only.';
    }
    return null; 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const validationError = validateInput(searchQuery);
    setError(validationError);

    if (validationError) {
      setFilteredRecipes([]);
      return;
    }

    try {
      const results = recipesData.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

      if (results.length === 0) {
        setError('No recipes found matching your search. Try a different ingredient.');
      } else {
        setError(null);
      }

      setFilteredRecipes(results);
    } catch (err) {
      setError('An unexpected error occurred while searching. Please try again later.');
    }
  };

  const resetSearch = () => {
    setSearchQuery('');
    setFilteredRecipes([]);
    setError(null);
  };

  const openRecipe = (recipe) => setSelectedRecipe(recipe);
  const closeRecipe = () => setSelectedRecipe(null);

  return (
    <div className="app">
      <header>
        <h1>Recipe Finder</h1>
        <form onSubmit={handleSearch}>
          <div className="search-bar">
            <input
              type="text"
              name="searchQuery"
              placeholder="Search by ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={resetSearch} className="reset-button">
              Reset
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
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