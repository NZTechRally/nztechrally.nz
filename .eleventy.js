const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const { minify } = require("terser");
const pluginBundle = require("@11ty/eleventy-plugin-bundle").default;
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const fs = require("fs");
// const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = async function (eleventyConfig) {
  const { RenderPlugin } = await import("@11ty/eleventy");

  // Store the render functionality for use in shortcodes
  let eleventyInstance;

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/manifest.json");

  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  // eleventyConfig.addPlugin(inclusiveLangPlugin);

  eleventyConfig.setServerOptions({
    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,
  });

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    },
  );

  //  https://github.com/11ty/eleventy/issues/580
  eleventyConfig.addNunjucksFilter("absoluteUrl", (href, base) => {
    let { URL } = require("url");
    return new URL(href, base).toString();
  });

  // https://moment.github.io/luxon/#/formatting
  // https://github.com/moment/luxon/blob/master/docs/formatting.md#the-basics
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { setZone: true })
      .setZone("Pacific/Auckland")
      .setLocale("en")
      .toFormat("dd LLLL yyyy");
  });

  eleventyConfig.addFilter("readableYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { setZone: true })
      .setZone("Pacific/Auckland")
      .setLocale("en")
      .toFormat("yyyy");
  });

  eleventyConfig.addFilter("readableTime", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { setZone: true })
      .setZone("Pacific/Auckland")
      .setLocale("en")
      .toFormat("t")
      .toLocaleLowerCase();
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { setZone: true })
      .setZone("Pacific/Auckland")
      .setLocale("en")
      .toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("iso8601Date", (dateObj) => {
    return dateObj.toISOString();
  });

  eleventyConfig.addCollection("speakers", (collection) => {
    return collection
      .getFilteredByTag("speaker")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("speakers2025", (collection) => {
    return collection.getFilteredByTag("speaker2025");
  });

  eleventyConfig.addCollection("panellists", (collection) => {
    return collection.getFilteredByTag("panellist");
  });

  eleventyConfig.addCollection("crew", (collection) => {
    return collection
      .getFilteredByTag("crew")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter("getCurrentCrew", (collection, crewAtEvent) => {
    return collection.filter((crew) =>
      crew.data.crewAtEvent.includes(crewAtEvent),
    );
  });

  eleventyConfig.addFilter("getPastCrew", (collection, crewAtEvent) => {
    return collection.filter(
      (crew) => !crew.data.crewAtEvent.includes(crewAtEvent),
    );
  });

  eleventyConfig.addCollection("talks", (collection) => {
    return collection
      .getFilteredByTag("talk")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter("getSpeakersOfTalk", (collection, speakerKey) => {
    return collection.filter((speaker) =>
      speakerKey.includes(speaker.page.fileSlug),
    );
  });

  eleventyConfig.addFilter("getTalksBySpeaker", (collection, speakerKey) => {
    return collection.filter((talk) => {
      if (!talk.data.speakerKey) return false;
      return talk.data.speakerKey.includes(speakerKey);
    });
  });

  // TODO: Reduce duplication for these settings
  // For 2023 speakers
  eleventyConfig.addCollection("speakers2023", (collection) => {
    return collection.getFilteredByTag("speaker2023");
  });

  eleventyConfig.addCollection("panellists2023", (collection) => {
    return collection
      .getFilteredByTag("panellist")
      .filter((eventName) => (eventName.data.event = "NZTechRally2023"));
  });

  eleventyConfig.addShortcode("renderlayoutblock", function (name) {
    return (this.page.layoutblock || {})[name] || "";
  });

  eleventyConfig.addPairedShortcode("layoutblock", function (content, name) {
    if (!this.page.layoutblock) this.page.layoutblock = {};
    this.page.layoutblock[name] = content;
    return "";
  });

  // Store reference to the configuration for use in shortcodes
  let renderFunction;

  // Set up a rendering helper for the SVG shortcode
  eleventyConfig.on(
    "eleventy.before",
    ({ runMode, outputMode, inputDir, outputDir }) => {
      // This runs before Eleventy processes files
    },
  );

  // https://chriskirknielsen.com/blog/manage-your-svg-files-with-eleventys-render-plugin/#updated-method
  eleventyConfig.addAsyncShortcode(
    "svg",
    async function (filename, svgOptions = {}) {
      const isNjk = svgOptions.hasOwnProperty("isNjk")
        ? svgOptions.isNjk
        : true;
      const filePath = `./src/_includes/svg/${filename}.svg${
        isNjk ? ".njk" : ""
      }`;
      const engine = svgOptions.hasOwnProperty("engine")
        ? svgOptions.engine
        : isNjk
          ? "njk"
          : "html"; // HTML engine for vanilla SVG if none is provided

      // Read the file content
      const fileContent = fs.readFileSync(filePath, "utf-8");

      // If the file doesn't need template processing, return as-is
      if (!isNjk || engine === "html") {
        return fileContent;
      }

      // For Nunjucks template processing, use the built-in Nunjucks instance
      // Import nunjucks and create a minimal environment for rendering
      const nunjucks = require("nunjucks");

      try {
        // Create a simple environment for rendering
        const env = new nunjucks.Environment(
          new nunjucks.FileSystemLoader("./"),
        );
        const rendered = env.renderString(fileContent, svgOptions);
        return rendered;
      } catch (error) {
        console.warn(
          `SVG template processing failed for ${filename}:`,
          error.message,
        );
        return fileContent; // Fallback to raw content
      }
    },
  );

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    passthroughFileCopy: true,
    templateFormats: ["css", "html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
