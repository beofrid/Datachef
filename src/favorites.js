/*============================================
código Bruno Medeiros Dias 
============================================*/

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

function getFavorites() {
    const data = localStorage.getItem("favorites");
    let favorites;
    if(data!==null){
        favorites = JSON.parse(data);
    } else{
        favorites = [];
        alert("Nenhuma receita encontrada");
    }
    renderFavorite(favorites);
}

getFavorites();
