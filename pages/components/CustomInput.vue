<template>
  <div>
    <h1>Custom Input</h1>
    <p>This is a custom input component that has many features</p>
    <div>
      <h3>Dependencies are:</h3>
      <ul>
        <li>vue-use - (for debouncing the input)</li>
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
        <li>
          Debouce built into it with maxWaitTime prop and debouce time allowed
        </li>
      </ul>
    </div>
    <div>
      <h3>Props and prop types:</h3>
      <ul>
        <li>type?: string;</li>
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
        <li>debounceTime?: number;</li>
        <li>maxWaitTime?: number;</li>
      </ul>
    </div>

    <main>
      <h1>Demo here</h1>
      <section class="px-5 flex flex-col gap-y-5">
        <div>
          <p class="text-sm text-blue-600 font-semibold">
            With label and placeholder
          </p>
          <CustomInput label="Name:" placeholder="Enter name here.." />
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">Error State</p>
          <CustomInput
            label="Name:"
            placeholder="Enter name here.."
            error
            error-text="This is a required field"
          />
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">Disabled State</p>
          <CustomInput label="Name:" placeholder="Enter name here.." disabled />
        </div>

        <div>
          <p class="text-sm text-blue-600 font-semibold">
            Debounced State (300 milliseconds)
          </p>
          <CustomInput
            label="Name:"
            v-model="debouncedName"
            placeholder="Enter name here.."
            :debounceTime="300"
          />
          <p>You typed: {{ debouncedName }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const debouncedName = ref("");
</script>
