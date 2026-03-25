// código Bruno Medeiros Dias   
const container = document.getElementById('list');


const recipes = 
[
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    {title: "Bolo", level:"easy", img:"./assets/cake.png", category:"Sobremesa" },
    
    
];


function recipeCard(recipe)
{
    return`
        <div class="card">
            <img src="${recipe.img}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <button>Ver Receita</button>
        </div>
    
    `
}
recipes.forEach(item => {
    container.innerHTML += recipeCard(item);
});

