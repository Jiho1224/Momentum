const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img5.jpg"
]

const chosen = images[Math.floor(Math.random()*images.length)]; //random image 하나 고르기

const bgImage = document.createElement("img"); //이미지 담는 element 생성
bgImage.src = `img/${chosen}`; //이미지 넣기

// document.body.appendChild(bgImage); // body에 넣기
const IMGname = `url('img/${chosen}')`;
document.body.style.backgroundImage = IMGname;
document.body.style.backgroundSize = "cover";
