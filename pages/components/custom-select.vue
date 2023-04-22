<template>
  <div class="p-4">
    <h1>Custom Select</h1>
    <p>This is a custom input component that has many features</p>
    <div>
      <h3>Dependencies are:</h3>
      <ul>
        <li>
          Class variance authority - (for dynamic classes - not necessary)
        </li>
      </ul>
    </div>
    <div>
      <h3>Features are:</h3>
      <ul>
        <li>Error state, disabled State and focused state handled</li>
        <li>
          Custom styles for all states with dynamic classes for handle
          overlapping states (e.g when error and disabled are true)
        </li>
      </ul>
    </div>
    <div>
      <h3>Props and prop types:</h3>
      <ul>
        <li>modelValue?: string | number; ( the v-model )</li>
        <li>id?: string;</li>
        <li>label?: string;</li>
        <li>placeholder?: string;</li>
        <li>required?: boolean;</li>
        <li>error?: boolean;</li>
        <li>errorText?: string;</li>
        <li>disabled?: boolean;</li>
        <li>max?: string;</li>
        <li>autofocus?: boolean;</li>
      </ul>
    </div>

    <main>
      <h1>Demo here</h1>
      <section class="flex flex-col gap-y-5">
        <div>
          <p class="text-sm text-blue-600 font-semibold">
            With label and placeholder
          </p>
          <CustomSelect label="Name:">
            <option selected value="" disabled>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </CustomSelect>
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">Error State</p>
          <CustomSelect
            label="Name:"
            error
            error-text="This is a required field"
          >
            <option selected value="" disabled>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </CustomSelect>
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">Disabled State</p>
          <CustomSelect label="Name:" disabled
            ><option selected value="" disabled>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </CustomSelect>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const debouncedName = ref("");
</script>
