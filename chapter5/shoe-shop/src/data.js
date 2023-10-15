import grey from "./images/grey.png";
import panda from "./images/panda.png";
import boot from "./images/boot.png";
import nb550 from "./images/nb550.png";

export const data = [
  {
    id: Math.random().toString(36).substring(2, 8),
    title: "Nike SB Panda",
    size: [40, 41, 42, 43],
    price: 12000,
    colors: ["black", "white"],
    img: panda,
  },
  {
    id: Math.random().toString(36).substring(2, 8),
    title: "New Balance 550",
    size: [40, 41, 42, 43],
    price: 15000,
    colors: ["black", "white", "green", "blue", "yellow"],
    img: nb550,
  },
  {
    id: Math.random().toString(36).substring(2, 8),
    title: "Jordan 1",
    size: [40, 41, 42, 43],
    price: 25000,
    colors: ["red", "green", "purple"],
    img: grey,
  },
  {
    id: Math.random().toString(36).substring(2, 8),
    title: "high boot",
    size: [39, 40, 41, 42, 43],
    price: 9900,
    colors: ["black", "brown"],
    img: boot,
  },
];
