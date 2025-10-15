export const products = [
  { id: 1, title: "Аромасвечи", path: "/candles" },
  { id: 2, title: "Диффузоры", path: "/diffusers" },
  { id: 3, title: "Мерч", path: "/merch" },
  { id: 4, title: "Контакты", path: "/contacts" },
];

export const headerLinks = {
  left: [...products.slice(0, products.length / 2)],
  right: [...products.slice(products.length / 2)],
};
