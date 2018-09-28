module.exports = {
  dest: "./docs",
  base: "/vuepress/",
  title: "Vuepress Blog",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "Blog", link: "/blog/" }],
    sidebar: ["/", "/blog/"]
  }
};
