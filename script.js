function getRandomFact() {
    axios.get('https://catfact.ninja/fact')
        .then(response => {
            const fact = response.data.fact;
            console.log(fact);
            const randomText = document.getElementById("randomText");
            randomText.innerHTML = fact
        })
        .catch(error => console.log(error));
}


let getBreed = async () => {
    try {
      let card = await axios.get("https://catfact.ninja/breeds");

      return { succes: true, card: card.data };
    } catch (error) {
      console.error("error: " + error);

      return { succes: false };
    }
  };

  let setBreed = async () => {
    let res = await getBreed();
    const row = document.getElementById("row")
    console.log(res.card.data);
    res.card.data.map((item) => {
        row.innerHTML +=  ` <div class="cardd col-lg-4 col-md-6 col-sm-12 text-lg-start">
        <p>Breed:${item.breed}</p>
        <p>Country:${item.country}</p>
        <p class="mb-4">Origin: ${item.origin}</p>
        <div class="d-flex justify-content-between">
            <button class="btn btn-warning">${item.coat}</button>
            <button class="btn btn-warning">${item.pattern}</button>
        </div>
    </div> `
    });
  };   


  fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
        .then(response => response.json())
        .then(data => {
          const imageUrl = data.url;
          const catImageContainer = document.getElementById('catImageContainer');
          const img = document.createElement('img');
          img.src = imageUrl;
          img.className = "cat-random py-5 w-50"
          catImageContainer.appendChild(img);
        })
        .catch(error => console.log(error));

        