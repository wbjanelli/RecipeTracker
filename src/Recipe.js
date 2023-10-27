import React from "react";

function Recipe({ recipe, index, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button
          name="delete"
          onClick={() => deleteRecipe(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
