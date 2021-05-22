const reviews =[
    {id :1,
    author: "Johny Ken",
    occupation:"TEACHER",
    img:"dogfingers.jpg",
    story :"I liked the services offerd by Hunter.Her products were pretty amazing. I will definitely return for more."
},
{
     id:2,
     author:"Susan Reynolds",
     occupation:"WEB-DEVELOPER",
     img:"catpink.jpg",
     story:"Hunter still catered to my needs regardless of them being tech related. Highly recommended."
},
{
     id:3,
     author:"Eliud Mathu",
     occupation:"INDUSTRIAL DESIGNER",
     img:"rabbityellow.jpg",
     story:"I needed pictures to aid my design, and Hunter provided it. Good job!!"
},
{
     id:4,
     author:"Miriam Akello",
     occupation:"MOBILE-DEVELOPER",
     img:"dogred.jpg",
     story:"My designs look much better with Hunter pics. Thank you!!"
}
];

const img = document.getElementById("person-one");
const author = document.getElementById("author");
const occupation= document.getElementById("occupation");
const story= document.getElementById("story");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
//setting initial counter for items

let startingItem = 0;
//load initial review
window.addEventListener("DOMContentLoaded", showItems());

//calling the reviews
function showItems(){
     let items = reviews[startingItem];
     img.src = items.img;
     author.textContent=items.author;
     occupation.textContent = items.occupation;
     story.textContent = items.story;
}

//add event to next button
nextBtn.addEventListener("click",function(){
     startingItem ++;
     if(startingItem > reviews.length-1){
          startingItem = 0;
     }
     showItems();
});
//getting prev button
prevBtn.addEventListener("click",function(){
     startingItem --;
     if(startingItem < 0){
          startingItem = reviews.length-1;
     }
     showItems();
});
randomBtn.addEventListener("click", function (){
   
     startingItem = Math.floor(Math.random()* reviews.length);
     showItems();
})