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


// load videos section
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.error("Error loading categories:", error));
};
loadVideos();


// const cardDemo= {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {
    // console.log(videos);
    const videosContainer = document.getElementById('videos')
    videos.forEach((video) => {

        console.log(video);
        const card = document.createElement('div')
        card.classList = "card card-compact";
        card.innerHTML = ` 
    <figure class = "h-[200px]">
    <img
      src=${video.thumbnail}
      alt="Shoes" class = "w-full h-full object-cover" />
  </figure>
  <div class="py-2 px-0 flex gap-2">
  <div>
  <img class = "w-10 h-10 rounded-full object-cover" src = "${video.authors[0].profile_picture}"/>
  </div>
  <div>
  <h2 class = "font-bold">${video.title}</h2>
  <div class = "flex items-center gap-2">
   <p>${video.authors[0].profile_name}</p>
   ${video.authors[0].verified === true ? `<img class="w-5" src = "https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` : " "
   }
   
  
  </div>
  <p></p>
 
  </div>
   
  </div>


    `;
        videosContainer.append(card);

    })


}

