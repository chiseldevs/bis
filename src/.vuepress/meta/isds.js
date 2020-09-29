const { selectText, ariaLabel, editLinkText } = require("../globalConfigs");

module.exports = {
  label: "Introduction to Statistics and Data Science",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
  nav: [
    {
      text: "Main",
      link: "/isds/",
    },
    {
      text: "Overview",
      link: "/isds/overview/",
    },
    {
      text: "Useful",
      link: "/isds/useful/",
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
              link: "/isds/tw1/lecture/",
            },
            {
              text: "Seminar",
              link: "/isds/tw1/seminar/",
            },
            {
              text: "Quiz",
              link: "/isds/tw1/quiz/"
            }
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
        children: [
          "/isds/tw1/lecture.md",
          "/isds/tw1/seminar.md",
          "/isds/tw1/quiz.md"
        ],
      },
    ],
  },
};
