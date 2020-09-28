const { selectText, ariaLabel, editLinkText } = require("../globalConfigs");

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
    {
      text: "Teaching Weeks",
      ariaLabel: "Weeks",
      items: [
        {
          text: "Teaching Week 1",
          items: [
            {
              text: "Lecture",
              link: "/csf/tw1/lecture/",
            },
            {
              text: "Seminar",
              link: "/csf/tw1/seminar/",
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
        children: ["/csf/tw1/lecture.md", "/csf/tw1/seminar.md"],
      },
      {
        title: "Teaching Week 2",
        collapsable: true,
        children: ["/csf/tw2/lecture.md", "/csf/tw2/seminar.md"],
      },
    ],
  },
};
