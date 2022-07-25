import meuleuse from "../images/meuleuse.jpg";
import perceuse from "../images/perceuse.jpg";
import marteau from "../images/marteau.jpg";
import tournevis from "../images/tournevis.jpg";

const data = {
  products: [
    {
      _id: 1,
      name: "Meuleuse Bosh",
      category: "tools",
      image: `${meuleuse}`,
      price: 89,
      brand: "Bosh",
      rating: 4.5,
      numReviews: 10,
      description: "Meuleuse d'angle filaire 125mm",
    },
    {
      _id: 2,
      name: "Perceuse Bosh",
      category: "tools",
      image: `${perceuse}`,
      price: 139,
      brand: "Bosh",
      rating: 4,
      numReviews: 17,
      description: "Perceuse Bosh sans fil 18V",
    },
    {
      _id: 3,
      name: "Marteau Facom",
      category: "tools",
      image: `${marteau}`,
      price: 25,
      brand: "Facom",
      rating: 5,
      numReviews: 23,
      description: "Marteau Facom bi-matière",
    },
    {
      _id: 4,
      name: "Tournevis Facom",
      category: "tools",
      image: `${tournevis}`,
      price: 19.9,
      brand: "Facom",
      rating: 4.5,
      numReviews: 7,
      description: 'Tournevis cruciforme "Expert" by Facom',
    },
  ],
};

export default data;
