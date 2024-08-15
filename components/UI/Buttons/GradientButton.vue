<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            default: 'basic', // Возможные значения: 'basic', 'active', 'disabled'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    })

    const buttonClass = computed(() => {
        switch (props.state) {
            case 'active':
                return 'bg-gradient-to-br from-[#0098EA] to-transparent'
            case 'disabled':
                return 'opacity-25 cursor-not-allowed'
            default:
                return 'hover:bg-button_dark_color'
        }
    })

    const gradientClass = computed(() => {
        return 'bg-gradient-radial from-[#0098EA] to-transparent'
    })
</script>

<template>
  <nuxt-link 
    :to="link"
    :class="[
      'relative text-white bg-bg_dark_color font-semibold overflow-hidden text-[14px] flex w-full items-center justify-center px-4 py-3 rounded-lg border border-[#0098E9] transition-all',
      buttonClass,
    ]"
    :aria-disabled="disabled"
  >
    <div :class="['absolute inset-0 rounded-lg', gradientClass]" />

    <div class="relative z-10">
      <span>{{ title }}</span>
    </div>

    <div>
        <div class="absolute left-2 top-2 w-1.5 h-1.5 bg-blue rounded-full"></div>
        <div class="absolute left-3 top-7 w-[2px] h-[2px] bg-blue rounded-full"></div>
        <div class="absolute left-6 top-5 w-1 h-1 bg-blue rounded-full"></div>

        <div class="absolute right-2 top-2 w-1.5 h-1.5 bg-blue rounded-full"></div>
        <div class="absolute right-3 top-7 w-[2px] h-[2px] bg-blue rounded-full"></div>
        <div class="absolute right-6 top-5 w-1 h-1 bg-blue rounded-full"></div>
    </div>

  </nuxt-link>
</template>

<style scoped>
    .bg-gradient-radial {
        background-image: radial-gradient(circle at 50% 150%, #0098EA, transparent 50%);
        filter: blur(20px);
        transform: scale(1.2);
    }
</style>
