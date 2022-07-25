import cintreuse from "../images/cintreuse.jpg";
import plieuse from "../images/plieuse.jpg";

const data = {
  products: [
    {
      _id: 5,
      name: "Citreuse à galets",
      category: "machinery",
      image: `${cintreuse}`,
      price: 490,
      brand: "PRP",
      rating: 4,
      numReviews: 13,
      description: "Cintreuse à galets manuelle",
    },
    {
      _id: 6,
      name: "Plieuse",
      category: "machinery",
      image: `${plieuse}`,
      price: 980,
      brand: "Metalkraft",
      rating: 5,
      numReviews: 8,
      description: "Plieuse de tôle (1,5mm maximum)",
    },
  ],
};

export default data;
