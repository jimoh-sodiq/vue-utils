<template>
  <div>
    <h1>Welcome to jimoh utils</h1>
    <p>
      Below are the list of features currently available and my best practices
      explained for them too
    </p>
    <ul>
      <li v-for="(features, index) in featureList" :key="index">
        {{ features }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const featureList = [
  "component - Reusable Button",
  "component - Reusable Quantity Increase",
  "composable - Use Currency Formatter",
  "component - Reusable Pagination component",
  "component - Reusable File Picker",
  "component - Reusable Toggle Button",
  "Global Feature - Modal System",
  "component - Reusable Modal",
  "Global Feature - Toast notification system",
  "component - Single Toast Component",
  "Global Feature - Internationalization and Localization e.g elk zone",
  "composable - Use Custom Fetch( nuxt useFetch wrapper )",
  "component - Programmatic Sidebar",
  "component - Reusable Sidebar and sidebar items", // use in the programmatic sidebar
  "component - Reusable Otp Input",
  "component - Reusable Avatar",
  "component - Reuseable Skeleton loader",
  "Global Feature - All Icon management techniques",
  "Global Feature - Tooltip manager",
  "Global Feature - Live theme customization e.g elk zone",
  "Global Feature - Paystack plugin in nuxt ssr",
  "Global Feature - Vanilla cookie consent",
  "composable - Use Custom Head ( a nuxt useHead wrapper)",
  "component - Reusable Tag Input",
];

const completedFeatures = [
  "composable - Use Table Selection",
  "component - Reusable Input",
  "packages list",
  "component - Reusable Select",
  "component - Reusable Accordion",
]
</script>
