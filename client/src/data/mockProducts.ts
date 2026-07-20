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
      "Levi's denim jacket with pockets. A timeless vintage denim jacket with a relaxed oversized fit and authentic character. Carefully selected for its versatility, it pairs effortlessly with both casual and elevated everyday looks. Size L on tag. 100% cotton denim. Excellent condition",
    price: 45,
    category: "Jackets",
    imageUrl: jacketImage,
    createdAt: "2026-07-17T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Silk Patterned Shirt",
    description:
      "A lightweight vintage silk shirt featuring an elegant all-over pattern with a relaxed fit. Its effortless drape and unique print make it a standout piece for every season. Fabric is 100% silk, made in India. Size M on tag. Very good condition",
    price: 18,
    category: "Shirts",
    imageUrl: shirt3Image,
    createdAt: "2026-07-17T10:05:00.000Z",
  },
  {
    id: "3",
    title: "Handmade Boho Top",
    description:
      "A handcrafted 70s boho-inspired top with delicate embroidered details and a relaxed silhouette. Perfect for warm days. Best fits size S–M.",
    price: 13,
    category: "Tops",
    imageUrl: top1Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
    {
    id: "4",
    title: "Animal Printed Dress",
    description:
      "Vintage Anna Riska dress with a bold animal-inspired print and asymmetrical hem. A statement piece that combines comfort with timeless character. Size L. Fabric is 100% viscose. Excellent condition",
    price: 28,
    category: "Dresses",
    imageUrl: dress2Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
  {
    id: "5",
    title: "Retro Striped Shorts",
    description:
      "Retro style striped colorful cotton shorts. Their playful colors and relaxed fit make them ideal for effortless summer styling. Waist 38 cm • Best fits size M. Very good used condition.",
    price: 18,
    category: "Shorts",
    imageUrl: shortsImage,
    createdAt: "2026-07-17T10:00:00.000Z",
  },
  {
    id: "6",
    title: "Maxi Romantic Dress",
    description:
      "A flowing maxi burgundy dress with a romantic silhouette and graceful movement. Carefully chosen for its timeless elegance and feminine vintage charm. One size on tag • Best fits sizes S–M. Perfect condition.",
    price: 22,
    category: "Dresses",
    imageUrl: dress1Image,
    createdAt: "2026-07-17T10:05:00.000Z",
  },
  {
    id: "7",
    title: "Patterned Tie Front Shirt",
    description:
      "Short sleeve shirt with abstract pattern and front tie detail. An easy way to add personality and effortless style to any outfit. Size L. Very good used condition",
    price: 13,
    category: "Shirts",
    imageUrl: shirt2Image,
    createdAt: "2026-07-17T10:10:00.000Z",
  },
    {
    id: "8",
    title: "Maxi Patterned Skirt",
    description:
      "A vintage maxi skirt with a striking geometric pattern and beautiful movement. Designed to stand out while remaining comfortable and easy to style. Waist 36 cm • Best fits size S. Excellent condition",
    price: 16,
    category: "Skirts",
    imageUrl: skirtImage,
    createdAt: "2026-07-17T10:10:00.000Z",
  }
];