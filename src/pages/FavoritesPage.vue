<template>
  <div class="favorites-page">
    <h1 class="page-title">My Favorites</h1>
    <div v-if="favorites.length === 0">
      <h3 class = "no-favorites-container">You haven't added any recipes to your favorites yet</h3>
    </div>
    <recipe-preview-list v-else 
      :recipes="favorites"
      :favorites="favorites">
    </recipe-preview-list>
  </div>
</template>

<script>
import { getFavorites } from "../services/user.js";
import RecipePreviewList from '@/components/RecipePreviewList.vue';

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      favorites: []
    };
  },
  methods: {
    async loadFavorites() {
      try {
        const favorites = await getFavorites();
        this.favorites = favorites;
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  },
  mounted() {
    this.loadFavorites();
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

.no-favorites-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px; 
  width: 100%;
}
</style>
