<template>
  <div class="container">
    <div v-if="loading" class="loading-spinner">
      <p>Loading recipe...</p>
    </div>
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    <div v-if="recipe && !loading && !error">
      <div class="recipe-header mt-3 mb-4 text-center">
        <h1 class="recipe-title">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="recipe-image center" />
        <div class="recipe-info-container">
          <div class="recipe-info">Ready in {{ recipe.readyInMinutes }} minutes</div>
          <div class="recipe-info">Likes: {{ recipe.aggregateLikes }} likes</div>
          <div class="recipe-info">Vegetarian: {{ recipe.vegetarian ? 'Yes' : 'No' }}</div>
          <div class="recipe-info">Gluten-Free: {{ recipe.glutenFree ? 'Yes' : 'No' }}</div>
          <div class="recipe-info">Vegan: {{ recipe.vegan ? 'Yes' : 'No' }}</div>
        </div>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped ingredients" v-if="recipe.extendedIngredients && recipe.extendedIngredients.length">
            <h2>Ingredients:</h2>
            <ul>
              <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index + '_' + ingredient.id" class="ingredient-item">
                {{ ingredient.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped instructions" v-if="recipe.analyzedInstructions && recipe.analyzedInstructions.length">
            <h2>Instructions:</h2>
            <ol>
              <li v-for="(step, index) in recipe.analyzedInstructions[0].steps" :key="index" class="instruction-step">
                {{ step.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecipeFullDetails, getUserRecipeDetails } from "../services/recipes.js";

export default {
  data() {
    return {
      recipe: null,
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      this.loading = true;
      const recipeId = this.$route.params.recipeId;
      const source = this.$route.name === 'user-recipe' ? 'db' : 'api';
      let response;

      if (source === 'db') {
        response = await getUserRecipeDetails(recipeId);
        if (response && response.recipe) {
          response = response.recipe; 
        }
      } else {
        response = await getRecipeFullDetails(recipeId);
        if (response && response.data) {
          response = response.data; 
        }
      }

      if (!response) {
        throw new Error("Recipe not found");
      }

      const processedRecipe = {
        id: response.id,
        title: response.title,
        image: response.image,
        readyInMinutes: response.readyInMinutes,
        aggregateLikes: response.aggregateLikes || 0,
        vegan: response.vegan === 1 || response.vegan === true,
        vegetarian: response.vegetarian === 1 || response.vegetarian === true,
        glutenFree: response.glutenFree === 1 || response.glutenFree === true,
        extendedIngredients: Array.isArray(response.extendedIngredients)
          ? response.extendedIngredients
          : JSON.parse(response.extendedIngredients || '[]'),
        analyzedInstructions: Array.isArray(response.analyzedInstructions)
          ? response.analyzedInstructions
          : JSON.parse(response.analyzedInstructions || '[]'),
        sourceName: response.sourceName || null,
        sourceUrl: response.sourceUrl || null,
      };

      this.recipe = processedRecipe;

    } catch (error) {
      this.error = error.message || "Failed to load the recipe.";
      console.error("Error in created hook:", error);
      this.$router.replace("/NotFound");
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-header {
  text-align: center;
}

.recipe-title {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.recipe-image {
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

.recipe-info-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.recipe-info {
  font-weight: bold;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.recipe-body {
  margin-top: 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.wrapped {
  width: 100%;
  margin-bottom: 20px;
}

.ingredients, .instructions {
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.ingredient-item {
  margin-bottom: 5px;
}

.instruction-step {
  margin-bottom: 10px;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .wrapper {
    flex-direction: row;
    justify-content: space-between;
  }

  .wrapped {
    width: 48%;
  }
}
</style>
