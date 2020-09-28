const { selectText, ariaLabel, editLinkText } = require("../globalConfigs")

module.exports = {
  label: "Computer Science Fundamentals",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
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
};
