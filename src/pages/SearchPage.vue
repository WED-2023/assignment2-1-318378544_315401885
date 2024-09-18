<!-- <template>
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
      <select id="resultsLimit" class="form-select w-auto ms-2" v-model="resultsLimit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <div class="input-group-append">
        <button class="btn btn-primary" @click="searchRecipes">Search</button>
      </div>
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
</template> -->


<!-- <script>
import { searchRecipe } from "../services/recipes.js";
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
    async searchRecipes() {
    this.searchPerformed = false; // Reset search performed status
    this.results = []; // Clear previous results
    this.sortOrder = 'none'; // Reset sort order to default
    if (this.searchQuery.length > 0) {
      try {
        const response = await searchRecipe(this.searchQuery, '', '', '', this.resultsLimit);
        this.results = response;
        this.lastSearchResults = this.results;
        this.searchPerformed = true; // Set search performed status to true after results are fetched
        this.saveLastSearch();
      } catch (error) {
        console.error('Error during recipe search:', error);
        this.results = [];
        this.searchPerformed = true; // Even on error, mark search as performed
      }
    } else {
      this.results = [];
      this.searchPerformed = true; // Mark search as performed even if query is empty
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
</script> -->

<template>
  <div class="container my-4">
    <h1 class="mb-4 text-center">Search Recipes</h1>
    <div class="input-group mb-3 search-bar">
      <input 
        type="text" 
        class="form-control rounded-pill shadow-sm" 
        v-model="searchQuery" 
        placeholder="Search for recipes..." 
        @keyup.enter="searchRecipes" 
      />
      <select id="resultsLimit" class="form-select w-auto ms-2 rounded-pill shadow-sm" v-model="resultsLimit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <div class="input-group-append">
        <button class="btn btn-primary rounded-pill shadow-sm" @click="searchRecipes">Search</button>
      </div>
    </div>

    <div class="filters-row d-flex flex-wrap mb-3 justify-content-center">
      <div class="filter-item me-3">
        <label for="cuisine" class="form-label">Cuisine:</label>
        <select id="cuisine" class="form-select w-auto rounded-pill shadow-sm" v-model="cuisine">
          <option value="">All Cuisines</option>
          <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
        </select>
      </div>

      <div class="filter-item me-3">
        <label for="diet" class="form-label">Diet:</label>
        <select id="diet" class="form-select w-auto rounded-pill shadow-sm" v-model="diet">
          <option value="">All Diets</option>
          <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
        </select>
      </div>

      <div class="filter-item me-3">
        <label for="intolerance" class="form-label">Intolerance:</label>
        <select id="intolerance" class="form-select w-auto rounded-pill shadow-sm" v-model="intolerance">
          <option value="">All Intolerances</option>
          <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
        </select>
      </div>
    </div>

    <div v-if="results.length > 0" class="sort-options mb-3 text-center">
      <label for="sortOrder" class="form-label">Sort by:</label>
      <select id="sortOrder" class="form-select w-auto rounded-pill shadow-sm d-inline-block" v-model="sortOrder">
        <option value="none">None</option>
        <option value="time">Preparation Time</option>
        <option value="likes">Popularity (Likes)</option>
      </select>
    </div>

    <div v-if="currentSearchQuery" class="current-search-query mb-3 text-center">
        <h4>Results for: "{{ currentSearchQuery }}"</h4>
    </div>

    <div v-if="isLoading" class="alert alert-info w-100 text-center rounded-pill shadow-sm">Loading recipes...</div>

    <div v-if="!isLoading && results.length === 0 && searchPerformed" class="alert alert-warning w-100 text-center rounded-pill shadow-sm">No results found.</div>
      <div v-if="!isLoading && results.length > 0" class="search-results d-flex flex-wrap justify-content-center">
        <RecipePreview 
          v-for="recipe in sortedResults" 
          :key="recipe.id" 
          :recipe="recipe"
          :isFavorite="recipe.isFavorite" 
          @update-recipe="updateRecipe"
          @toggle-favorite="toggleFavorite"
        />
      </div>

    <div v-if="!isLoading && !searchPerformed && lastSearchResults.length > 0" class="last-search-results mt-4">
      <h2 class="mb-4 text-center">Last Search Results</h2>
      <div class="search-results d-flex flex-wrap justify-content-center">
        <RecipePreview 
          v-for="recipe in lastSearchResults" 
          :key="recipe.id" 
          :recipe="recipe"
          :isFavorite="recipe.isFavorite" 
          @update-recipe="updateRecipe"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>

  </div>
</template>




<script>
import { searchRecipe } from "../services/recipes.js";
import RecipePreview from '@/components/RecipePreview.vue';
import filters from '@/assets/filters.json';
import { getFavorites } from "../services/user.js"; 

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
     searchPerformed: false,
     isLoading: false, 
     cuisine: '',
     diet: '',
     intolerance: '',
     cuisines: filters.cuisines, 
     diets: filters.diets, 
     intolerances: filters.intolerances, 
     currentSearchQuery: '', 
     favorites: [], 
   };
 },

  created() {
    this.loadLastSearch();
    this.loadFavorites(); 
  },
  methods: {
    async searchRecipes() {
      this.searchPerformed = true;
      this.results = [];
      this.sortOrder = 'none';
      this.isLoading = true;

      if (this.searchQuery.length > 0) {
        try {
          const response = await searchRecipe(this.searchQuery, this.cuisine, this.diet, this.intolerance, this.resultsLimit);
                    
          let favorites = [];
          // בדיקה אם המשתמש מחובר
          if (this.$root.store.username) {
            favorites = await getFavorites();
          }
          
          this.results = response.map(recipe => ({
            ...recipe,
            isFavorite: favorites.some(fav => fav.recipe_id === recipe.id) // בדיקה אם המתכון במועדפים
          }));
          
          this.lastSearchResults = this.results;
          this.currentSearchQuery = this.searchQuery;
          this.searchQuery = '';
          this.saveLastSearch();
        } catch (error) {
          console.error('Error during recipe search:', error);
          this.results = [];
        } finally {
          this.isLoading = false;
        }
      } else {
        this.results = [];
        this.isLoading = false;
      }
    },
   async loadFavorites() {
      if (!this.$root.store.username) {
        this.favorites = []; 
        return;
      }
      try {
        const favorites = await getFavorites();
        this.favorites = favorites || [];
      } catch (error) {
        console.error("Error loading favorites:", error);
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
      console.log(`Toggle favorite for recipe ID: ${recipeId}`);
    },
    saveLastSearch() {
      sessionStorage.setItem('lastSearchResults', JSON.stringify(this.lastSearchResults));
      sessionStorage.setItem('lastResultsLimit', this.resultsLimit);
      sessionStorage.setItem('sortOrder', this.sortOrder);
    },
  async loadLastSearch() {
    const lastSearchResults = sessionStorage.getItem('lastSearchResults');
    const lastResultsLimit = sessionStorage.getItem('lastResultsLimit');
    const sortOrder = sessionStorage.getItem('sortOrder');

    if (lastSearchResults) {
      this.lastSearchResults = JSON.parse(lastSearchResults);
      
      try {
        const favorites = await getFavorites();
        
        this.lastSearchResults = this.lastSearchResults.map(recipe => ({
          ...recipe,
          isFavorite: favorites.some(fav => fav.recipe_id === recipe.id) // בדיקה אם המתכון במועדפים
        }));
      } catch (error) {
        console.error("Error loading favorites for last search results:", error);
      }
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px; 
  justify-items: center; 
  padding: 20px 0; 
}

.loading-indicator {
  text-align: center;
  margin-top: 20px;
  font-size: 1.5em;
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

