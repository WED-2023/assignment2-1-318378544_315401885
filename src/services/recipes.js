import recipe_previews from "../assets/mocks/recipe_preview.json";
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import familyRecipes from "../assets/mocks/familyRecipes.json";

import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export async function getRecipeFullDetails(recipeId) {
  try {
    const response = await axios.get(`${API_URL}/recipes/full/${recipeId}`); // קריאה לשרת שלך במקום הנתונים המקומיים
    return response.data; // מחזיר את הנתונים כפי שהם מהשרת
  } catch (error) {
    console.error('Error during recipe details fetch:', error);
    throw error; // טיפול בשגיאה
  }
}

export function fetchFamilyRecipes() {
  return familyRecipes;
}

export async function addNewRecipe(recipe) {
  try {
    const response = await axios.post(`${API_URL}/user/addRecipe`, recipe); // עדכון הכתובת ל-user
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRandomRecipes(number = 3) {
  try {
      const response = await axios.get(`${API_URL}/recipes/random`, { params: { number } });
      return response.data;
  } catch (error) {
      throw error;
  }
}

export async function searchRecipe(query, cuisine, diet, intolerance, number) {
  try {
    const response = await axios.get(`${API_URL}/recipes/search`, {
      params: { 
        query, 
        cuisine, 
        diet, 
        intolerance, 
        number 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
}


export async function getRecipeDetails(recipeId) {
  try {
    const response = await axios.get(`${API_URL}/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error('Error during recipe details fetch:', error);
    throw error;
  }
}

export async function getUserRecipeDetails(recipeId) {
  try {
    const response = await axios.get(`${API_URL}/user/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user recipe details:", error);
    throw error;
  }
}