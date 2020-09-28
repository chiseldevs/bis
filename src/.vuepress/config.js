const configs = require("./meta");
const plugins = require("./plugins");
const locales = require("./locales");
const metaConfigs = require("./metaConfigs");

module.exports = {
  locales: locales,
  head: metaConfigs,
  theme: "yuu",
  plugins: plugins,
  themeConfig: {
    yuu: {
      colorThemes: ["red"],
      defaultDarkTheme: true,
    },
    logo: "/assets/logo.png",
    repo: "chiseldevs/bis",
    docsBranch: "master",
    // algolia: {
    //   apiKey: "e4d6caaf31d6f840693811e5db8b56dc",
    //   appId: "5HEBRR0MXO",
    //   indexName: "chisel",
    // },
    docsDir: "src",
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    searchPlaceholder: "Search...",
    searchMaxSuggestions: 10,
    smoothScroll: true,
    locales: configs,
  },
};
