const axios = require("axios").default;
const config = require("dotenv").config();

module.exports = async function () {
  let url = "https://api.raindrop.io/rest/v1/raindrops/0";

  //    console.log("Token: ", `${process.env.RAINDROP_IO_KEY}`);
  //

  let res = await axios
    .get(url, {
      headers: { Authorization: `${process.env.RAINDROP_IO_KEY}` },
    })
    .catch((error) => {
      console.log("Unable to fetch from raindrop.io: ", error);
    });

  let links = res.data.items;
  /* links should have the following shape:
   * _id, link, title, excerpt, note, type,
   * cover (https link), tags, created (iso date),
   * and other stuff
   */

  return links;
};
