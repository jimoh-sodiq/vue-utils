<script setup lang="ts">
import { cva } from "class-variance-authority";

const emit = defineEmits<{
  (event: "update:modelValue", value: string | number): void;
  (event: "onTextChanged", value: string | number): void;
}>();

interface Prop {
  modelValue?: string | number | any[];
  id?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  autofocus?: boolean;
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: "",
  id: "",
  label: "",
  required: false,
  error: false,
  errorText: "",
  disabled: false,
  autofocus: false,
});

const selectFieldRef = ref() as Ref<HTMLInputElement>;

const handleSelect = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

function focusInput() {
  selectFieldRef.value.focus();
}

watch(selectFieldRef, () => {
  if (props.autofocus === true) {
    selectFieldRef.value.focus();
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

const selectClass = computed(() => {
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
            "ring-[1px] ring-Noja/Primary/10 focus-within:ring-[1.5px] focus-within:ring-Noja/Primary/Main",
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
    <div :class="selectClass" class="">
      <select
        class="w-full h-full outline-none bg-transparent"
        :id="id"
        :value="modelValue"
        @input="handleSelect"
        :required="required"
        :disabled="disabled"
        ref="selectFieldRef"
      >
        <slot />
      </select>
    </div>
    <p
      class="block text-xs first-letter:capitalize mt-[6px] text-Error/500"
      v-if="error && errorText && !disabled"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<style scoped></style>