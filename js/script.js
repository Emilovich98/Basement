function showMobileNav() {
    
    let showMenu = document.querySelector("#nav-links-mobile");

    if (showMenu.style.width === "100vw") {
        showMenu.style.width = "0vw";
    } else {
        showMenu.style.width = "100vw";
    }
    
    // burger animation
    const burger = document.querySelector("#burger");
    
    burger.classList.toggle("toggle");
    
}


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