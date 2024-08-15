<script setup>

import { Icon } from '@iconify/vue'

const props = defineProps({
    icon: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
  <nuxt-link :to="link"
    :class="['relative overflow-hidden text-[14px] border-2 border-bg_dark_color flex w-full items-center justify-start p-2.5 rounded-lg text-white transition-all']"
    :aria-disabled="disabled"
    active-class="!border-[#0098EA25]"
  >

    <div class="relative flex items-center gap-2 z-10 shrink-0">
      <Icon :icon="icon" :class="['text-[24px]', 'text-[#70758E]']" />
      <span class="max-lg:hidden">{{ title }}</span>
    </div>

  </nuxt-link>
</template>