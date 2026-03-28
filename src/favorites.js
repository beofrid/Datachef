/*============================================
código Bruno Medeiros Dias 
============================================*/
const recipes = 
[
    {   title: "Bolo",
        level:"Fácil", 
        img:"../assets/cake.png", 
        category:"Sobremesa", 
        ingredients: `- 500g de farinha de trigo \n - 2 ovos \n - 1 xícara de leite \n - 1 pct de fermento biológico \n - 4 colheres de açúcar`, 
        instructions: "Misturar todos os ingredientes até ficar homogêneo. Assar em forma untada a 200ºC por 30min"  
    },
    {
        title: "Salada Grega",
        level: "Fácil",
        img: "../assets/salad.png",
        category: "Vegetariano",
        ingredients: "- Pepino \n - Tomate \n - Queijo Feta \n - Azeitonas \n - Azeite",
        instructions: "Corte os vegetais em cubos, misture com o queijo e tempere com azeite e orégano."
    },
    {
        title: "Risoto de Cogumelos",
        level: "Médio",
        img: "../assets/mushroom.png",
        category: "Vegetariano",
        ingredients: "- Arroz arbóreo \n - Shimeji \n - Caldo de legumes \n - Vinho branco \n - Parmesão",
        instructions: "Refogue os cogumelos. Cozinhe o arroz adicionando o caldo aos poucos até ficar cremoso."
    }
];
const favorite = document.getElementById('favorite');

function renderFavorite(recipesList) {
    favorite.innerHTML = ""; 
    if(recipesList.length === 0){
        favorite.innerHTML = '<p> Nada encontrado <p>';
        return;
    }
    recipesList.forEach((item, index) => {
        favorite.innerHTML += favoriteCard(item, index);
    });
}

function favoriteCard (recipe, index){
    return`
    <div class="fav-list">
    <img src="${recipe.img}" alt="${recipe.title}">
    <p>${recipe.title}</p>
    <div class="list-category">
    <div class="recipe-category">${recipe.category}</div>
    <div class="recipe-category">${recipe.level}</div>
    </div>
    </div>
    
    `
}


renderFavorite(recipes);