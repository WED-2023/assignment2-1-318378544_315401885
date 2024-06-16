<template>
  <div>
    <h1>My Recipes</h1>
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
/* הוסף כאן סגנונות מותאמים אישית לדף שלך */
</style>


