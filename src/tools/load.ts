export const data = async () =>
  fetch("https://fakestoreapi.com/products/category/").then((res) => {
    return res.json();
  });
