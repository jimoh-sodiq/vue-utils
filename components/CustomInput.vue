<script setup lang="ts">
import { cva } from "class-variance-authority";
const emit = defineEmits<{
  (event: "update:modelValue", value: string | number): void;
  (event: "onTextChanged", value: string | number): void;
}>();
interface Prop {
  type?: string;
  modelValue?: string | number;
  id?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  max?: string;
  autofocus?: boolean;
  debounceTime?: number;
  maxWaitTime?: number;
}
const props = withDefaults(defineProps<Prop>(), {
  type: "text",
  modelValue: "",
  id: "",
  label: "",
  placeholder: "",
  required: false,
  error: false,
  errorText: "",
  disabled: false,
  max: "",
  autofocus: false,
  debounceTime: 0,
  maxWaitTime: 5000,
});
const inputFieldRef = ref() as Ref<HTMLInputElement>;
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("onTextChanged", target.value);
  if (props.type === "number") {
    return debouncedEmit("update:modelValue", Number(target.value));
  }
  debouncedEmit("update:modelValue", target.value);
};
/**
 * this controls the debounce time for the input field
 * default is 0 max is 5000
 */
const debouncedEmit = useDebounceFn(
  (emitText, value) => {
    emit(emitText, value);
  },
  props.debounceTime,
  { maxWait: props.maxWaitTime }
);
function focusInput() {
  inputFieldRef.value.focus();
}
watch(inputFieldRef, () => {
  if (props.autofocus === true) {
    inputFieldRef.value.focus();
  }
});
const labelClass = computed(() => {
  return cva("block text-[13px] first-letter:capitalize mb-[6px] w-fit", {
    variants: {
      disabled: {
        true: ["text-Grey/400"],
        false: [],
      },
      error: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        disabled: false,
        error: true,
        class: "text-Error/500",
      },
      {
        disabled: false,
        error: false,
        class: "text-Text/Headline",
      },
    ],
    defaultVariants: {},
  })({ disabled: props.disabled, error: props.error });
});
const inputClass = computed(() => {
  return cva(
    "h-[43px] px-[14px] w-full outline-none text-sm rounded-[4px] transition-all ease duration-200",
    {
      variants: {
        error: {
          true: [""],
          false: [""],
        },
        disabled: {
          true: [
            "placeholder:text-Grey/400 ring-[1px] ring-State/Disabled/100",
          ],
          false: [
            "placeholder:text-Text/placeholder bg-input-field/field-purple",
          ],
        },
      },
      compoundVariants: [
        {
          disabled: false,
          error: true,
          class: "ring-[1.5px] ring-Error/500",
        },
        {
          disabled: false,
          error: false,
          class:
            "ring-[1px] ring-Noja/Primary/10 focus:ring-[1.5px] focus:ring-Noja/Primary/Main",
        },
      ],
      defaultVariants: {},
    }
  )({
    disabled: props.disabled,
    error: props.error,
  });
});
</script>

<template>
  <div class="w-full">
    <label @click="focusInput" :class="labelClass" v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      :class="inputClass"
      :placeholder="placeholder"
      :id="id"
      :type="type"
      :max="max"
      :value="modelValue"
      @input="handleInput"
      :required="required"
      :disabled="disabled"
      ref="inputFieldRef"
    />
    <p
      class="block text-xs first-letter:capitalize mt-[6px] text-Error/500"
      v-if="error && errorText && !disabled"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
