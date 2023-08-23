const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';

const content = null || document.getElementById('container')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6db38d8575mshf872bd3613df35ap1f3faejsnce5ff451f7ca',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
	const data = await response.json();
    return data
}

(async () =>{
    try {
        const profile = await fetchData(url)
        let view = `${profile.products.map(result => `
        <div class="cardContainer">
          <figure class="imgContainer">
            <img src="http://${result.imageUrl}" alt="${result.imageUrl}" />
          </figure>
          <div class="cardText">
            <p class="cardTitle">${result.name}</p>
            <p class="cardPrice">${result.price.current.text}</p>
          </div>
        </div>
        `).slice(20,30).join('')}
        `;
        content.innerHTML = view
    } catch (error) {
        console.error(error);
    }
})()
