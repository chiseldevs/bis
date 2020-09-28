module.exports = {
  locales: {
    "/": {
      title: "BIS | Chisel Devs",
      description: "BSc (Hons) in Business Information Systems",
    },
    "/csf/": {
      title: "CSF | BIS",
      description: "Computer Science Fundamentals | BIS",
    },
    "/fop/": {
      title: "FOP | BIS",
      description: "Fundamentals of Programming | BIS",
    },
    "/imob/": {
      title: "IMOB | BIS",
      description:
        "Introduction to Management and Organisational Behavior | BIS",
    },
    "/isds/": {
      title: "ISDS | BIS",
      description: "Introduction to Statistics and Data Science | BIS",
    },
    "/wt/": {
      title: "WT | BIS",
      description: "Web Technology | BIS",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "blue" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/assets/favicons/apple-icon-57x57.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/favicons/apple-icon-60x60.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/assets/favicons/apple-icon-72x72.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/assets/favicons/apple-icon-76x76.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/favicons/apple-icon-114x114.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/assets/favicons/apple-icon-120x120.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/favicons/apple-icon-144x144.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/assets/favicons/apple-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-icon-180x180.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/assets/favicons/android-icon-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/assets/favicons/manifest.json" }],
    ["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#1459c7" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "assets/favicons/ms-icon-144x144.png",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#1459c7" }],
  ],
  theme: "yuu",
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "MySWUpdatePopup",
        updatePopup: {
          "/": {
            message: "New contents is available.",
            buttonText: "UPDATE",
          },
        },
      },
    ],
    "@vuepress/back-to-top",
    "@vuepress/last-updated",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
  ],
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
