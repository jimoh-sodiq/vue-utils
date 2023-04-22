interface Package {
  name: string;
  description: string;
  link: string;
  keywords: string[];
}

export function usePackageList(): Package[] {
  return [
    {
      name: "@sidebase/nuxt-pdf",
      description:
        "Nuxt.js module and jspdf wrapper for downloading pdfs from the template",
      link: "https://sidebase.io/nuxt-pdf/getting-started/quick-start",
      keywords: ["pdf", "download", "nuxt"],
    },
    {
      name: "fuse.js",
      description:
        "A package for handling fuzzy search or string matching, luckily vueuse already has integrations for the package using the @vueuse/integrations",
      link: "https://fusejs.io/",
      keywords: ["fuzzy", "search", "string", "matching"],
    },
    {
      name: "grid.js",
      description:
        "Grid.js is a Free and open-source JavaScript table plugin. It works with most JavaScript frameworks, including React, Angular, Vue and VanillaJs. A good tip is to create a composable as a wrapper for the function ",
      link: "https://gridjs.io/",
      keywords: ["grid", "table", "data", "rows", "columns"],
    }
  ];
}
