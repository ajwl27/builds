const PREVIEW = Boolean(process.env.PREVIEW);

// Every file in src/builds becomes a page at /builds/<file-name>/.
// Drafts stay off the live site until you untick "Draft".
export default {
  layout: "build.njk",
  eleventyComputed: {
    permalink: (data) => (data.draft && !PREVIEW ? false : `/builds/${data.page.fileSlug}/`),
    eleventyExcludeFromCollections: (data) => Boolean(data.draft && !PREVIEW),
  },
};
