const wt = require("./wt");
const fop = require("./fop");
const csf = require("./csf");
const imob = require("./imob");
const isds = require("./isds");
const home = require("./home");

module.exports = {
  "/": home,
  "/wt/": wt,
  "/csf/": csf,
  "/fop/": fop,
  "/imob/": imob,
  "/isds/": isds,
};
