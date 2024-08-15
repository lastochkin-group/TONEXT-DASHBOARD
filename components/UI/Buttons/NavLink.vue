<script setup>
    import { computed } from 'vue'

    const props = defineProps({
    title: {
        type: [String, Object],
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    state: {
        type: String,
        default: 'basic', // Возможные значения: 'basic', 'active', 'disabled'
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    isDark: {
        type: Boolean,
        default: false
    }
    })

    const linkClass = computed(() => {
        switch (props.state) {
            case 'active':
                return 'text-blue'
            case 'disabled':
                return props.isDark ? 'text-[#12172D]' : 'text-white', 'cursor-not-allowed opacity-25'
            default:
                return props.isDark ? 'text-[#12172D]' : 'text-white'
        }
    })
</script>

<template>
  <a :href="link"
    :class="[
      'text-[14px] w-fit transition-colors duration-300',
      linkClass,
      {
        'hover:underline': state === 'basic' && !disabled
      }
    ]"
    :aria-disabled="disabled"
  >
    {{ title }}
    </a>
</template>
