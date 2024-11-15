// fetch,load and show catagories on html
// crat loadCatagories
// creat displayCatagories.



const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.error("Error loading categories:", error));
};

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');
    
    // Ensure the container exists
    if (!categoriesContainer) {
        console.error("Categories container not found in the DOM.");
        return;
    }

    console.log(categories);
    categories.forEach((item) => {
        console.log(item);
        // Create a button
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category; // Fixed property name
        categoriesContainer.appendChild(button); // Fixed appendChild method
    });
};

// Call the function to load categories
loadCategories();
