import Cyber from "../../public/1.jpg";
import CyberTwo from "../../public/2.png";
import Cyberthree from "../../public/3.jpg";

const images = [
    '',
    'CyberTwo.png',
    'CyberThree.jpg',
]

let currentIndex = 0;

// Функция для изменения фонового изображения
function changeBackgroundImage() {
    document.querySelector('.background-image').style.backgroundImage = `url(${images[currentIndex]})`;

    // Увеличиваем индекс на 1, и переходим к следующему изображению
    currentIndex = (currentIndex + 1) % images.length;
}

// Вызываем функцию смены изображения через определенный интервал времени
setInterval(changeBackgroundImage, 5000);

/*
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
*/