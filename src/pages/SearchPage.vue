<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <div class="search-bar">
      <input v-model="query" @input="searchRecipes" placeholder="Search for recipes..." />
      <select v-model="resultsLimit" @change="searchRecipes">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    <div class="search-results">
      <div v-if="results.length === 0">No results found.</div>
      <div v-for="recipe in results" :key="recipe.id" class="recipe-preview">
        <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" class="recipe-image">
        <h2>{{ recipe.title }}</h2>
        <p><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</p>
        <p><strong>Likes:</strong> {{ recipe.aggregateLikes }}</p>
        <p v-html="recipe.summary"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      results: [],
      resultsLimit: 5,
      allResults: [] // To store all recipes from JSON data
    };
  },
  mounted() {
    // Load recipes from JSON data on component mount
    this.loadRecipes();
    this.loadLastSearch();
  },
  methods: {
    async loadRecipes() {
      try {
        // Fetch recipe data from JSON files
        let response1 = await fetch('recipe_full_view.json');
        let response2 = await fetch('recipe_preview.json');

        let data1 = await response1.json();
        let data2 = await response2.json();

        // Combine data from both JSON files
        this.allResults = data1.concat(data2);

        // Initially display all recipes
        this.results = this.allResults.slice(0, this.resultsLimit);
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    },
    searchRecipes() {
      if (this.query.length > 0) {
        // Filter recipes based on search query
        this.results = this.allResults
          .filter(recipe => recipe.title.toLowerCase().includes(this.query.toLowerCase()))
          .slice(0, this.resultsLimit);

        this.saveLastSearch();
      } else {
        this.results = [];
      }
    },
    saveLastSearch() {
      // Save search query and results limit to localStorage
      localStorage.setItem('lastSearchQuery', this.query);
      localStorage.setItem('lastResultsLimit', this.resultsLimit);
    },
    loadLastSearch() {
      // Load previous search query and results limit from localStorage
      const lastSearchQuery = localStorage.getItem('lastSearchQuery');
      const lastResultsLimit = localStorage.getItem('lastResultsLimit');

      if (lastSearchQuery) {
        this.query = lastSearchQuery;
      }

      if (lastResultsLimit) {
        this.resultsLimit = parseInt(lastResultsLimit, 10);
      }

      // Perform search with loaded query
      this.searchRecipes();
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.search-bar {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-results {
  width: 100%;
  max-width: 400px;
}

.recipe-preview {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.recipe-image {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
