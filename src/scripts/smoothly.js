import Cyber from "../../public/1.jpg";
import CyberTwo from "../../public/2.png";
import Cyberthree from "../../public/3.jpg";

let images = [
    {
        image: { Cyber }
    },
    {
        image: { CyberTwo }
    },

    {
        image: { Cyberthree }
    }

]

let button = document.querySelector('')


function getRundomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};