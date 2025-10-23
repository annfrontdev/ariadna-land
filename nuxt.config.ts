// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@nuxt/content"],
  ssr: false,
  app: {
    baseURL: "/ariadna-land/",
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href:`https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400&family=Jost:wght@300&family=Marcellus+SC:wght@400&family=Montserrat:wght@400&display=swap`,
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/styles/variables.scss";',
        },
      },
    },
  },
  css: ["normalize.css/normalize.css", "./assets/styles/main.scss"],

  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./assets/icons",
      },
    ],
  },
});
