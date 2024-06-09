<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id" cols="auto">
        <RecipePreview
          class="recipePreview"
          :recipe="r"
          @update-recipe="updateRecipe"
          @toggle-favorite="toggleFavorite"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
         // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3;
        const response = mockGetRecipesPreview(amountToFetch);

        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    updateRecipe(updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.$set(this.recipes, index, updatedRecipe);
      }
    },
    toggleFavorite(recipeId) {
      const index = this.recipes.findIndex(recipe => recipe.id === recipeId);
      if (index !== -1) {
        const isFavorite = this.$root.store.favorites.includes(recipeId);
        if (isFavorite) {
          this.$root.store.favorites = this.$root.store.favorites.filter(id => id !== recipeId);
        } else {
          this.$root.store.favorites.push(recipeId);
        }
        this.$set(this.recipes[index], 'isFavorite', !isFavorite);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.recipe-preview-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
