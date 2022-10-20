const $display = $('#display');
const $searchButton = $('#search-button');
const $removeButton = $('remove-button');


$searchButton.on('click', function(e) {
    e.preventDefault();
    const $searchTerm = $('#search-term');
    getGIF($searchTerm.val());
    $searchTerm.val('');
});

$removeButton.on('click', function(e) {
    e.preventDefault();
    $display.html('');
});

async function getGIF(searchTerm) {
    const apiKey = 'm6wazYB6EiSADm40V6FhB5vH9NlsvhSq';
    const response = await axios.get('https://api.giphy.com/v1/gifs/random', { params: { api_key: apiKey, tag: searchTerm, limit: 1 } });
    addGIF(response.data.data.images.original.url);
}

function addGIF(gif) {
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newDiv.classList.add('imgContainer');
    newImg.src = gif;
    newDiv.append(newImg);
    $display.prepend(newDiv);
}