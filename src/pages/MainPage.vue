<template>
  <div class="container">
    <h1 class="title">Main Page</h1>

    <!-- Left Column: Random Recipes -->
    <div class="left-column">
      <h2>Explore Random Recipes</h2>
      <div v-if="randomRecipes.length > 0">
        <div v-for="recipe in randomRecipes" :key="recipe.id" class="random-recipe">
          <h3>{{ recipe.title }}</h3>
          <img :src="recipe.image" alt="Recipe Image" class="random-recipe-image">
          <p>{{ recipe.summary }}</p>
        </div>
      </div>
      <button @click="loadRandomRecipes" class="btn btn-primary mt-3">Load More Recipes</button>
    </div>

    <!-- Right Column: Last Viewed Recipes or Login -->
    <div class="right-column">
      <h2>Last Viewed Recipes</h2>
      <div v-if="isLoggedIn">
        <div v-if="lastViewedRecipes.length > 0">
          <div v-for="recipe in lastViewedRecipes" :key="recipe.id" class="last-viewed-recipe">
            <h3>{{ recipe.title }}</h3>
            <img :src="recipe.image" alt="Recipe Image" class="last-viewed-recipe-image">
            <p>{{ recipe.summary }}</p>
          </div>
        </div>
        <div v-else>
          <p>No recipes viewed yet.</p>
        </div>
      </div>
      <div v-else>
        <p>Please login to see your last viewed recipes.</p>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import { mapState } from 'vuex'; // Assuming Vuex for state management

export default {
  components: {
    RecipePreviewList
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.auth.isLoggedIn,
      lastViewedRecipes: state => state.recipes.lastViewedRecipes
    })
  },
  data() {
    return {
      randomRecipes: []
    };
  },
  methods: {
    async loadRandomRecipes() {
      try {
        // Simulate fetching random recipes from a service or API
        const response = await fetch('https://api.example.com/recipes/random');
        if (!response.ok) {
          throw new Error('Failed to fetch random recipes.');
        }
        const data = await response.json();
        this.randomRecipes = data.recipes;
      } catch (error) {
        console.error('Error loading random recipes:', error.message);
      }
    }
  },
  mounted() {
    this.loadRandomRecipes();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #343a40;
}

.left-column, .right-column {
  width: 48%;
}

.left-column h2, .right-column h2 {
  margin-bottom: 10px;
}

.random-recipe, .last-viewed-recipe {
  margin-bottom: 20px;
}

.random-recipe h3, .last-viewed-recipe h3 {
  font-size: 1.5rem;
}

.random-recipe-image, .last-viewed-recipe-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-column, .right-column {
    width: 100%;
  }
}
</style>
