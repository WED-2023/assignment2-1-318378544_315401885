<template>
  <div class="container text-center">
    <h1 class="title my-4">Main Page</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <RecipePreviewList :recipes="randomRecipes" title="Explore these recipes" />
        <button @click="getRandomRecipes" class="btn btn-primary mt-3">Refresh Recipes</button>
      </div>
      <div class="col-md-6 mb-4 d-flex flex-column align-items-center justify-content-start">
        <div class="mt-5">
          <div v-if="!$root.store.username">
            <form @submit.prevent="login" class="login-form text-center">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary mt-2">Login</button>
            </form>
            <p class="mt-2">
              Do not have an account yet? <router-link to="/register">Register here</router-link>
            </p>
          </div>
          <div v-else>
            <RecipePreviewList
              :recipes="lastWatchedRecipes"
              title="Last watched recipes"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import { mockGetRecipesPreview } from "../services/recipes.js";
import { mockLogin } from "../services/auth.js";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      allRecipes: [],
      randomRecipes: [],
      lastWatchedRecipes: [],
      username: '',
      password: ''
    };
  },
  async mounted() {
    await this.fetchAllRecipes();
    this.getRandomRecipes();
    this.getLastWatchedRecipes();
  },
  methods: {
    async fetchAllRecipes() {
      try {
        const response = mockGetRecipesPreview(10);
        this.allRecipes = response.data.recipes;
      } catch (error) {
        console.error(error);
      }
    },
    getRandomRecipes() {
      this.randomRecipes = this.getRandomItems(this.allRecipes, 3);
    },
    getLastWatchedRecipes() {
      const response = mockGetRecipesPreview(3);
      this.lastWatchedRecipes = response.data.recipes;
    },
    getRandomItems(array, num) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, num);
    },
    async login() {
      try {
        const success = true;
        const response = mockLogin(this.username, this.password, success);

        if (success) {
          this.$root.store.login(this.username);
          this.username = '';
          this.password = '';
          this.$router.go();
        } else {
          this.form.submitError = 'Login failed';
        }
      } catch (err) {
        console.log(err);
        this.form.submitError = 'Login failed';
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2.5rem;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.refresh-button {
  display: block;
  margin: 10px auto;
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
