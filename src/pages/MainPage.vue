<template>
  <div class="main-page">
    <h1 class="page-title">Main Page</h1>
    <div class="row">
      <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
        <h2 class="favorites-title">Explore these Recipes:</h2>
        <div v-if="isRandomLoading" class="loading-indicator mb-3">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading recipes...
        </div>
        <RecipePreviewList v-else :recipes="randomRecipes" title="Explore these recipes:" />
        <button @click="getRandomRecipes" class="btn btn-primary mt-3 refresh-button">Refresh Recipes</button>
      </div>
      <div class="col-md-6 mb-4 d-flex flex-column align-items-center justify-content-start">
        <div class="mt-0 w-100">
          <div v-if="!$root.store.username">
            <LoginForm @login-success="handleLoginSuccess" />
          </div>
          <div v-else>
            <h2 class="favorites-title">Favorite Recipes:</h2>
            <div v-if="isFavoritesLoading" class="loading-indicator mb-3">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading favorites...
            </div>
            <div v-else-if="favorites.length">
              <RecipePreviewList :recipes="favorites" />
            </div>
            <div v-else>
              <h3 class="no-favorites-message">You haven't added any recipes to your favorites yet</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import RecipePreviewList from "../components/RecipePreviewList";
import { getFavorites } from "../services/user.js"; 
import { getRandomRecipes } from "../services/recipes.js"; 
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    RecipePreviewList,
    LoginForm
  },
  data() {
    return {
      allRecipes: [],
      randomRecipes: [],
      favorites: [],
      isRandomLoading: false, 
      isFavoritesLoading: false, 
    };
  },
  async mounted() {
    this.getRandomRecipes();
    if (this.$root.store.username) {
      await this.loadFavorites();
    }
  },
  methods: {
    async getRandomRecipes() {
      this.isRandomLoading = true; 
      try {
        const response = await getRandomRecipes(3);
        this.randomRecipes = response;
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      } finally {
        this.isRandomLoading = false; 
      }
    },
    async loadFavorites() {
      if (!this.$root.store.username) {
        return;
      }
      this.isFavoritesLoading = true; 
      try {
        const favorites = await getFavorites();
        this.favorites = this.getRandomItems(favorites || [], 3); 
      } catch (error) {
        console.error("Error loading favorites:", error);
      } finally {
        this.isFavoritesLoading = false; 
      }
    },
    getRandomItems(array, num) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, num);
    },
    handleLoginSuccess(username) {
      this.$root.store.login(username);
      this.$router.go();
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title, .favorites-title {
  text-align: center;
  font-size: 2.5em;
  margin-top: 20px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}

.no-favorites-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px; 
  width: 100%;
  font-size: 1.5em;
  color: #2c3e50;
  margin-top: 20px;
  text-align: center;
}

.loading-indicator {
  text-align: center;
  margin: 10px 0;
  font-size: 1.2em;
  color: #007bff;
}

.row {
  align-items: flex-start;
}

.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.recipe-preview-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center;
}

.recipe-preview-list > * {
  flex: 1 1 calc(50% - 10px);
  max-width: 400px;
  box-sizing: border-box;
}

.refresh-button {
  margin-top: 20px;
}

.refresh-button:hover {
  background-color: #0056b3;
}
</style>
