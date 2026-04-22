import {
    recipesList
} from "./db_recipes.js"

const container = document.getElementById('list');
const categories = document.getElementById('categories');
const recipes = recipesList;

window.recipeModal = recipeModal;
window.filterByCategory = filterByCategory;
window.filterByLevel = filterByLevel;
window.searchRecipes = searchRecipes;
window.addToFavorites = addToFavorites;

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
            <h2>${recipes[recipeIndex].title} <button onClick = "addToFavorites(${recipeIndex})">⭐</button></h2>
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
function addToFavorites(recipeIndex) {
    let local = JSON.parse(localStorage.getItem("favorites")) || [];
    const selectedRecipe = recipes[recipeIndex];
    local.push(selectedRecipe);
    localStorage.setItem("favorites", JSON.stringify(local));
    alert("Receita adicionada aos favoritos!");
}
renderRecipes(recipes);
showFilters(recipes);
