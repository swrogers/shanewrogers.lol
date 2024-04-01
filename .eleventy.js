const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require("eleventy-plugin-reading-time");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
const htmlmin = require("html-minifier");
const fs = require("fs");
const path = require("path");

const isDev = process.env.ELEVENTY_ENV === "development";
const isProd = process.env.ELEVENTY_ENV === "production";

const manifestPath = path.resolve(
  __dirname,
  "_site",
  "assets",
  "manifest.json",
);

const manifest = isDev
  ? {
      "main.js": "/assets/main.js",
      "main.css": "/assets/main.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginMermaid);

  // const highlighter = eleventyConfig.markdownHighlighter;
  // eleventyConfig.addMarkdownHighlighter((str, language) => {
  //   if (language === "language-mermaid") {
  //     return `<pre class="mermaid">${str}</pre>`;
  //   }
  //   return highlighter(str, language);
  // });

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  eleventyConfig.addShortcode("bundledcss", function () {
    return manifest["main.css"]
      ? `<link href="${manifest["main.css"]}" rel="stylesheet" />`
      : "";
  });

  eleventyConfig.addShortcode("bundledjs", function () {
    return manifest["main.js"]
      ? `<script src="${manifest["main.js"]}"></script>`
      : "";
  });

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy",
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("dateToIso", (dateString) => {
    return new Date(dateString).toISOString();
  });

  eleventyConfig.addFilter("isoDateToHtmlString", (dateObj) => {
    return DateTime.fromISO(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("isoDateToReadable", (dateObj) => {
    return DateTime.fromISO(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    return [...tagSet];
  });

  eleventyConfig.addFilter("pageTags", (tags) => {
    const generalTags = ["all", "nav", "post", "posts"];

    return tags
      .toString()
      .split(",")
      .filter((tag) => {
        return !generalTags.includes(tag);
      });
  });

  // eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
  //   if (outputPath && outputPath.endsWith(".html") && isProd) {
  //     return htmlmin.minify(content, {
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       useShortDoctype: true,
  //     });
  //   }

  //   return content;
  // });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if (
      this.page.outputPath &&
      this.page.outputPath.endsWith(".html") &&
      isProd
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // This is ugly, does it work?
  // https://github.com/11ty/eleventy/issues/278#issuecomment-872070391
  const slugifyFn = async (str) => {
    const fn = await import("@sindresorhus/slugify");
    return fn.default(str);
  };
  eleventyConfig.addFilter("slug", (str) => slugifyFn(str));
  eleventyConfig.addNunjucksAsyncFilter("slug", (str, callback) => {
    slugifyFn(str)
      .then((value) => callback(null, value))
      .catch((err) => callback(err));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      data: "data",
      layouts: "layouts",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
