const recipes = [
    {
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
    {
        id: 1,
        name: "Cappuccino",
        minutes: 5,
        ingredients: [
            "coffee",
            "milk"
        ],
        cups: 2,
        requirements: [
            "milk frother"
        ],
        instructions: [
            "Make two shots of espresso and pour it into a mug.",
            "Heat the milk to 65 degrees Celsius.",
            "Use a milk frother or whisk to froth the milk until it's very foamy.",
            "For a cappuccino you'll want a good amount of froth: you're going for ⅓ espresso, ⅓ steamed milk and ⅓ foam."
        ]
    },
    {
        id: 2,
        name: "Latte",
        minutes: 7,
        ingredients: [
            "coffee",
            "milk"
        ],
        cups: 2,
        requirements: [
            "milk frother"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a latte glass or mug.",
            "Steam milk to approximately 60 degrees Celsius using a milk frother.",
            "Slowly pour the steamed milk into the glass, holding back the foam with a spoon.",
            "Spoon the remaining foam on top of the latte."
        ]
    },
    {
        id: 3,
        name: "Mocha",
        minutes: 8,
        ingredients: ["coffee", "milk", "chocolate syrup"],
        cups: 2,
        requirements: [
            "milk frother",
            "sausepan"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a mug.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add chocolate syrup to the steamed milk and continue heating until the chocolate is fully melted.",
            "Froth the chocolate milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy chocolate milk into the mug with espresso, using a spoon to hold back the foam.",
            "Spoon the remaining foam on top of the mocha."
        ]
    },
    {
        id: 4,
        name: "Macchiato",
        minutes: 4,
        ingredients: ["coffee"],
        cups: 1,
        requirements: [
            "milk frother"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a small espresso cup.",
            "Steam milk to approximately 60 degrees Celsius using a milk frother.",
            "Take a spoonful of milk foam and gently place it on top of the espresso, creating a small 'stain' or mark."
        ]
    },
    {
        id: 5,
        name: "Salted Caramel Espresso Martini",
        minutes: 4,
        ingredients: ["coffee", "vodka", "coffee liqueur", "caramel syrup", "salt", "ice cubes"],
        cups: 1,
        requirements: [
            "cocktail shaker"
        ],
        instructions: [
            "Brew a double shot of espresso and let it cool to room temperature.",
            "Fill a cocktail shaker with ice.",
            "Add the cooled espresso, 1 ounce of vodka, 1 ounce of coffee liqueur, and 1 tablespoon of caramel syrup to the shaker.",
            "Sprinkle a pinch of sea salt into the shaker",
            "Shake vigorously for about 30 seconds to chill and mix the ingredients",
            "Strain the cocktail into a martini glass"
        ]
    },
    {
        id: 6,
        name: "Iced Coffee",
        minutes: 10,
        ingredients: ["coffee", "ice cubes", "milk"],
        cups: 2,
        requirements: [],
        instructions: [
            "Make two shots of espresso.",
            "Allow the coffee to cool to room temperature, and then refrigerate for 5 minutes.",
            "Fill a glass with ice cubes and pour the coffee over the ice.",
            "Add milk to the glass, leaving enough space for stirring.",
            "Stir well until the coffee and milk are thoroughly combined."
        ]
    },
    {
        id: 7,
        name: "Flat White",
        minutes: 5,
        ingredients: ["coffee", "milk"],
        cups: 2,
        requirements: [
            "milk frother"
        ],
        instructions: [
            "Brew a double shot of espresso and pour it into a flat white cup.",
            "Steam milk to approximately 60 degrees Celsius using a milk frother.",
            "Slowly pour the steamed milk into the cup, holding back the foam with a spoon.",
            "Gently swirl the cup to integrate the milk and espresso.",
            "Spoon a thin layer of foam on top of the coffee."
        ]
    },
    {
        id: 8,
        name: "Irish Coffee",
        minutes: 5,
        ingredients: ["coffee", "whiskey", "whipped cream"],
        cups: 2,
        requirements: [
            "milk frother"
        ],
        instructions: [
            "Brew a cup of strong coffee using your preferred brewing method.",
            "Stir in a shot of whiskey into the coffee.",
            "Top the coffee with a generous dollop of whipped cream."
        ]
    },
    {
        id: 9,
        name: "Turkish Coffee",
        minutes: 10,
        ingredients: ["coffee"],
        cups: 2,
        requirements: [
            "dzezva"
        ],
        instructions: [
            "Measure one cup of cold water per serving and pour it into a dzezva.",
            "Add one teaspoon of finely ground coffee per serving into the dzezva.",
            "Stir gently to combine coffee with the water.",
            "Place the dzezva on low heat and slowly bring the coffee to a simmer, without stirring.",
            "Once the coffee begins to foam and bubble, remove it from the heat.",
            "Allow the coffee grounds to settle for a moment before pouring it into a small coffee cup."
        ]
    },
    {
        id: 10,
        name: "Mint Mocha",
        minutes: 8,
        ingredients: ["coffee", "milk", "chocolate syrup", "peppermint extract"],
        cups: 2,
        requirements: [
            "milk frother",
            "saucepan"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a mug.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add chocolate syrup and a few drops of peppermint extract to the steamed milk.",
            "Stir the milk mixture until the chocolate is fully melted and the flavors are combined.",
            "Froth the mint-infused milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy mint mocha milk into the mug with espresso and stir gently."
        ]
    },
    {
        id: 11,
        name: "Coconut Latte",
        minutes: 7,
        ingredients: ["coffee", "coconut milk"],
        cups: 2,
        requirements: [
            "milk frother",
            "saucepan"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a latte glass or mug.",
            "In a small saucepan, heat coconut milk over medium heat until it begins to steam.",
            "Froth the steamed coconut milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy coconut milk into the glass with espresso, using a spoon to hold back the foam.",
            "Stir gently."
        ]
    },
    {
        id: 12,
        name: "Caramel Macchiato",
        minutes: 7,
        ingredients: ["coffee", "milk", "caramel syrup", "vanilla extract"],
        cups: 2,
        requirements: [
            "milk frother",
            "saucepan"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a tall glass.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add caramel syrup and a splash of vanilla extract to the steamed milk.",
            "Stir the milk mixture until the caramel is fully incorporated and the flavors are well blended.",
            "Froth the caramel-infused milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy caramel milk into the glass with espresso, holding back the foam with a spoon.",
            "Drizzle some caramel syrup on top for added sweetness and decoration and stir gently."
        ]
    },
    {
        id: 13,
        name: "Spiced Maple Latte",
        minutes: 10,
        ingredients: ["coffee", "milk", "maple syrup", "cinnamon", "nutmeg", "cloves"],
        cups: 2,
        requirements: [
            "milk frother",
            "saucepan"
        ],
        instructions: [
            "Brew a single shot of espresso and pour it into a latte glass or mug.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add maple syrup, a pinch of cinnamon, a pinch of nutmeg, and a pinch of cloves to the steamed milk.",
            "Stir the milk mixture until the spices are well blended and the flavors are infused.",
            "Froth the spiced milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy spiced milk into the glass with espresso, holding back the foam with a spoon.",
            "Sprinkle a dash of cinnamon on top for added aroma."
        ]
    },
    {
        id: 14,
        name: "Honey Lavender Cold Brew",
        minutes: 24,
        ingredients: ["coffee beans", "water", "honey", "dried lavender"],
        cups: 2,
        requirements: ["cold brew maker ", "coffee filter"],
        instructions: [
            "Coarsely grind coffee beans and place them in a cold brew maker.",
            "Add water to the cold brew maker or jar, ensuring that the coffee grounds are fully immersed.",
            "Stir in honey and dried lavender to the coffee mixture, combining all the ingredients.",
            "Cover the cold brew maker or jar and let it steep in the refrigerator for 12 to 24 hours.",
            "After steeping, strain the coffee concentrate using a coffee filter to remove the grounds and lavender.",
            "Dilute the cold brew concentrate with water or milk, depending on your preference.",
            "Serve over ice and garnish with a sprig of fresh lavender."
        ]
    },
    {
        id: 15,
        name: "Chai Espresso",
        minutes: 8,
        ingredients: ["coffee", "chai tea bag", "milk"],
        cups: 2,
        requirements: ["saucepan"],
        instructions: [
            "Brew a double shot of espresso and pour it into an espresso cup.",
            "Steep a chai tea bag in hot water for a few minutes to create a concentrated chai infusion.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add the chai infusion to the steamed milk, and whisk until well combined.",
            "Pour the chai-infused milk over the espresso shot."
        ]
    },
    {
        id: 16,
        name: "Orange Mocha",
        minutes: 8,
        ingredients: ["coffee", "milk", "chocolate syrup", "orange zest"],
        cups: 2,
        requirements: ["milk frother", "saucepan", "grater"],
        instructions: [
            "Brew a single shot of espresso and pour it into a mug.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add chocolate syrup to the steamed milk and stir until fully dissolved.",
            "Grate a small amount of orange zest into the milk mixture, infusing it with citrus flavor.",
            "Froth the orange-infused milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy mocha milk into the mug with espresso and stir gently."
        ]
    },
    {
        id: 17,
        name: "Coconut Cardamom Latte",
        minutes: 8,
        ingredients: ["coffee", "coconut milk", "cardamom pods"],
        cups: 2,
        requirements: ["milk frother", "saucepan"],
        instructions: [
            "Brew a single shot of espresso and pour it into a latte glass or mug.",
            "In a small saucepan, heat coconut milk over medium heat until it begins to steam.",
            "Lightly crush a few cardamom pods and add them to the steamed coconut milk.",
            "Let the milk mixture simmer for a few minutes to infuse the flavors of cardamom.",
            "Froth the cardamom-infused milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy coconut cardamom milk into the glass with espresso, holding back the foam with a spoon."
        ]
    },
    {
        id: 18,
        name: "Raspberry White Mocha",
        minutes: 8,
        ingredients: ["coffee", "white chocolate", "milk", "raspberry syrup"],
        cups: 2,
        requirements: ["milk frother", "saucepan"],
        instructions: [
            "Brew a single shot of espresso and pour it into a mug.",
            "In a small saucepan, heat milk over medium heat until it begins to steam.",
            "Add white chocolate to the steamed milk and stir until fully melted and blended.",
            "Stir in raspberry syrup to the milk mixture, adding a fruity twist.",
            "Froth the raspberry white chocolate milk using a milk frother until it becomes creamy and frothy.",
            "Pour the frothy raspberry white mocha milk into the mug with espresso."
        ]
    }
];

export default recipes;