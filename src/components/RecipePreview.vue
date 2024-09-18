<template>
  <div :class="['recipe-preview', { viewed: recipe.viewed }]">
    <div class="recipe-body">
      <router-link
        :to="getRecipeLink"
        @click.native="markAsViewed"
      >
        <div class="image-container">
          <img :src="recipe.image" class="recipe-image" />
          <div class="overlay">
            <span>View Recipe</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="recipe-footer">
      <div class="recipe-info">
        <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
        </div>
        <div class="recipe-time">
          {{ recipe.readyInMinutes }} minutes
        </div>
      </div>
      <ul class="recipe-overview">
        <li>
          <span>Vegetarian:</span>
          <div class="check-box">
            <span v-if="recipe.vegetarian" class="check-mark">&#10003;</span>
          </div>
        </li>
        <li>
          <span>Vegan:</span>
          <div class="check-box">
            <span v-if="recipe.vegan" class="check-mark">&#10003;</span>
          </div>
        </li>
        <li>
          <span>Gluten Free:</span>
          <div class="check-box">
            <span v-if="recipe.glutenFree" class="check-mark">&#10003;</span>
          </div>
        </li>
      </ul>
      <div class="likes">
        <span>{{ recipe.aggregateLikes }} likes</span>
      </div>
      <div class="icon-container">
        <button @click="toggleFavorite" class="favorite-btn">
          <span v-if="finalIsFavorite" class="favorite-icon" :style="{ fontSize: favoriteIconSize + 'px' }">&#9733;</span>
          <span v-else class="favorite-icon" :style="{ fontSize: favoriteIconSize + 'px' }">&#9734;</span>
        </button>
        <span class="view-icon" :class="{ filled: recipe.viewed }">&#128065;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { addFavorite, getFavorites } from "../services/user.js";

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean, 
      default: null
    }
  },
  data() {
    return {
      localIsFavorite: false,
      favoriteIconSize: 35,
      imageLoading: true
    };
  },
  computed: {
    getRecipeLink() {
      const routeName = this.$route.name;

      if ((routeName === 'favorites' || routeName === 'main') && this.recipe.recipe_id) {
        return { name: 'favorite-recipe', params: { recipeId: this.recipe.recipe_id } };
      }
      else if ((routeName === 'main' || routeName === 'search') && this.recipe.id) {
        return { name: 'recipe', params: { recipeId: this.recipe.id } };
      }
      else if (routeName === 'myrecipes' || routeName === 'user-recipe') {
        return { name: 'user-recipe', params: { recipeId: this.recipe.id } };
      }
      else {
        return { name: 'recipe', params: { recipeId: this.recipe.id } };
      }
    },
    finalIsFavorite() {
      return this.isFavorite !== null ? this.isFavorite : this.localIsFavorite;
    }
  },
  async mounted() {
    this.image_load = true; 
    if (this.isFavorite === null) { 
      await this.checkFavorite();
    }
  },
  methods: {
    markAsViewed() {
      this.recipe.viewed = true;
      this.$emit('update-recipe', this.recipe);
    },
    async toggleFavorite() {
      if (!this.$root.store.username) {
      alert("You need to be logged in to add recipes to favorites."); // הצגת הודעה
      return;
      }
      if (this.localIsFavorite) {
        alert("This recipe is already in your favorites."); 
        return;
      }
      try {
        await addFavorite(this.recipe); 
        this.localIsFavorite = true;

        this.$emit('update-recipe', { ...this.recipe, isFavorite: true });

      } catch (error) {
        console.error("Error adding favorite:", error);
      }
    },
    async checkFavorite() {
      const userId = localStorage.getItem('userId'); 
      if (!userId) {
        this.localIsFavorite = false;
        return;
      }
      try {
        const favorites = await getFavorites(); 
        this.localIsFavorite = favorites.some(fav => fav.id === this.recipe.id);
      } catch (error) {
        console.error("Error checking favorites:", error);
      }
    }
  }
};
</script>



<style scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  width: 300px; 
  height: 450px; 
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: white; 
  transition: background-color 0.3s ease;
  text-decoration: none; 
  color: inherit; 
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px; 
  position: relative;
}
.recipe-preview .recipe-body .image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.recipe-preview .recipe-body .spinner-border {
  width: 3rem;
  height: 3rem;
}
.recipe-preview .recipe-body .recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer; 
}
.recipe-preview .recipe-body .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
.recipe-preview .recipe-body:hover .overlay {
  opacity: 1;
}
.recipe-preview .recipe-footer {
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}
.recipe-preview .recipe-footer .recipe-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
}
.recipe-preview .recipe-footer .recipe-title {
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 5px;
  max-height: 3em; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.recipe-preview .recipe-footer .recipe-time {
  font-size: 10pt;
  color: #888;
}
.recipe-preview .recipe-footer ul.recipe-overview {
  display: flex;
  flex-direction: column; 
  padding: 0;
  margin: 0;
  list-style: none;
  flex-grow: 1;
}
.recipe-preview .recipe-footer ul.recipe-overview li {
  display: flex;
  align-items: center;
  font-size: 10pt;
  color: #555;
  margin-bottom: 5px;
}
.check-box {
  width: 20px;
  height: 20px;
  border: 1px solid #555;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-mark {
  font-size: 14px;
  color: #4caf50; 
}
.likes {
  font-size: 12pt;
  color: #888;
}
.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; 
}
.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 35px; 
}
.favorite-icon {
  color: #ffcc00; 
}
.view-icon {
  font-size: 35px; 
  color: #888; 
}
.view-icon.filled {
  color: #b1ecb3; 
}
</style>

