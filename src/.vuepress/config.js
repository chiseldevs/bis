const plugins = require("./plugins")
const locales = require("./locales")
const metaConfigs = require("./metaConfigs")

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
    locales: {
      "/": {
        label: "Home",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/",
          },
          {
            text: "About",
            link: "/about/",
          },
          {
            text: "Chisel",
            link: "https://chisel.uz",
            target: "_self",
          },
          {
            text: "Issues",
            link: "https://github.com/chiseldevs/bis/issues",
            target: "_self",
          },
          {
            text: "Links",
            ariaLabel: "Links Menu",
            items: [
              {
                text: "Telegram",
                items: [
                  {
                    text: "+70 BIS",
                    link: "tg://resolve?domain=SeventyPlusBIS",
                    target: "_blank",
                  },
                  {
                    text: "Group",
                    link: "https://t.me/bislvl4",
                    target: "_blank",
                  },
                  {
                    text: "Feed Channel",
                    link: "tg://resolve?domain=chiseldevs",
                    target: "_blank",
                  },
                ],
              },
              {
                text: "Devs",
                items: [
                  {
                    text: "GitHub",
                    link: "https://github.com/chiseldevs",
                    target: "_blank",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/csf/": {
        label: "Computer Science Fundamentals",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/csf/",
          },
          {
            text: "Overview",
            link: "/csf/overview/",
          },
          {
            text: "Useful",
            link: "/csf/useful",
          },
        ],
      },
      "/fop/": {
        label: "Fundamentals of Programming",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/fop/",
          },
          {
            text: "Overview",
            link: "/fop/overview/",
          },
          {
            text: "Useful",
            link: "/fop/useful",
          },
        ],
      },
      "/imob/": {
        label: "Introduction to Management and Organisational Behavior",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/imob/",
          },
        ],
      },
      "/isds/": {
        label: "Introduction to Statistics and Data Science",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/isds/",
          },
        ],
      },
      "/wt/": {
        label: "Web Technology",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "~Correct mistakes~",
        nav: [
          {
            text: "Main",
            link: "/wt/",
          },
        ],
      },
    },
  },
};
