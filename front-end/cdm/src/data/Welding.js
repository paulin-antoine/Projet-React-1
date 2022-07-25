import poste from "../images/poste.jpg";
import electrodes from "../images/baguette-soudure.jpg";
import masque from "../images/masque-soudure.webp";
import gants from "../images/gants-soudeur.jpg";

const data = {
  products: [
    {
      _id: 10,
      name: "Poste à souder",
      category: "welding",
      image: `${poste}`,
      price: 13,
      brand: "GYS",
      rating: 3.5,
      numReviews: 10,
      description: "Poste à souder à l'arc",
    },
    {
      _id: 11,
      name: "2 x Pack electrodes enrobées",
      category: "welding",
      image: `${electrodes}`,
      price: 39,
      brand: "GYS",
      rating: 4,
      numReviews: 26,
      description: "Lot de deux boites d'électrodes: 1 x 2,5mm et 3,2mm",
    },
    {
      _id: 12,
      name: "Masque de soudeur",
      category: "welding",
      image: `${masque}`,
      price: 35,
      brand: "GYS",
      rating: 4,
      numReviews: 31,
      description: "Masque de soudure de type électronique",
    },
    {
      _id: 13,
      name: "Gant de soudeur",
      category: "welding",
      image: `${gants}`,
      price: 15,
      brand: "GYS",
      rating: 3.5,
      numReviews: 12,
      description: "Gant de soudeur en cuir",
    },
  ],
};

export default data;
