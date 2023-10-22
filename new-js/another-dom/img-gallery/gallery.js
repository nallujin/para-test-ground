const imageUrls = [
    'https://picsum.photos/200/150',
    'https://picsum.photos/300/200',
    'https://source.unsplash.com/200x150/?nature',
    'https://source.unsplash.com/300x200/?city',
    // Add more image URLs as needed
];
const mainImage = document.getElementById("mainImage");
const thumbnailsContainer = document.getElementById("thumbnails");

// Create thumbnail images and add them to the container
imageUrls.forEach((imageUrl) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = imageUrl;
    thumbnail.alt = "Thumbnail Image";
    thumbnail.addEventListener("click", function () {
        mainImage.src = imageUrl;
    });
    thumbnailsContainer.appendChild(thumbnail);
});