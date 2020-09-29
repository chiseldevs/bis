const { selectText, ariaLabel, editLinkText } = require("../globalConfigs");

module.exports = {
  label: "Web Technology",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
  nav: [
    {
      text: "Main",
      link: "/wt/",
    },
    {
      text: "Overview",
      link: "/wt/overview/",
    },
    {
      text: "Useful",
      link: "/wt/useful/",
    },
    {
      text: "Teaching Weeks",
      ariaLabel: "Weeks",
      items: [
        {
          text: "Teaching Week 1",
          items: [
            {
              text: "Lecture",
              link: "/wt/tw1/lecture/",
            },
            {
              text: "Seminar",
              link: "/wt/tw1/seminar/",
            },
          ],
        },
      ],
    },
  ],
  sidebar: {
    "/": [
      {
        title: "Teaching Week 1",
        collapsable: true,
        children: ["/imob/wt/lecture.md", "/imob/wt/seminar.md"],
      },
    ],
  },
};
