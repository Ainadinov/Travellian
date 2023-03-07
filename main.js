// Validation
const email = document.querySelector(".newsletter__email");
const icon1 = document.querySelector(".newsletter__icons");
const btn = document.querySelector(".newsletter__btn");
let redExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener("keyup", function(e){
    if(email.value.match(redExp)){
        email.style.color = "#172432"
        email.style.background = "#e8f0fe"
        email.style.borderColor = "#e8f0fe"
        icon1.style.display = "none"
    }else{
        email.style.color = "#e74c3c"
        email.style.background = "#FFE8D4"
        email.style.borderColor = "#e74c3c"
        icon1.style.cssText = `
            display: flex;
            justify-content: space-around;
            align-items: center;		`
    }
    if(email.value == ""){
        email.style.borderColor = "lightgrey"
        email.style.color = "#FF7757"
        icon1.style.display = "none"
    }
});


// Slider

const destinations = document.querySelector(".destinations__content")
const destinationsFirstImg = destinations.querySelectorAll("img")[0];
const destinationsBtn = document.querySelectorAll(".destinations .section__shev")

console.log(destinationsFirstImg)


destinationsBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = destinationsFirstImg.clientWidth + 35 
        if(icon.id  == "destinations__left" ){
            destinations.scrollLeft -= firstImgWidth
        }else{
            destinations.scrollLeft += firstImgWidth
        }
        
    })
});


const gallery = document.querySelector(".gallery__item")
const galleryFirstImg = gallery.querySelectorAll("img")[0];
const galleryBtn = document.querySelectorAll(".gallery .section__shev")

console.log(galleryFirstImg)


galleryBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = galleryFirstImg.clientWidth + 35 
        if(icon.id  == "gallery__left" ){
            gallery.scrollLeft -= firstImgWidth
        }else{
            gallery.scrollLeft += firstImgWidth
        }
        
    })
});
