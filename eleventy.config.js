import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

// PREVIEW=1 shows drafts too (npm run preview). The live site never does.
const PREVIEW = Boolean(process.env.PREVIEW);
const VIDEO = /\.(mp4|webm|mov|m4v)$/i;

export default function (eleventyConfig) {
  // Photos straight off a phone are huge: every <img> is resized and
  // converted to WebP and JPEG at build time, so pages stay quick.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["webp", "jpeg"],
    widths: [640, 1280, 1920],
    failOnError: false,
    htmlOptions: {
      imgAttributes: { loading: "lazy", decoding: "async" },
    },
  });

  // Rewrites /links and /media for a project site served under /<repo>/.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/media": "media" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("builds", (api) =>
    api
      .getFilteredByGlob("src/builds/*.md")
      .filter((item) => PREVIEW || !item.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("isVideo", (path) => VIDEO.test(path || ""));

  eleventyConfig.addFilter("monthYear", (date) =>
    new Date(date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
  );

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  // Catalogue numbers: the oldest build is No. 001.
  eleventyConfig.addFilter("catNo", (builds, url) => {
    const i = builds.findIndex((b) => b.url === url);
    if (i < 0) return "";
    return "No. " + String(builds.length - i).padStart(3, "0");
  });

  eleventyConfig.addFilter("allTags", (builds) => {
    const counts = new Map();
    for (const b of builds) for (const t of b.data.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([t]) => t);
  });

  eleventyConfig.addFilter("neighbour", (builds, url, step) => {
    const i = builds.findIndex((b) => b.url === url);
    return i < 0 ? null : builds[i + step] || null;
  });

  eleventyConfig.addGlobalData("preview", PREVIEW);

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
