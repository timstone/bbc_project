class Home {
  get btn() { return $("a[href*='/example']"); }
}

module.exports = new Home();