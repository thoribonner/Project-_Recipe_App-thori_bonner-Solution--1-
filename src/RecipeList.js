import React from "react";
import ReadOnlyRecipe from "./ReadOnlyRecipe";
import EditableRecipe from "./EditableRecipe";

function RecipeList({
  recipes,
  editingRecipe,
  handleEditChange,
  handleEdit,
  handleUpdate,
  deleteRecipe,
}) {
  // * recipes starts on App.js, travels through to ReadOnlyRecipe.js
  // * editingRecipe starts on App.js, travels through to EditableRecipe.js
  // * handleEditChange starts on App.js, travels through to EditableRecipe.js
  // * handleEdit starts on App.js, travels through to ReadOnlyRecipe
  // * handleUpdate starts on App.js, travels through to EditableRecipe.j
  // * deleteRecipe  starts on App.js, travels through to ReadOnlyRecipe

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index} className="recipe">
              {editingRecipe.editingIndex === index ? (
                <EditableRecipe
                  editingRecipe={editingRecipe}
                  handleEditChange={handleEditChange}
                  handleUpdate={handleUpdate}
                />
              ) : (
                <ReadOnlyRecipe
                  recipe={recipe}
                  index={index}
                  deleteRecipe={deleteRecipe}
                  handleEdit={handleEdit}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
