const images=[ "0.jpg", "1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


/**
 * 배경화면 만들기
 * index.html파일에
 * <img src="img/0.jpg"/>
 * 코드를 넣은 것과 같이 만들 것임
 * 그리고 그것을 body 안에 넣어주기!!!
 */

// 코드 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;


//body 안에 넣어주기
document.body.appendChild(bgImage);

bgImage.id = "backgroundImg";



