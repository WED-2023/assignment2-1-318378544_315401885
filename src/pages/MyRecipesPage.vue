<template>
  <div>
    <h1 class="page-title">My Recipes</h1>
    <NewRecipePreview />
  </div>
</template>

<script>
import NewRecipePreview from '@/components/NewRecipePreview.vue';

export default {
  name: 'MyRecipesPage',
  components: {
    NewRecipePreview
  }
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 2.5em;
  margin-top: 20px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}
</style>


