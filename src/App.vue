<template>
  <div id="app">
    <div id="nav">
      <!-- All Users -->
      <router-link exact :to="{ name: 'main' }" class="nav-link">Main Page</router-link>
      <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
      <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
      
      <!-- User not registered -->
      <span v-if="!$root.store.username" class="user-info">
        <span class="nav-text">Hello Guest</span>
        <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
        <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
      </span>
      
      <!-- Registered user -->
      <span v-else class="user-info">
        <span class="nav-text">Hello {{ $root.store.username }}</span>
        <b-button :class="['custom-nav-link']" @click="showNewRecipeModal = true">Add New Recipe</b-button>
        <div class="dropdown" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          <button class="nav-link">Personal</button>
          <div v-if="dropdownOpen" class="dropdown-content">
            <router-link :to="{ name: 'favorites' }" class="dropdown-link">My Favorite Recipes</router-link>
            <router-link :to="{ name: 'familyrecipes' }" class="dropdown-link">My Family Recipes</router-link>
            <router-link :to="{ name: 'myrecipes' }" class="dropdown-link">My Recipes</router-link>
          </div>
        </div>
        <button @click="Logout" class="nav-link">Logout</button>
      </span>
    </div>
    <router-view />
    <NewRecipeModal :show="showNewRecipeModal" @recipeCreated="fetchRecipes" @close="showNewRecipeModal = false" />
  </div>
</template>




<script>

import NewRecipeModal from './components/NewRecipeModal.vue';

export default {
  name: "App",
  components: {
    NewRecipeModal
  },

  data() {
    return {
      dropdownOpen: false,
      showNewRecipeModal: false
    };
  },
  methods: {
    openDropdown() {
      this.dropdownOpen = true;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.dropdownOpen = false;
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    fetchRecipes() {
      // פונקציה לעדכון רשימת המתכונים לאחר יצירת מתכון חדש
      this.$root.store.fetchRecipes();
    }
  }
  
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4a4a4a;
  min-height: 100vh;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white; 
}

.nav-link {
  font-weight: bold;
  color: #8b4513; 
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px; 
  background-color: #fff; 
  border: none;
  display: inline-block;
  cursor: pointer;
}

.custom-nav-link {
  font-weight: bold;
  color: #8b4513 ; 
  text-decoration: none;
  padding: 8px 16px ;
  transition: background-color 0.3s, color 0.3s ;
  border-radius: 5px ; 
  background-color: #fff ; 
  border: none ;
  display: inline-block;
  cursor: pointer ;
}

.custom-nav-link:hover {
  background-color: #74064f !important; 
  color: #fff !important;
}

.router-link-active, .router-link-exact-active {
  background-color: #cd5c5c; 
  //border-bottom: 2px solid #ff9933; 
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border-radius: 5px; 
}

.nav-text {
  font-weight: bold;
  color: #8b4513; 
  padding: 8px 16px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #cd5c5c; 
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px; 
}

.dropdown-content .dropdown-link {
  color: #fff; 
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  border-radius: 5px; 
}

.dropdown-content .dropdown-link:hover {
  background-color: #74064f;
  color: #fff;
}

.dropdown:hover .dropdown-content,
.dropdown-content.show {
  display: block;
}

button.nav-link, button.custom-nav-link {
  border: none;
  outline: none;
  font-weight: bold;
  color: #8b4513 ; 
  text-decoration: none;
  padding: 8px 16px ;
  transition: background-color 0.3s, color 0.3s ;
  border-radius: 5px ; 
  background-color: #fff ; 
}

button.nav-link:hover, button.custom-nav-link:hover {
  background-color: #74064f !important; 
  color: #fff !important;
}

.nav-link:hover{
  background-color: #74064f !important; 
  color: #fff !important;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  justify-content: flex-end;
}
</style>