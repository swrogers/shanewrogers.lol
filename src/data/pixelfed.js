// Data feed for my posts on pixelfed.social
// With inspiration from:
// https://www.raymondcamden.com/2022/03/08/including-rss-content-in-your-eleventy-site

const feedParser = require("rss-parser");

let parser = new feedParser();

module.exports = async function () {
  let feed = await parser.parseURL(
    "https://pixelfed.social/users/swrogers.atom",
  );

  let image_posts = [];

  feed.items.forEach((item) => {
    let new_content = item.content.replace(/[\t\n]/g, "");
    let img_close_index = new_content.indexOf(">");
    let img_tag = new_content.substring(0, img_close_index + 1);
    let p_tag = new_content.substring(img_close_index + 1);

    image_posts.push({
      id: item.id,
      img: img_tag,
      p: p_tag,
      date: item.pubDate,
    });
  });

  // return feed.items;
  return image_posts;
};
