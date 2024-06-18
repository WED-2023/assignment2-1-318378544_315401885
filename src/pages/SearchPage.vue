<template>
  <div class="container my-4">
    <h1 class="mb-4">Search Recipes</h1>
    <div class="input-group mb-3">
      <input 
        type="text" 
        class="form-control" 
        v-model="searchQuery" 
        placeholder="Search for recipes..." 
        @keyup.enter="searchRecipes"
      />
      <div class="input-group-append">
        <button class="btn btn-primary" @click="searchRecipes">Search</button>
      </div>
    </div>
    <div v-if="searchPerformed && results.length > 0" class="mb-3 d-flex align-items-center">
      <label for="resultsLimit" class="form-label me-2">Number of results:</label>
      <select id="resultsLimit" class="form-select w-auto" v-model="resultsLimit" @change="searchRecipes">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    <div v-if="searchPerformed && results.length > 0" class="mb-3 d-flex align-items-center">
      <label for="sortOrder" class="form-label me-2">Sort by:</label>
      <select id="sortOrder" class="form-select w-auto" v-model="sortOrder" @change="sortResults">
        <option value="none">No Sorting</option>
        <option value="time">Preparation Time</option>
        <option value="likes">Likes</option>
      </select>
    </div>
    <div v-if="results.length === 0 && searchPerformed" class="alert alert-warning w-100 text-center">No results found.</div>
    <div v-else-if="!searchPerformed" class="alert alert-info w-100 text-center">Please enter a search query to find recipes.</div>
    <div class="search-results d-flex flex-wrap justify-content-center">
      <RecipePreview 
        v-for="recipe in sortedResults" 
        :key="recipe.id" 
        :recipe="recipe"
        @update-recipe="updateRecipe"
        @toggle-favorite="toggleFavorite"
      />
    </div>
    <div v-if="lastSearchResults.length > 0" class="last-search-results mt-4">
      <h2 class="mb-4">Last Search Results</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <RecipePreview 
          v-for="recipe in lastSearchResults" 
          :key="recipe.id" 
          :recipe="recipe"
          @update-recipe="updateRecipe"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mockSearchRecipes } from "../services/recipes.js";
import RecipePreview from '@/components/RecipePreview.vue';

export default {
  name: 'SearchPage',
  components: {
    RecipePreview
  },
  data() {
    return {
      searchQuery: '',
      results: [],
      lastSearchResults: [],
      resultsLimit: 5,
      sortOrder: 'none',
      searchPerformed: false
    };
  },
  created() {
    this.loadLastSearch();
  },
  methods: {
    searchRecipes() {
      this.searchPerformed = true;
      this.sortOrder = 'none'; // Reset sort order to default
      if (this.searchQuery.length > 0) {
        const response = mockSearchRecipes(this.searchQuery, this.resultsLimit);
        this.results = response.data.recipes;
        this.lastSearchResults = this.results;
        this.saveLastSearch();
      } else {
        this.results = [];
      }
    },
    sortResults() {
      this.saveLastSearch();
    },
    updateRecipe(updatedRecipe) {
      const index = this.results.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.results.splice(index, 1, updatedRecipe);
      }
      const lastIndex = this.lastSearchResults.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (lastIndex !== -1) {
        this.lastSearchResults.splice(lastIndex, 1, updatedRecipe);
      }
    },
    toggleFavorite(recipeId) {
      // Implement the logic for toggling favorite status
      console.log(`Toggle favorite for recipe ID: ${recipeId}`);
    },
    saveLastSearch() {
      localStorage.setItem('lastSearchResults', JSON.stringify(this.lastSearchResults));
      localStorage.setItem('lastResultsLimit', this.resultsLimit);
      localStorage.setItem('sortOrder', this.sortOrder);
    },
    loadLastSearch() {
      const lastSearchResults = localStorage.getItem('lastSearchResults');
      const lastResultsLimit = localStorage.getItem('lastResultsLimit');
      const sortOrder = localStorage.getItem('sortOrder');

      if (lastSearchResults) {
        this.lastSearchResults = JSON.parse(lastSearchResults);
      }

      if (lastResultsLimit) {
        this.resultsLimit = parseInt(lastResultsLimit, 10);
      }

      if (sortOrder) {
        this.sortOrder = sortOrder;
      }
    }
  },
  computed: {
    sortedResults() {
      if (this.sortOrder === 'time') {
        return [...this.results].sort((a, b) => a.readyInMinutes - b.readyInMinutes);
      } else if (this.sortOrder === 'likes') {
        return [...this.results].sort((a, b) => b.aggregateLikes - a.aggregateLikes);
      }
      return this.results;
    }
  }
};
</script>

<style scoped>
.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.last-search-results {
  width: 100%;
}

.alert-info, .alert-warning {
  width: 100%;
  text-align: center;
}

.mb-3.d-flex {
  display: flex;
  align-items: center;
}

.me-2 {
  margin-right: 0.5rem;
}

.w-auto {
  width: auto;
}
</style>
