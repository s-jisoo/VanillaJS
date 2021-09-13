const title_image = document.querySelector(".title-img");
const image = ["spring.jpg", "summer.jpg", "autumn.jpg", "winter.jpg"];


/*  <img src="img/autumn.jpg"> 만들기. */ 
const tagImg = document.createElement("img");

const RandomImage = image[Math.floor(Math.random()*image.length)];
tagImg.src = `img/${RandomImage}`;

/* img 태그 title-img 클래스 바로 밑에 생성. */
title_image.insertBefore(tagImg, title_image.firstChild);