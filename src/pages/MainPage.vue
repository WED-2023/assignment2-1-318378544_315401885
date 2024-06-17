<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="columns">
      <div class="column left-column">
        <RecipePreviewList title="Explore this recipes" class="RandomRecipes center" />
        <button @click="getRandomRecipes" class="refresh-button">Refresh Recipes</button>
      </div>
      <div class="column right-column">
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
        {{ !$root.store.username }}
      <RecipePreviewList
        title="Last watched recipes"
        :class="{
          RandomRecipes: true,
          blur: !$root.store.username,
      }"
      disabled
    ></RecipePreviewList>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</div>
</div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      RandomRecipes: []
    };
  },
  mounted() {
    this.getRandomRecipes();
  },
  methods: {
    getRandomRecipes() {
      this.RandomRecipes = [
        {id: 1, title: "Random Recipe 1"},
        { id: 2, title: "Random Recipe 2" },
        { id: 3, title: "Random Recipe 3" }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.columns {
  display: flex;
  width: 100%;
}

.column {
  flex: 1;
  padding: 10px;
}

.left-column {
  border-right: 1px solid #ccc;
}

.right-column {
  border-left: 1px solid #ccc;
}

.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.login-button {
  display: block;
  margin-bottom: 10px;
}

.refresh-button {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.refresh-button:hover {
  background-color: #0056b3;
}
</style>
