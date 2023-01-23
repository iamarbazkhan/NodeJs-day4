const axios = require("axios");
const express = require("express");
const app = express();
app.get("/data", async (req, res) => {
  const data = await getWeatherInfo();
  console.log("data -->", data);
  res.status(200).send({ data: data });
});
async function getWeatherInfo() {
  const weatherData = await axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
  return weatherData;
}
app.listen(9000, console.log("run on port 9000"));
