import { cropBanana, cropBitter, cropBuko, cropEggplant } from "../assets/Crops/CROP";
import { descBanana, descBitter, descBuko, descEggplant } from "../assets/Crops/DESC";

const Crops = [
  {
    image: cropBuko,
    hoverImage: descBuko,
    cropName: "Coconut",
    cropOtherName: "Niyog",
    scientificName: "Cocos nucifera",
    firstDescription:
      "Coconut, an important perennial crop of the humid tropics, is a multipurpose crop that serves as a source of food, edible oil, refreshing drink, fiber (coir), fodder, and fuel.",
    secondDescription:
      "Production of coconut (with husk) from October to December 2022 was recorded at 4.24 million metric tons. This was higher by 1.0 percent from its level of 4.20 million metric tons in the same period of last year.",
  },
  {
    image: cropBanana,
    hoverImage: descBanana,
    cropName: "Banana",
    cropOtherName: "Saging",
    scientificName: "Musa sapientuma",
    firstDescription:
      "Banana, fruit of the genus Musa, of the family Musaceae, one of the most important fruit crops of the world. The banana is grown in the tropics, and, though it is most widely consumed in those regions, it is valued worldwide for its flavour, nutritional value, and availability throughout the year.",
    secondDescription:
      "Production of coconut (with husk) from October to December 2022 was recorded at 4.24 million metric tons. This was higher by 1.0 percent from its level of 4.20 million metric tons in the same period of last year.",
  },
  {
    image: cropBitter,
    hoverImage: descBitter,
    cropName: "Bitter Gourd",
    cropOtherName: "Ampalaya",
    scientificName: "Momordica charantia",
    firstDescription:
      "Bitter gourd (Momordica charantia) is an important vegetable crop and is grown for its immature tuberculate fruits which have a unique bitter taste. Fruits are considered as a rich source of vitamins and minerals and 88 mg vitamin C per 100 g.",
    secondDescription:
      "Bitter gourd fruits have medicinal value and are used for curing diabetes, asthma, blood diseases and rheumatism. Drinking fresh bitter gourd juice is recommended by naturopaths. in many ayurvedic medicines.",
  },
  {
    image: cropEggplant,
    hoverImage: descEggplant,
    cropName: "Eggplant",
    cropOtherName: "Talong",
    scientificName: "Solanum melongena",
    firstDescription:
      "Eggplant is a vegetable from the nightshade family (which also includes tomatoes, okra, and zucchini) that grows in a variety of shapes, sizes, and colors, and thrives in hot climates and during the summer months. They range from small globes about two inches in diameter to more oblong and tubular varietals 12 inches long or larger. The seeds of all eggplant varieties are edible, making it especially easy to cook.",
    secondDescription:
      "Eggplant production for the fourth quarter of 2022 slightly increased to 23.50 thousand metric tons or by 0.05 percent from 23.49 thousand metric tons output in the same quarter of 2021.",
  },
];

export { Crops };
