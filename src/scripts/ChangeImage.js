import Cyber from "../../public/1.jpg";
import CyberTwo from "../../public/2.png";
import Cyberthree from "../../public/3.jpg";

let CyberImage = [
    { image: Cyber },
    { image: CyberTwo },
    { image: Cyberthree }
]


function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let image = document.querySelector('.image');

function changeImage() {
    let randomElement = getRandomElement(CyberImage);
    smoothly(image, 'src', randomElement.image);
}

// Устанавливаем интервал для автоматической смены изображения каждые 1 секунду
setInterval(changeImage, 2000); // 1000 миллисекунд = 1 секунда