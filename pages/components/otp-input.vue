<template>
  <div class="p-4">
    <h1>Reusable Otp Input</h1>
    <p>This is a custom resuable Otp Input component with keyboard navigation</p>
    <div>
      <h3>Dependencies are:</h3>
      <ul>
        <li>None</li>
      </ul>
    </div>
    <div>
      <h3>Features are:</h3>
      <ul>
        <li>v-model binding</li>
        <li>Dynamic input count</li>
        <li>Disabled State</li>
        <li>Autofocus possible</li>
        <li>Keyboard navigation</li>
      </ul>
    </div>
    <div>
      <h3>Props and prop types:</h3>
      <ul>
        <li>inputCount: string | number</li>
        <li>type?: string;</li>
        <li>placeholder?: string;</li>
        <li>disabled?: boolean;</li>
        <li>modelValue: string[] | number[] (the v-model)</li>
        <li>autoFocus?: boolean;</li>
      </ul>
    </div>

    <main>
      <h1>Demo here</h1>
      <section class="flex flex-col gap-y-5">
        <div>
          <p class="text-sm text-blue-600 font-semibold">
            Autofocus, with placholder(-) and 5 boxes
          </p>
          <OtpInput v-model="otp1" placeholder="-" :inputCount="5" autoFocus />
          <p class="mt-4 text-sm text-gray-600">Otp: {{ otp1 }}</p>
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">
            4 boxes, no placeholder, password type
          </p>
          <OtpInput
            v-model="otp2"
            placeholder=""
            :inputCount="4"
            type="password"
          />
          <p class="mt-4 text-sm text-gray-600">Otp: {{ otp2 }}</p>
          <button
            @click="clearOtp2"
            class="text-sm rounded p-2 bg-gray-500 text-gray-100 mt-4"
          >
            Clear
          </button>
        </div>
        <div>
          <p class="text-sm text-blue-600 font-semibold">disabled state</p>
          <OtpInput
            v-model="otp3"
            placeholder="*"
            :inputCount="5"
            :disabled="disabled"
          />
          <p class="mt-4 text-sm text-gray-600">Otp: {{ otp3 }}</p>
          <button
            @click="toggleDisabled"
            class="text-sm rounded p-2 bg-gray-500 mt-4 text-gray-100"
          >
            {{ disabled ? "Enable" : "Disable" }}
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const otp1 = ref([]);
const otp2 = ref([]);
const otp3 = ref([]);

const disabled = ref(true);

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function clearOtp2() {
  otp2.value = [];
}
</script>
