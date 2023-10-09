// require("babel-register")({
//   presets: ["es2015", "react"],
// });

// const router = require("./global-vistar/src/Routing.jsx").default;
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//   return new Sitemap(router)
//     .build("https://www.globalvistar.com")
//     .save("./public/sitemap.xml");
// }

// generateSitemap();

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { Readable } = require("stream");

const generateSitemap = async () => {
  // Create a stream to write the sitemap data
  const sitemapStream = new SitemapStream({
    hostname: "https://www.globalvistar.com",
  });

  // Generate the sitemap URLs dynamically
  const urls = [
    { url: "/", changefreq: "daily", priority: 0.7 },
    { url: "/about", changefreq: "daily", priority: 0.7 },
    { url: "/BlogPage", changefreq: "daily", priority: 0.7 },
    { url: "/ProductCategories", changefreq: "daily", priority: 0.7 },
    { url: "/login", changefreq: "daily", priority: 0.7 },
    // { url: "/about", changefreq: "weekly", priority: 0.5 },
    // Add more URLs as needed
  ];

  // Add each URL to the sitemap stream
  urls.forEach((url) => {
    sitemapStream.write(url);
  });

  // End the stream
  sitemapStream.end();

  // Convert the stream to a string
  const sitemap = await streamToPromise(Readable.from(sitemapStream)).then(
    (data) => data.toString()
  );

  // Write the sitemap to a file
  const writeStream = createWriteStream("./sitemap.xml");
  writeStream.write(sitemap);
  writeStream.end();

  console.log("Sitemap generated successfully!");
};

generateSitemap();
