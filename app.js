// mobile menu start
const humbugar = document.getElementById("humbugar");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");

// console.log(menuOpen);

menuOpen.addEventListener("click", () => {
    mobileMenu.style.left = "0";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
});

// mobile menu end

// popup start 

const popup = document.getElementById("popup");
const btn = document.getElementById("btn");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");



btn.addEventListener("click", () => {
    modal.style.display = "flex";
});
// body.addEventListener("click", (e) => {
//     console.log(e.target);
    
//     if (e.target.classList.value === "popup"){
//         popup.style.display = "modal";
//     }     
// });


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
   
// })
// popup end

// according start
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const accordingContent = document.getElementById("according-content");

openIcon.addEventListener("click", () => {
    accordingContent.style.display = "block";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    accordingContent.style.display = "none";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
});

// according end 
