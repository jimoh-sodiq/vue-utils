<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold">
      Nuxt Packages <span class="text-green-500">({{ results.length }})</span>
    </h1>
    <h2 class="text-sm text-gray-500 mb-6">
      A Collection of Nuxt packages and modules, also includes relevant modules
      for vue and JS
    </h2>
    <div class="mb-5 sticky top-5">
      <CustomInput
        label="Search"
        v-model="searchTerm"
        placeholder="Enter a search keyword e.g pdf"
      />
    </div>
    <div>
      <ul v-if="results.length" class="space-y-4">
        <li v-for="(nuxtPackage, index) in results" :key="index" class="">
          <div class="">
            <p class="font-semibold text-lg">{{ nuxtPackage.item.name }}</p>
            <p class="text-sm">{{ nuxtPackage.item.description }}</p>
            <p class="text-xs">
              <span class="fontt-semibold">Website: </span>
              <a
                class="text-blue-500 hover:underline"
                :href="nuxtPackage.item.link"
                target="_blank"
                >{{ nuxtPackage.item.link }}</a
              >
            </p>
          </div>
        </li>
      </ul>

      <p v-else class="text-sm font-semibold">
        No package found for:
        <span class="font-bold text-red-600 uppercase">{{ searchTerm }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFuse } from "@vueuse/integrations/useFuse";

interface Package {
  name: string;
  description: string;
  link: string;
  keywords: string[];
}

const searchTerm = ref("");

// const packageList = ref<Package[]>([
//   {
//     name: "@sidebase/nuxt-pdf",
//     description:
//       "Nuxt.js module and jspdf wrapper for downloading pdfs from the template",
//     link: "https://sidebase.io/nuxt-pdf/getting-started/quick-start",
//     keywords: ["pdf", "download", "nuxt"],
//   },
//   {
//     name: "fuse.js",
//     description:
//       "A package for handling fuzzy search or string matching, luckily vueuse already has integrations for the package using the @vueuse/integrations",
//     link: "https://fusejs.io/",
//     keywords: ["fuzzy", "search", "string", "matching"],
//   },
//   {
//     name: "grid.js",
//     description:
//       "Grid.js is a Free and open-source JavaScript table plugin. It works with most JavaScript frameworks, including React, Angular, Vue and VanillaJs. A good tip is to create a composable as a wrapper for the function ",
//     link: "https://gridjs.io/",
//     keywords: ["grid", "table", "data", "rows", "columns"],
//   },
// ]);

const packageList = usePackageList()

const options = computed(() => ({
  fuseOptions: {
    keys: ["name", "description", "keywords"],
    isCaseSensitive: false,
    threshold: 0.4,
  },
  matchAllWhenSearchEmpty: true,
}));

const { results } = useFuse(searchTerm, packageList, options);
</script>
