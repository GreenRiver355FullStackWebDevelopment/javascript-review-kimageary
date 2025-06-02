import {calculateStarAverage} from './logic.js';

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

window.onload = () =>{
  reviewRender();
  formDataHandling();
  starAverage();
}

function reviewRender(){
  const reviewList = document.querySelector('.reviews');

  reviews.forEach((review) => {
    const div = document.createElement('div');

    const user = document.createElement('p');
    user.textContent = "Username: " + review.username;

    const starRating = document.createElement('p');
    starRating.textContent = "Stars: " + review.star;

    const review = document.createElement('p');
    review.textContent = "Review: " + review.review;

    div.appendChild(user);
    div.appendChild(starRating);
    div.appendChild(review);

    reviewList.appendChild(div);
  })

  const starAverage = () =>{
    let rating = document.querySelector(".starRating");

    rating.textContent = "Star Rating: " + calculateStarAverage(reviews);
  };


  const formDataHandling = () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
      event.preventDefault();

      let user = document.getElementById("username").value;
      let image = document.getElementById("image").value;
      let star = parseInt(document.getElementById("star")).value;
      let review = document.getElementById("review").value;

      let newreview ={
        user,
        image,
        start,
        review
      }

      reviews.push(newreview);

      renderReview();

      starAverage();
  });
  }
  
}
