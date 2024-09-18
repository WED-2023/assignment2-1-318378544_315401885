<template>
  <div>
    <h1 class="page-title">Friends Recipes</h1>
    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2020/11/FriendsThanksgiving-1606447619.jpg?w=1296" alt="Friends Thanksgiving" class="page-image"/>
    <FamilyRecipes :recipes="recipes" />
  </div>
</template>

<script>
import { fetchFamilyRecipes } from "../services/recipes.js";
import FamilyRecipes from "../components/FamilyRecipesPreview.vue"; 

export default {
  components: {
    FamilyRecipes
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    loadRecipes() {
      const recipes = fetchFamilyRecipes();
      this.recipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
    }
  },
  mounted() {
    this.loadRecipes();
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

.page-image {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
