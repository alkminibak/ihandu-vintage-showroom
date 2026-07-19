import jacketImage from "../assets/images/products/jacket.jpg";
import shirt3Image from "../assets/images/products/shirt3.jpg";
import top1Image from "../assets/images/products/top1.jpg";
import dress2Image from "../assets/images/products/dress2.jpg";
import shortsImage from "../assets/images/products/shorts.jpg";
import dress1Image from "../assets/images/products/dress1.jpg";
import shirt2Image from "../assets/images/products/shirt2.jpg";
import skirtImage from "../assets/images/products/skirt.jpg";

import type { Product } from "../types/Product";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Oversized Denim Jacket",
    description:
      "Levi's vintage denim jacket in excellent condition.",
    price: 45,
    category: "Jackets",
    imageUrl: jacketImage,
    createdAt: "2026-07-17T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Silk Patterned Shirt",
    description:
      "Lightweight vintage shirt with a relaxed fit and abstract pattern.",
    price: 18,
    category: "Shirts",
    imageUrl: shirt3Image,
    createdAt: "2026-07-17T10:05:00.000Z",
  },
  {
    id: "3",
    title: "Handmade Boho Top",
    description:
      "Boho 70s style cotton cropped top",
    price: 13,
    category: "Tops",
    imageUrl: top1Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
    {
    id: "4",
    title: "Animal Printed Dress",
    description:
      "Animal printed dress with asymmetrical hem",
    price: 28,
    category: "Dresses",
    imageUrl: dress2Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
  {
    id: "5",
    title: "Retro Striped Shorts",
    description:
      "Retro style striped colorful shorts",
    price: 18,
    category: "Shorts",
    imageUrl: shortsImage,
    createdAt: "2026-07-17T10:00:00.000Z",
  },
  {
    id: "6",
    title: "Maxi Romantic Dress",
    description:
      "Maxi dress in burgunty with open back",
    price: 22,
    category: "Dresses",
    imageUrl: dress1Image,
    createdAt: "2026-07-17T10:05:00.000Z",
  },
  {
    id: "7",
    title: "Patterned Tie Front Shirt",
    description:
      "Short sleeve shirt with abstract pattern and front tie design",
    price: 13,
    category: "Shirts",
    imageUrl: shirt2Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
    {
    id: "8",
    title: "Maxi Patterned Skirt",
    description:
      "Abstract patterned maxi skirt",
    price: 16,
    category: "Skirts",
    imageUrl: skirtImage,
    createdAt: "2026-07-17T10:10:00.000Z",
  }
];