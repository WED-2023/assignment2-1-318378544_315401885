<template>
    <b-modal v-model="showModal" title="Create New Recipe" @close="$emit('close')">
      <form @submit.prevent="submitRecipe">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="newRecipe.title" type="text" class="form-control" id="title" required>
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image URL</label>
          <input v-model="newRecipe.image" type="url" class="form-control" id="image" required>
        </div>
        <div class="mb-3">
          <label for="readyInMinutes" class="form-label">Ready in Minutes</label>
          <input v-model="newRecipe.readyInMinutes" type="number" class="form-control" id="readyInMinutes" required>
        </div>
        <div class="form-check">
          <input v-model="newRecipe.vegetarian" type="checkbox" class="form-check-input" id="vegetarian">
          <label class="form-check-label" for="vegetarian">Vegetarian</label>
        </div>
        <div class="form-check">
          <input v-model="newRecipe.vegan" type="checkbox" class="form-check-input" id="vegan">
          <label class="form-check-label" for="vegan">Vegan</label>
        </div>
        <div class="form-check">
          <input v-model="newRecipe.glutenFree" type="checkbox" class="form-check-input" id="glutenFree">
          <label class="form-check-label" for="glutenFree">Gluten-Free</label>
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">Ingredients</label>
        <textarea v-model="ingredientsInput" class="form-control" id="ingredients" rows="3" placeholder="Enter ingredients, each on a new line" required></textarea>
        </div>
        <div class="mb-3">
          <label for="instructions" class="form-label">Instructions</label>
        <textarea v-model="instructionsInput" class="form-control" id="instructions" rows="3" placeholder="Enter instructions, each on a new line" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </b-modal>
  </template>
  
  
  <script>

  import { addNewRecipe } from '../services/recipes.js';
  
  export default {
    props: ['show'],
    data() {
      return {
        showModal: this.show,
        newRecipe: {
          id: Date.now(),
          isUserCreated: true,
          title: "",
          image: "",
          readyInMinutes: 0,
          aggregateLikes: 0,
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          extendedIngredients: [],
          instructions: []
        },
        ingredientsInput: "",
        instructionsInput: "" 
      };
    },
    watch: {
      show(value) {
        this.showModal = value;
      },
      showModal(value) {
        if (!value) {
          this.$emit('close');
        }
      }
    },
  methods: {
    async submitRecipe() {
      this.newRecipe.extendedIngredients = this.ingredientsInput.split('\n').map((ingredient, index) => ({
        id: index,
        original: ingredient.trim()
      }));

      this.newRecipe.analyzedInstructions = [
        {
          name: "Instructions",
          steps: this.instructionsInput.split('\n').map((step, index) => ({
            number: index + 1,
            step: step.trim()
          }))
        }
      ];

      this.newRecipe.userId = localStorage.getItem('userId');

      try {
        await addNewRecipe(this.newRecipe);
        this.showModal = false;
        this.$emit('recipeCreated', this.newRecipe);
        this.$emit('close');
      } catch (error) {
        console.error("Error submitting new recipe:", error);
      }
    }
  }
  };
  </script>
  
  <style scoped>
  .form-label {
    font-weight: bold;
  }
  .form-check {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .form-check-input {
    margin-right: 10px;
  }
  </style>
  