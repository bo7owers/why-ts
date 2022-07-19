const guideSidebar = {
  text: "Guide",
  items: [{ text: "Types of types", link: "/guide/types-of-types" }],
};

export default {
  title: "Why TS?",
  description: "Quick explanation of the benefits of Typescript",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Quick Guide", link: "/guide/" },
      { text: "Resources", link: "/resources/" },
    ],
    sidebar: { "/guide/": [guideSidebar] },
    editLink: {
      pattern: "https://github.com/bo7owers/why-ts/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
};
