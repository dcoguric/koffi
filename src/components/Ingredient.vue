<template>
<div @click="toggleSelect()" :class="['ingredient', {'selected': this.selected}]">
      <img class="black" :src="'/icons/'+ ingredient.icon +'.png'" alt="">
      <img class="white" :src="'/icons/'+ ingredient.icon +'-white.png'" alt="">
      <h1>{{ingredient.name}}</h1>
    </div>
</template>

<style scoped>
.ingredient {
    margin: 0px;
    padding: 20px 10px;
    border-radius: 40px;
    background-color: #ebebeb;
    cursor: pointer;
    color: #000;
}

.black {
    display: inline-block;
}

.white {
    display: none;
}

.selected {
    background-color: #997D54;
    color: white;
}

.selected .white {
    display: inline-block;
}

.selected .black {
    display: none;
}

img {
  width: 48px;
  margin: 10px 0px;
}

h1 {
  font-size: 17px;
  font-family: 'Belanosima', sans-serif;
  font-weight: 400;
  width: 85px;
  margin: auto;
  text-justify: center;
}
</style>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Ingredient",
    props: [ 'ingredient' ],
    data() {
        return {
            selected: false
        }; 
    },
    methods: {
        toggleSelect() {
            this.selected = !this.selected;
            let ingredients = [];
            if (sessionStorage.getItem("current-ingredients") != null) {
                ingredients = JSON.parse(sessionStorage.getItem("current-ingredients"));
            }
            if (this.selected) {
                ingredients.push(this.$props['ingredient']['name']);
            } else {
                ingredients.splice(ingredients.indexOf(this.$props['ingredient']['name']), 1);
            }
            sessionStorage.setItem("current-ingredients", JSON.stringify(ingredients));
        }
    },
    created() {
        if (sessionStorage.getItem("current-ingredients") != null) {
            let ingredients = JSON.parse(sessionStorage.getItem("current-ingredients"));
            if (ingredients.includes(this.$props['ingredient']['name'])) this.selected = true;
        }
    }
}
</script>
