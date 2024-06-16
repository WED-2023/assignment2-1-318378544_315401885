<template>
  <div class="recipe-preview-list">
    <RecipePreview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import RecipePreview from './RecipePreview.vue';

export default {
  name: 'NewRecipeList',
  components: {
    RecipePreview
  },
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
      this.recipes = recipes;
    }
  }
};
</script>

<style scoped>
.recipe-preview-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
