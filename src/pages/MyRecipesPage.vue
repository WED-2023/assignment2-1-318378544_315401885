<template>
  <div>
    <h1 class="page-title">My Recipes:</h1>
    <div v-if="recipes.length === 0" >
      <h3 class="no-recipes-message">
        You don't have any recipes yet.
        Add new recipes using the "Add New Recipe" button.
      </h3>
    </div>
    <div v-else>
      <RecipePreviewList :recipes="recipes" />
    </div>
  </div>
</template>


<script>
import RecipePreviewList from '@/components/RecipePreviewList.vue';
import axios from 'axios';
import { getFavorites } from "../services/user.js";

export default {
  name: 'MyRecipesPage',
  components: {
    RecipePreviewList
  },
  data() {
    return {
      recipes: []
    };
  },
  async created() {
    await this.loadRecipes();
    await this.loadFavorites(); 
  },
  methods: {
    async loadRecipes() {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:3000/user/myRecipes`, { params: { userId } });
        this.recipes = response.data;
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
    },
    async loadFavorites() {
      try {
        const userId = localStorage.getItem('userId');
        const response = await getFavorites(userId);
        localStorage.setItem('favorites', JSON.stringify(response.data)); 
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }
  
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
.page-title {
  text-align: center;
  font-size: 2.5em;
  margin-top: 20px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}
.no-recipes-message{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px; 
  width: 100%;
}
</style>
