const getPriceElement = document.querySelector(".getPrice");


getPriceElement.addEventListener("click", getPrice);

function getPrice() {
    fetch('json/drinks.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (drinks) {
                output += `
        
<p class="tilbudp" >Tilbud: ${drinks.tilbud}</p>
<p class="tilbudp" >Type: ${drinks.type}</p>


            `;
            })
        document.querySelector(".output").innerHTML = output;
        })
}