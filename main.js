const img= document.querySelectorAll(".img")
let imgs = [
  "/21_bridges_chadwick_showmax.jpg",
  "/69c91c9e74e8542a.png",
  "/Diiche.jpg",
  "/umakoti_wethu_showmax.jpeg"
  ]
let count = 0

function imgSlider(){
 /*
 count = (count + 1) % imgs.length
 
 let newImg = document.createElement("img")
 newImg.src = imgs[count]
 newImg.style.opacity = "0"
  
 imgContainer.appendChild(newImg)
 
 newImg.classList.add("sliding-img")
 
 let slider = document.querySelector("img:not(:last-child)")
  
 slider.style.opacity = "0"
 newImg.style.opacity = "1"
 
 setTimeout(()=> {
   imgContainer.removeChild(newImg)
 }, 3000)
 */
  
  setInterval(() => {
    
    img[count].style.opacity = "0"
    count = (count +1 ) % img.length
    img[count].style.opacity = "1"
    
   
  },3000)
}

imgSlider()
/*
setInterval(imgSlider, 1000)*/

/*header*/

let header = document.querySelector(".main-header")
function funcHeader(){
  window.addEventListener("scroll", () => {
    
    if(scrollY >= 35){
      
      header.style.opacity = ".9"
    }
  })
}

funcHeader()

/* expand faq*/

let paragraph = document.querySelectorAll(".faq-items")
let texts = document.querySelectorAll(".faq-items div")

console.log(texts)
paragraph.innerText = "=¢=€="


paragraph.forEach(el => {
  
el.addEventListener("click", () => {
  el.classList.toggle("active")

  
})

})