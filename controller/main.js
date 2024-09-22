const main = {
  main: (req, res) => {
    res.render("index");
  },
  shop: (req, res) => {
    res.render("shop");
  },
  tracking: (req, res) => {
    res.render("tracking");
  },
  blog: (req, res) => {
    res.render("blog");
  },
  contact: (req, res) => {
    res.render("contact");
  },
};

module.exports = main;
