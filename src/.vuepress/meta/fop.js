const { selectText, ariaLabel, editLinkText } = require("../globalConfigs")

module.exports = {
  label: "Fundamentals of Programming",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
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
};
