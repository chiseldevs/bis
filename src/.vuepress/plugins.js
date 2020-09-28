module.exports = [
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
];
