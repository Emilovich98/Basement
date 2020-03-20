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


/* ---- priser ----- */

const getPriceElement = document.querySelector(".get-price");


getPriceElement.addEventListener("click", getPrice);

function getPrice() {
    fetch('json/drinks.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (drinks) {
                output += `<p><span class="tilbud-p">Tilbud: ${drinks.tilbud}</span></p><p><span class="tilbud-p">Type: ${drinks.type}</span></p>`;
            })
            document.querySelector(".output").innerHTML = output;
        })
}
