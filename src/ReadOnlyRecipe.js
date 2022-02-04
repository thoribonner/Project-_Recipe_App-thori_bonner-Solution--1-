import React from "react";

function ReadOnlyRecipe({ recipe, index, deleteRecipe, handleEdit }) {

  // * recipe starts on App.js, received from RecipeList.js
  // * index starts on RecipeList.js in the recies.map
  // * deleteRecipe starts on App.js, received from RecipeList.js
  // * handleEdit starts on App.js, received from RecipeList.js

  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td>
        <button
          name="delete"
          onClick={ () => deleteRecipe(index) }
        >
          delete
        </button>
        <br/>
        <br/>
        <button
          name="edit"
          onClick={ () => handleEdit(recipe, index) }
        >
          edit
        </button>
      </td>
    </>
  );
}

export default ReadOnlyRecipe;
