import recipe_previews from "../assets/mocks/recipe_preview.json";
import recipe_full_view from "../assets/mocks/recipe_full_view.json";

export function mockGetRecipesPreview(amount = 1) {
  
  const limitedAmount = Math.min(amount, recipe_previews.length);
  return { data: { recipes: recipe_previews.slice(0, limitedAmount) } };
}

export function mockGetRecipeFullDetails(recipeId) {
  console.log("Searching for recipe ID:", recipeId);
  const recipe = recipe_full_view.find(recipe => recipe.id === parseInt(recipeId));
  if (recipe) {
    console.log("Recipe found:", recipe);
    return { data: { recipe: recipe } };
  } else {
    console.log("Recipe not found");
    return { data: { recipe: null } };
  }
}