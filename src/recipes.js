//============================================
//  código Bruno Medeiros Dias 
//============================================

const container = document.getElementById('list');
const categories = document.getElementById('categories');

const recipes = 
[
    {   title: "Bolo",
        level:"Fácil", 
        img:"./assets/cake.png", 
        category:"Sobremesa", 
        ingredients: `- 500g de farinha de trigo \n - 2 ovos \n - 1 xícara de leite \n - 1 pct de fermento biológico \n - 4 colheres de açúcar`, 
        instructions: "Misturar todos os ingredientes até ficar homogêneo. Assar em forma untada a 200ºC por 30min"  
    },
    {
        title: "Salada Grega",
        level: "Fácil",
        img: "./assets/salad.png",
        category: "Vegetariano",
        ingredients: "- Pepino \n - Tomate \n - Queijo Feta \n - Azeitonas \n - Azeite",
        instructions: "Corte os vegetais em cubos, misture com o queijo e tempere com azeite e orégano."
    },
    {
        title: "Risoto de Cogumelos",
        level: "Médio",
        img: "./assets/mushroom.png",
        category: "Vegetariano",
        ingredients: "- Arroz arbóreo \n - Shimeji \n - Caldo de legumes \n - Vinho branco \n - Parmesão",
        instructions: "Refogue os cogumelos. Cozinhe o arroz adicionando o caldo aos poucos até ficar cremoso."
    },
    {
        title: "Hambúrguer Caseiro",
        level: "Fácil",
        img: "./assets/burger.png",
        category: "Lanche",
        ingredients: "- 500g Carne moída \n - Sal \n - Pimenta \n - Alho \n - Pão de brioche",
        instructions: "Molde a carne em discos, tempere e grelhe por 4 minutos de cada lado em fogo alto."
    },
    {
        title: "Espaguete Carbonara",
        level: "Médio",
        img: "./assets/pasta.png",
        category: "Massas",
        ingredients: "- Macarrão \n - Bacon \n - Ovos \n - Queijo pecorino \n - Pimenta do reino",
        instructions: "Frite o bacon. Misture a massa quente com os ovos batidos e queijo fora do fogo."
    },
    {
        title: "Frango Xadrez",
        level: "Fácil",
        img: "./assets/chicken.png",
        category: "Oriental",
        ingredients: "- Peito de frango \n - Pimentão \n - Cebola \n - Shoyu \n - Amendoim",
        instructions: "Refogue o frango e vegetais. Adicione o shoyu e finalize com amendoim torrado."
    },
    {
        title: "Tacos de Carne",
        level: "Fácil",
        img: "./assets/tacos.png",
        category: "Mexicana",
        ingredients: "- Tortilhas de milho \n - Carne moída \n - Alface \n - Sour cream \n - Coentro",
        instructions: "Tempere a carne com chilli, recheie as tortilhas e adicione os acompanhamentos frescos."
    },
    {
        title: "Mousse de Chocolate",
        level: "Fácil",
        img: "./assets/mousse.png",
        category: "Sobremesa",
        ingredients: "- Chocolate meio amargo \n - Creme de leite \n - Claras em neve \n - Açúcar",
        instructions: "Derreta o chocolate, misture o creme de leite e incorpore as claras delicadamente. Gele."
    },
    {
        title: "Sopa de Cebola",
        level: "Médio",
        img: "./assets/soup.png",
        category: "Vegetariano",
        ingredients: "- Cebolas fatiadas \n - Manteiga \n - Torradas \n - Queijo Gruyère",
        instructions: "Caramelize as cebolas, adicione o caldo e ferva. Cubra com torradas e queijo e gratine."
    }
];

function recipeCard(recipe, index,)
{
    return`
        <div class="card">
            <img src="${recipe.img}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <div class="category-container">
                <div class="recipe-category">${recipe.category}</div>
                <div class="recipe-category">${recipe.level}</div>
            </div>
            <button onClick="recipeModal(${index})">Ver Receita</button>
        </div>
    
    `
}


function recipeModal(recipeIndex){

    const modal = document.createElement('div');
    modal.classList.add('modal-container');

    modal.innerHTML = `
        <div class="modal">
            <h2>${recipes[recipeIndex].title}</h2>
            <img src="${recipes[recipeIndex].img}" alt="${recipes[recipeIndex].title}">
            <div class="category-container">
                <div class="recipe-category">${recipes[recipeIndex].category}</div>
                <div class="recipe-category">${recipes[recipeIndex].level}</div>
            </div>
            <h4>Ingredientes</h4>
            <p>${recipes[recipeIndex].ingredients}</p>
            
            <h4>Modo de preparo</h4>
            <p>${recipes[recipeIndex].instructions}</p>

            <button id="close">Fechar</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#close').onclick = () => modal.remove();
}

function renderRecipes(recipesList) {
    container.innerHTML = ""; 
    if(recipesList.length === 0){
        container.innerHTML = '<h3> Nada encontrado </h3>';
        return;
    }
    recipesList.forEach((item, index) => {
        container.innerHTML += recipeCard(item, index);
    });
}

function filterByCategory(category) {
    if (category === "Todas") {
        renderRecipes(recipes);
        return;
    }

    const filtered = recipes.filter(recipe => recipe.category === category);
    renderRecipes(filtered);
}

function showFilters(recipes) {
    const filter = [...new Set(recipes.map(recipe => recipe.category))];
    categories.innerHTML = `
        <button class="category-btn" onClick="filterByCategory('Todas')">Todas</button>
    ` + filter.map(cat => `
        <button class="category-btn" onClick="filterByCategory('${cat}')">${cat}</button>
    `).join('');
}

function filterByLevel (level){
    if (level === "Todos") {
        renderRecipes(recipes);
        return;
    }
    const filtered = recipes.filter(recipe => recipe.level === level);
    renderRecipes(filtered);

}

function searchRecipes(word) {
    const toLower = word.toLowerCase();
    const filtered = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(toLower)
    );

    renderRecipes(filtered);
}

renderRecipes(recipes);
showFilters(recipes);
