<template>
  <div class="container">
    <h1>My Recipes</h1>
    <NewRecipeModal @recipeCreated="fetchRecipes" />
    <div class="row">
      <div class="col-md-4" v-for="recipe in recipes" :key="recipe.title">
        <div class="card mb-4">
          <img :src="recipe.image" class="card-img-top" :alt="recipe.title">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-text">Ready in {{ recipe.readyInMinutes }} minutes</p>
            <p class="card-text">Likes: {{ recipe.aggregateLikes }}</p>
            <p class="card-text">Vegetarian: {{ recipe.vegetarian ? 'Yes' : 'No' }}</p>
            <p class="card-text">Vegan: {{ recipe.vegan ? 'Yes' : 'No' }}</p>
            <p class="card-text">Gluten-Free: {{ recipe.glutenFree ? 'Yes' : 'No' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewRecipeModal from '../components/NewRecipeModal.vue';

export default {
  components: {
    NewRecipeModal
  },
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
      this.recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    }
  }
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
