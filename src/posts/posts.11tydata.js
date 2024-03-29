// Liberally borrowed from the following:
// https://jkc.codes/blog/creating-drafts-in-eleventy/
//
// Will also add the following to all posts (through `posts.json`):
// layout: post
// tags: posts

const isDevEnv = process.env.ELEVENTY_ENV === "development";
const todaysDate = new Date();

function showDraft(data) {
  const isDraft = "draft" in data && data.draft !== false;
  const isFutureDate = data.page.date > todaysDate;
  return isDevEnv || (!isDraft && !isFutureDate);
}

module.exports = function () {
  return {
    eleventyComputed: {
      eleventyExcludeFromCollections: function (data) {
        if (showDraft(data)) {
          return data.eleventyExcludeFromCollections;
        } else {
          return true;
        }
      },

      permalink: function (data) {
        if (showDraft(data)) {
          return data.permalink;
        } else {
          return false;
        }
      },

      //     layout: () => "post",
      //     tags: () => ["posts"],
    },
  };
};
