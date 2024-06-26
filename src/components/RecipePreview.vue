
<template>
  <div :class="['recipe-preview', { viewed: recipe.viewed }]">
    <div class="recipe-body">
      <router-link
        :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
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
          <span v-if="isFavorite" class="favorite-icon" :style="{ fontSize: favoriteIconSize + 'px' }">&#9733;</span>
          <span v-else class="favorite-icon" :style="{ fontSize: favoriteIconSize + 'px' }">&#9734;</span>
        </button>
        <span class="view-icon" :class="{ filled: recipe.viewed }">&#128065;</span>
      </div>
    </div>
  </div>
</template>



<script>
import { addFavorite, getFavorites } from "../services/recipes.js";

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
    
  },
  data() {
    return {
      //image_load: false,
      isFavorite: false,
      favoriteIconSize: 35, // הוספת משתנה לגודל הכוכב
    };
  },
  mounted() {
    //this.axios.get(this.recipe.image).then((i) => {
    // this.image_load = true;
    //});

    this.image_load = true; // סימולציה של טעינת התמונה
    this.checkFavorite();
  },
  methods: {
    markAsViewed() {
      this.recipe.viewed = true;
      this.$emit('update-recipe', this.recipe); // שליחת עדכון למתכון שנצפה
      console.log(recipe.viewed)
    },
    toggleFavorite() {
      addFavorite(this.recipe);
      this.isFavorite = true;
    },
    checkFavorite() {
      const favorites = getFavorites();
      this.isFavorite = favorites.some(fav => fav.id === this.recipe.id);
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  width: 300px; /* גודל קבוע לכל הקופסאות */
  height: 450px; /* גובה מוגדל */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: white; /* צבע רקע רגיל */
  transition: background-color 0.3s ease; /* הוספת מעבר חלק */
  text-decoration: none; /* לבטל קו תחתון על הבלוק */
  color: inherit; /* לשמור על הצבע הנוכחי */
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px; /* גובה קבוע לתמונה */
  position: relative;
}
.recipe-preview .recipe-body .image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.recipe-preview .recipe-body .recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer; /* סימון שהתמונה לחיצה */
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
  text-align: center; /* יישור הטקסט */
}
.recipe-preview .recipe-footer .recipe-title {
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 5px;
  max-height: 3em; /* גובה מקסימלי */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* הגבלת מספר השורות */
  -webkit-box-orient: vertical;
}
.recipe-preview .recipe-footer .recipe-time {
  font-size: 10pt;
  color: #888;
}
.recipe-preview .recipe-footer ul.recipe-overview {
  display: flex;
  flex-direction: column; /* שינוי לעמודה כדי שהמאפיינים יוצגו אחד אחרי השני */
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
  color: #4caf50; /* צבע ירוק לסימן וי */
}
.likes {
  font-size: 12pt;
  color: #888;
}
.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* כדי לוודא שזה נמצא בתחתית */
}
.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 35px; /* שינוי גודל הכוכב */
}
.favorite-icon {
  color: #ffcc00; /* צבע כוכב */
}
.view-icon {
  font-size: 35px; /* גודל אייקון העין */
  color: #888; /* צבע העין במצב רגיל */
}
.view-icon.filled {
  color: #b1ecb3; /* צבע העין במצב נצפה */
}
</style>

