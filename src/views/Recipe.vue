<template>
<div>
<h5 v-show="error">No recipe matches those ingredient :(</h5>
<div id="recipe" v-show="!error">
    <h1>{{recipe.name}}</h1>
    <img class="coffee-img" :src="'/images/' + recipe.name.toLowerCase() + '.jpg'" alt="">

    <div id="estimated-time">
        <img src="@/assets/coffee-time.png" alt="">
        <h3>Prep time: {{prepTime}}</h3>
    </div>

    <div id="show-instructions-arrow" @click="showInstructionsMethod()">
        <h4>show instructions</h4>
        <img :class="['arrow-img', {'rotate': showInstructions}]" src="@/../public/icons/arrow-down.png" alt="">
    </div>

    <ol id="show-instructions">
        <li v-for="step in recipe.instructions" :key="step">{{step}}</li>
    </ol>

    <button type="button" @click="doneButton()">
        Done
    </button>
</div>
</div>
</template>

<style scoped>
    #estimated-time {
        margin: 5px 0px;
        display: flex;
    }

    #estimated-time img {
        width: 50px;
        height: 50px;
    }

    #estimated-time h3 {
        margin-top: 8px;
        margin-left: 10px;
    }

    h5 {
        height: 200px;
        display: flex;
        align-items: center;
        margin: auto;
    }

    #recipe {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .coffee-img {
        width: 300px;
        margin: 15px 0px;
        border-radius: 15px;
    }

    #show-instructions-arrow {
        margin-top: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    h4 {
        margin: 0px 10px 5px 0px;
    }

    .arrow-img {
        width: 30px;
        background-color: rgb(231, 231, 231);
        padding: 5px 8px;
        border-radius: 25px;
        transition-duration: 0.5s;
    }

    .rotate {
        transform: rotate(-3.142rad);
    }

    #show-instructions {
        height: 0px;
        overflow: hidden;
        transition-duration: 0.5s;
    }

    ol {
        margin: 5px;
    }

    li {
        font-size: 20px;
        padding: 8px 0px;
    }

    button {
        margin: 10px 0px;
        font-size: 26px;
        padding: 8px 25px;
        background-color: #997D54;
        color: white;
        border-radius: 40px;
        border: none;
    }
</style>

<script>
import allRecipes from '../assets/recipes.js'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Recipe",
    data() {
        return {
            recipe: {
                id: 0,
                name: "Espresso",
                minutes: 3,
                ingredients: [
                    "coffee"
                ],
                cups: 1,
                requirements: [
                    
                ], 
                instructions: [
                    "dumdum :3"
                ]
            },
            showInstructions: false,
            error: false,
            prepTime: ""
        };
    },
    methods: {
        showInstructionsMethod() {
            this.showInstructions = !this.showInstructions;
            if (this.showInstructions) {
                document.getElementById('show-instructions').style.height = String(80 * this.recipe.instructions.length) + 'px';
            } else {
                document.getElementById('show-instructions').style.height = '0px';
            }
        },
        doneButton() {
            sessionStorage.removeItem("current-ingredients");
            this.$router.push('/happihappi');
        }
    },
    created() {
        let ingredients = JSON.parse(sessionStorage.getItem("current-ingredients"));
        if (ingredients == null || ingredients.length == 0) {
            this.error = true;
            return;
        }
        let recipes = allRecipes.filter(r => {
            for (let i = 0; i < r.ingredients.length; i++) {
                if (!ingredients.includes(r.ingredients[i])) {
                    return false;
                }
            }
            return true;
        });
        if (recipes.length == 0) {
            this.error = true;
            return;
        }
        recipes.sort((a, b) => {
            return b.ingredients.length - a.ingredients.length;
        })
        this.recipe = recipes[0];
        //this.recipe = recipes[Math.floor(recipes.length * Math.random())];
        this.prepTime = String(this.recipe.minutes) + ' mins';
        if (this.recipe.minutes == 24) {
            this.prepTime = "24 hours"
        }
    }
}
</script>