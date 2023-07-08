<template>
  <div class="home">

    <div id="coffee-cup">
      <div class="lid">
        <svg id="svg-1" xmlns="http://www.w3.org/2000/svg" width="334" height="64" viewBox="0 0 334 64" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64H167H334L310.003 0H167H23.9967L0 64Z" fill="#1C1C1C"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64H167H334L310.003 0H167H23.9967L0 64Z" fill="#1C1C1C"/>
        </svg>
      </div>
      <div :class="['row', 'ingredients', {'showIngredients': showIngredients}]">
        <div v-for="ingredient in this.ingredients" class="ingredient col-6" :key="ingredient.id">
          <Ingredient :ingredient="ingredient"></Ingredient>
        </div>
      </div>
      <div class="not-lid">
        <div @click="chooseIngredients()" id="add-button">
          <svg id="svg-2" xmlns="http://www.w3.org/2000/svg" width="283" height="69" viewBox="0 0 283 69" fill="none">
            <path d="M9 69L0 0H283L273.5 69H9Z" fill="#D9D9D9"/>
          </svg>
          <h1 id="add-ingredients">Choose ingredients!</h1>
        </div>
        <div @click="coffeeTime()" id="coffee-button">
          <svg id="svg-3" xmlns="http://www.w3.org/2000/svg" width="281" height="152" viewBox="0 0 281 152" fill="none">
            <path d="M260 152H17.5L0 0H281L260 152Z" fill="#997D54"/>
          </svg>
          <h1 id="coffee-time">COFFEE TIME!</h1>
        </div>
        <svg id="svg-4" xmlns="http://www.w3.org/2000/svg" width="218" height="111" viewBox="0 0 218 111" fill="none">
          <path d="M20 111L4.5 25.6995L0 0H218L199.5 111H20Z" fill="#D9D9D9"/>
        </svg>
      </div>
    </div>

    <h4>{{errorMessage}}</h4>
  </div>
</template>

<style scoped>
  * {
    font-family: 'Belanosima', sans-serif;
  }

  .home {
    overflow: hidden;
  }

  .ingredients {
    margin: auto;
    width: 260px;
    height: 0px;
    overflow: auto;
    transition-duration: 1s;
  }

  .ingredients::-webkit-scrollbar {
    display: none;
  }

  .ingredient {
    margin: 3px 0px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #add-ingredients {
    position: relative;
    top: -50px;
    height: 0px;
    margin: 0px;
    color: #3e3e3e;
    font-size: 22px;
  }

  #add-button {
    cursor: pointer;
  }

  #coffee-cup {
    margin-top: 35px;
  }

  #coffee-time {
    position: relative;
    top: -100px;
    height: 0px;
    margin: 0px;
    color: white;
    font-size: 36px;
    font-weight: 600;
    pointer-events: none;
  }

  h4 {
    margin-top: 20px;
    height: 20px;
  }

  .showIngredients {
    height: 300px;
  }
</style>

<script>
import allIngredients from '../assets/ingredients.js';
import Ingredient from '../components/Ingredient.vue';

export default {
  name: 'HomeView',
  components: { Ingredient },
  data() {
    return {
      ingredients: [],
      showIngredients: false,
      bubbleUp: false,
      errorMessage: ""
    };
  },
  methods: {
    chooseIngredients() {
      this.showIngredients = !this.showIngredients;
    },
    coffeeTime() {
      if (this.showIngredients) return;
      let selected = JSON.parse(sessionStorage.getItem("current-ingredients"));
      if (selected == null || selected.length == 0) {
        this.errorMessage = "Choose ingredients :3";
        setTimeout(() => {
          this.errorMessage = "";
        }, 1500);
        return;
      }
      this.$router.push('/loading');
    }
  },
  created() {
    this.ingredients = allIngredients;
  }
}
</script>
