
const endpoint = "https://api.pexels.com/v1/search?query=random";
const apiKey = "z2RZH8PBbwCD7fGF0DYZBgEwSqXcuXTtXGWHpVG6YlaTM1Yf8xZeGop0";

const cardsContainer = document.querySelector(".cards-container");
const loadImagesBtn = document.getElementById("load-images");

async function loadImages() {
    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: apiKey
            }
        });
        const data = await response.json();
        const images = data.photos;

        cardsContainer.innerHTML = "";
        images.forEach(image => {
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.src = image.src.medium;
            const title = document.createElement("h3");
            title.textContent = image.photographer;
            const link = document.createElement("a");
            link.href = image.photographer_url;
            link.textContent = "View Photographer's Page";
            card.append(img, title, link);
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}