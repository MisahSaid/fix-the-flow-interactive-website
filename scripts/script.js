// 1. buttons worden hier aangeroepen doormiddel van hun id
let filterReserveren = document.getElementById("reserverenFilterButton");
let filterFavorieten = document.getElementById("favorietenFilterButton");
let filterAanraders = document.getElementById("aanradersFilterButton");
let filterUitlenen = document.getElementById("uitlenenFilterButton");


// 2. sections aanroepen doormiddel van hun class
const reserverenSection = document.querySelector(".reserveren")
const favorietenSection = document.querySelector(".favorieten")
const aanradersSection = document.querySelector(".aanraders")
const lenenSection = document.querySelector(".lenen")


// 3. Eventhandleers om filter mogelijk te maken:

// reserveren filter button
filterReserveren.addEventListener("click", () => {
    favorietenSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// favorieten filter button
filterFavorieten.addEventListener("click", () =>{
    reserverenSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// aanraders filter button
filterAanraders.addEventListener("click", () => {
    reserverenSection.classList.toggle("hidden")
    favorietenSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// uitlenen (lenen) filter button
filterUitlenen.addEventListener("click", () => {
    reserverenSection.classList.toggle("hidden")
    favorietenSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
})