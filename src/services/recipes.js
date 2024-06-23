import recipe_previews from "../assets/mocks/recipe_preview.json";
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import familyRecipes from "../assets/mocks/familyRecipes.json";


export function mockGetRecipesPreview(amount = 1) {
  
  const limitedAmount = Math.min(amount, recipe_previews.length);
  return { data: { recipes: recipe_previews.slice(0, limitedAmount) } };
}

export function mockGetRecipeFullDetails(recipeId) {
  console.log("Searching for recipe ID:", recipeId);

  let recipe = null;

  // בדיקה אם מדובר במתכון חדש שנשמר ב-localStorage
  const userCreatedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
  recipe = userCreatedRecipes.find(r => r.id === parseInt(recipeId));

  if (!recipe) {
    // במקרה של מתכון מה-API
    recipe = recipe_full_view.find(recipe => recipe.id === parseInt(recipeId));
  }

  if (recipe) {
    console.log("Recipe found:", recipe);
    return { data: { recipe } };
  } else {
    console.log("Recipe not found");
    return { data: { recipe: null } };
  }
}
export function mockSearchRecipes(query, amount = 1) {
  const filteredResults = recipe_previews.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  const limitedAmount = Math.min(amount, filteredResults.length);
  return { data: { recipes: filteredResults.slice(0, limitedAmount) } };
}
export async function fetchFamilyRecipes() {
  return new Promise((resolve) => {
    resolve(familyRecipes);
  });
}
export function addFavorite(recipe) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.some(fav => fav.id === recipe.id)) {
    favorites.push(recipe);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}