const axios = require("axios");

function promise(value) {
  return new Promise(function (resolve, reject) {
    axios.get("https://dummyjson.com/products").then((res) => {
      if (!res.data.products.length) {
        reject(new Error("Api is not working properly!!!"));
      } else {
        resolve(res.data);
      }
    });
  });
}

promise(25)
  .then((data) => {
    console.log(data, "daatatatat");
  })
  .catch((err) => console.log(err));
