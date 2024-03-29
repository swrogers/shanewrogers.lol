const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  try {
    let url = "https://social.targaryen.house/@swrogers.rss";

    return EleventyFetch(url, {
      duration: "0s", // always get new data - i don't post often
      // type: "json",
      directory: ".cache",
    });
  } catch (e) {
    console.log("Unable to fetch from social.targaryen.house: ", e);
  }
};
