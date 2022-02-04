import React from "react";

function EditableRecipe({editingRecipe, handleEditChange}) {

  // * editingRecipe starts in App.js, received from RecipeList.js
  // * handleEditChange starts in App.js, received from RecipeList.js
  

  return (
    <>
      <td>
        <input
          id="editingName"
          name="editingName"
          type="text"
          required={true}
          value={editingRecipe.editingName}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          id="editingCuisine"
          name="editingCuisine"
          type="text"
          required={true}
          value={editingRecipe.editingCuisine}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          id="editingPhoto"
          name="editingPhoto"
          type="url"
          required={true}
          value={editingRecipe.editingPhoto}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <textarea
          id="editingIngredients"
          name="editingIngredients"
          required={true}
          rows={2}
          value={editingRecipe.editingIngredients}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <textarea
          id="editingPreparation"
          name="editingPreparation"
          required={true}
          rows={2}
          value={editingRecipe.editingPreparation}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <button type="submit">
          update
        </button>
      </td>
    </>
  );
}

export default EditableRecipe;