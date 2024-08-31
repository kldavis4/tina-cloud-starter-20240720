import { defineConfig } from "tinacms";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  // search: {
  //   tina: {
  //     indexerToken: process.env.TINA_SEARCH_TOKEN,
  //     stopwordLanguages: ['eng'],
  //   },
  //   indexBatchSize: 100,
  //   maxSearchIndexFieldLength: 100,
  // },
  schema: {
    collections: [Page, Post, Author, Global],
  },
  tinaioConfig: {
    frontendUrlOverride: 'http://localhost:3002', // 'https://app.tina.io'
    identityApiUrlOverride: 'https://kldavis4-identity.tinajs.dev',
    contentApiUrlOverride: 'https://kldavis4-content.tinajs.dev',
    //assetsApiUrlOverride: 'https://kldavis4-assets.tinajs.dev'
    assetsApiUrlOverride: 'https://assets-api-local-kldavis4.tinajs.dev'
  }
});

export default config;
