import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              recipe={recipe}
              index={index}
              deleteRecipe={deleteRecipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
