<template>
  <b-container>
    <h3 class="text-center mb-4">
    </h3>
    <b-row class="justify-content-center">
      <b-col v-for="r in recipes" :key="r.id" cols="12" md="6" class="d-flex justify-content-center mb-3">
        <RecipePreview
          :recipe="r"
          @update-recipe="updateRecipe"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateRecipe(updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        this.$set(this.recipes, index, updatedRecipe);
      }
    },
  }
};
</script>

<style scoped>
.recipe-preview {
  margin: 10px;
}
</style>
