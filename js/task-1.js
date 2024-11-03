const listCategories = document.querySelector("#categories");
const categoriesItem = listCategories.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const titleItem = category.querySelector("h2").textContent;
    const numberOfSubcategories = category.querySelectorAll("li");
    
    console.log(`Category: ${titleItem}`),
    console.log(`Elements: ${numberOfSubcategories.length}`);
});