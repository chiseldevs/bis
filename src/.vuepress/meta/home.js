const { selectText, ariaLabel, editLinkText } = require("../globalConfigs");

module.exports = {
  label: "Home",
  selectText: selectText,
  ariaLabel: ariaLabel,
  editLinkText: editLinkText,
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
};
