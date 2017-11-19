const SiteController = {};

//Index
SiteController.Index = function(req, res) {
  res.render("/")
}
//About
SiteController.About = function(req, res) {
  res.render("/about")
}
//Contact
SiteController.Contact = function(req, res) {
  res.render("/contact")
}

module.exports = SiteController;
