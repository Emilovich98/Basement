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
