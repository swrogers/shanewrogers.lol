// Data feed for my posts on pixelfed.social
// With inspiration from:
// https://www.raymondcamden.com/2022/03/08/including-rss-content-in-your-eleventy-site

const feedParser = require("rss-parser");

let parser = new feedParser();

module.exports = async function () {
  let feed = await parser.parseURL(
    "https://pixelfed.social/users/swrogers.atom",
  );
  return feed.items;
};
