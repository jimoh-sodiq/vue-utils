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
