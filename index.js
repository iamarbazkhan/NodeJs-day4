const axios = require("axios");
const express = require("express");
const app = express();
app.get("/data", async (req, res) => {
  const data = await getProductData();
  res.status(200).send({ data: data });
});
async function getProductData() {
  const productData = await axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
  return productData;
}
app.listen(9000, console.log("run on port 9000"));
