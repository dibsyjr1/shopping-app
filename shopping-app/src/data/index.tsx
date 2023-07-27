import type { Product as IProduct } from "../types";
import pencilImg from "../images/pencil.jpg";
import paperImg from "../images/paper.jpg";
import glueImg from "../images/glue.jpg";

export const products: IProduct[] = [
  {
    id: 1,
    image: pencilImg,
    name: "Pencil",
    description: "Used to write",
  },
  {
    id: 2,
    image: paperImg,
    name: "Paper",
    description: "Used to write on",
  },
  {
    id: 3,
    image: glueImg,
    name: "Glue",
    description: "Used to stick stuff",
  },
];
