<template>
  <div class="container">
    <div v-if="recipe">
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
          <div class="wrapped ingredients">
            <h2>Ingredients:</h2>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
                class="ingredient-item"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped instructions">
            <h2>Instructions:</h2>
            <ol>
              <li v-for="(instruction, index) in recipe._instructions" :key="index" class="instruction-step">
                {{ instruction.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";

export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      console.log("Recipe ID from route params:", this.$route.params.recipeId);
      let response = mockGetRecipeFullDetails(this.$route.params.recipeId);
      console.log("Response from mockGetRecipeFullDetails:", response);

      if (!response || !response.data || !response.data.recipe) {
        console.error("Recipe not found, redirecting to NotFound");
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions =[],
        instructions ,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        glutenFree,
        vegan
      } = response.data.recipe;

      let _instructions = [];
      if (Array.isArray(analyzedInstructions)) {
        _instructions = analyzedInstructions
          .map((fstep) => {
            if (fstep.steps.length > 0) {
              return fstep.steps;
            }
            return [];
          })
          .reduce((a, b) => [...a, ...b], []);
      }

      this.recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        glutenFree,
        vegan
      };
      
      //this.recipe = _recipe;
      console.log("Recipe loaded:", this.recipe);
    } catch (error) {
      console.error("Error in created hook:", error);
      this.$router.replace("/NotFound");
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


