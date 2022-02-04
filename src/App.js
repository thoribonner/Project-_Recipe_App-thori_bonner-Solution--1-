import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const initialEditingRecipeState = {
    editingIndex: null,
    editingName: "",
    editingCuisine: "",
    editingPhoto: "",
    editingIngredients: "",
    editingPreparation: "",
  };
  const [editingRecipe, setEditingRecipe] = useState({...initialEditingRecipeState});

  // * create new recipe
  const addRecipe = newRecipe => {
    setRecipes( currentRecipes => [
      ...currentRecipes,
      newRecipe,
    ] );
  };

  // * edit existing recipe
  const handleEdit = (recipeToUpdate, indexToUpdate) => {
    // * on edit click set input box values to existing values
    setEditingRecipe({
      editingIndex: indexToUpdate,
      editingName: recipeToUpdate.name,
      editingCuisine: recipeToUpdate.cuisine,
      editingPhoto: recipeToUpdate.photo,
      editingIngredients: recipeToUpdate.ingredients,
      editingPreparation: recipeToUpdate.preparation,
    });
  };

  const handleEditChange = ({ target }) => {
    // * store value updates to editingRecipe
    setEditingRecipe({
      ...editingRecipe,
      [target.name]: target.value,
    });
  };

  const updateRecipe = (editingRecipe) => {
    // * convert editingRecipe to proper keys
    // * store updated recipes array
    // * setRecipes with updated recipes
    const updatedRecipe = {
      name: [editingRecipe.editingName],
      cuisine: editingRecipe.editingCuisine,
      photo: editingRecipe.editingPhoto,
      ingredients: editingRecipe.editingIngredients,
      preparation: editingRecipe.editingPreparation
    };
    const updatedRecipes = recipes.map( ( recipe, index ) => {
      if (index === editingRecipe.editingIndex) recipe = {...updatedRecipe};
      return recipe;
    })
    setRecipes([...updatedRecipes])
    };

  const handleUpdate = (event) => {
    // * updateRecipes
    // * reinitialize editingRecipes
    event.preventDefault();
    updateRecipe(editingRecipe);
    setEditingRecipe({...initialEditingRecipeState});
  };

  // * delete recipe 
  const deleteRecipe = indexToDelete => {
    // * delete* selected recipe by filtering out non matches
    const updatedRecipes = recipes.filter( (recipe, index) => index !== indexToDelete);
    setRecipes([...updatedRecipes])
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList
        recipes={recipes}
        editingRecipe={editingRecipe}
        handleEditChange={handleEditChange}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate
        addRecipe={addRecipe}
      />
    </div>
  );
}

export default App;
