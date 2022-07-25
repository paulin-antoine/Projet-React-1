import tubeCarrée from "../images/tube.jpg";
import tubeRond from "../images/tube-rond.jpg";
import tôle from "../images/tôle.jpg";

const data = {
  products: [
    {
      _id: 7,
      name: "Tube carré en acier 40mm x 40mm",
      category: "steel",
      image: `${tubeCarrée}`,
      price: 13,
      brand: "Decons",
      rating: 5,
      numReviews: 13,
      description: "Tube carré acier: 40mm x 40mm, 1000mm linéaire",
    },
    {
      _id: 8,
      name: "Tube rond en acier 40mm",
      category: "steel",
      image: `${tubeRond}`,
      price: 13,
      brand: "Decons",
      rating: 5,
      numReviews: 16,
      description: "Tube rond acier: 40mm de diamètre, 1000mm linéaire",
    },
    {
      _id: 9,
      name: "Tôle acier 2mm",
      category: "steel",
      image: `${tôle}`,
      price: 35,
      brand: "Decons",
      rating: 5,
      numReviews: 21,
      description: "Tôle acier: épaisseur 2mm, 1000mm x 1000mm",
    },
  ],
};

export default data;
