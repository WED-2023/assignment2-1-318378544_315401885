<template>
    <div>
      <div class="recipes-container" v-if="recipes.length">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
          <img :src="recipe.image" alt="recipe image" class="recipe-image"/>
          <h2 class="recipe-title">{{ recipe.name }}</h2>
          <p class="recipe-info">By: {{ recipe.character }}</p>
          <p class="recipe-info">Occasion: {{ recipe.occasion }}</p>
          <button @click="toggleDetails(recipe.id)">
            {{ recipe.showDetails ? 'Show Less' : 'Show More' }}
          </button>
          <div v-if="recipe.showDetails" class="recipe-details">
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
              <li v-for="instruction in recipe.instructions" :key="instruction">{{ instruction }}</li>
            </ol>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No recipes found</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipes: {
        type: Array,
        required: true
      }
    },
    methods: {
      toggleDetails(id) {
        const recipe = this.recipes.find(recipe => recipe.id === id);
        recipe.showDetails = !recipe.showDetails;
      }
    }
  };
  </script>
  
  <style scoped>
  .recipes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .recipe-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
  }
  
  .recipe-card:hover {
    transform: scale(1.05);
  }
  
  .recipe-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  
  .recipe-title {
    font-size: 1.5em;
    margin: 0.5em 0;
    text-align: center;
    font-weight: 700;
  }
  
  .recipe-info {
    font-size: 1em;
    margin: 0.5em 0;
    text-align: center;
    font-weight: 400;
  }
  
  .recipe-card button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #cd5c5c;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
  
  .recipe-card button:hover {
    background-color: #74064f;
  }
  
  .recipe-details {
    margin-top: 20px;
    text-align: left;
    width: 100%;
  }
  
  .recipe-details h3 {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .recipe-details ul,
  .recipe-details ol {
    padding-left: 20px;
    margin: 0;
  }
  </style>