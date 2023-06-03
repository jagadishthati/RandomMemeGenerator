const MemeGeneratorBtn = document.querySelector('.generator-btn');
const MemeTitle = document.querySelector('.meme-title');
const MemeImg = document.querySelector('img');
const MemeAuthor = document.querySelector('.meme-author');
 
const updateDetails = (url,title,author) => {
    MemeTitle.textContent = title;
    MemeAuthor.textContent = ` Meme by:${author}`;
    MemeImg.setAttribute('src', url);
}

function generateMeme() {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data =>{
        updateDetails(data.url,data.title,data.author);
    } )
}


MemeGeneratorBtn.addEventListener('click',generateMeme);