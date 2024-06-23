<template>
  <div class="favorites-page">
    <h1 class="page-title">My Favorites</h1>
    <div v-if="favorites.length === 0">
      <p>No favorites yet.</p>
    </div>
    <recipe-preview-list v-else :recipes="favorites"></recipe-preview-list>
  </div>
</template>

<script>
import { getFavorites } from "../services/recipes.js";
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
    loadFavorites() {
      this.favorites = getFavorites();
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

</style>
