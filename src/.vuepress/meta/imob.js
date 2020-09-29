const { selectText, ariaLabel, editLinkText } = require("../globalConfigs");

module.exports = {
  label: "Introduction to Management and Organisational Behavior",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
  nav: [
    {
      text: "Main",
      link: "/imob/",
    },
    {
      text: "Overview",
      link: "/imob/overview/",
    },
    {
      text: "Useful",
      link: "/imob/useful/",
    },
    {
      text: "Rules",
      link: "/imob/rules/",
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
              link: "/imob/tw1/lecture/",
            },
            {
              text: "Seminar",
              link: "/imob/tw1/seminar/",
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
        children: ["/imob/tw1/lecture.md", "/imob/tw1/seminar.md"],
      },
    ],
  },
};
