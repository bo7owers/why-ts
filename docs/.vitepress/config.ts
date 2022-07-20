const guideSidebar = {
  text: "Guide",
  items: [
    { text: "What are types", link: "/guide/what-are-types" },
    { text: "Types of types", link: "/guide/types-of-types" },
    { text: "Getting started", link: "/guide/getting-started" },
  ],
};
const homeSidebar = {
  text: "Why TypeScript",
  items: [
    { text: "TypeScript vs JavaScript", link: "/" },
    { text: "Installing TypeScript in Vue 3", link: "/ts-vue3" },
  ],
};
export default {
  title: "Intro to TypeScript",
  description: "Quick explanation of the benefits of Typescript",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Quick Guide", link: "/guide/" },
      { text: "Resources", link: "/resources/" },
    ],
    sidebar: { "/guide/": [guideSidebar], "/": [homeSidebar] },
    editLink: {
      pattern: "https://github.com/bo7owers/why-ts/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
};
