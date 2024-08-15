<script setup>
    import { ref, computed } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            default: 'basic', // Возможные значения: 'basic', 'disabled'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    })

    const isOpen = ref(false)

    const toggleDropdown = () => {
        if (!props.disabled) {
            isOpen.value = !isOpen.value
        }
    }

    const dropdownClass = computed(() => {
        if (props.disabled) {
            return 'bg-[#112C55] text-white cursor-not-allowed opacity-25'
        }
        return isOpen.value ? 'bg-[#12172D] text-white border-[#243B5F] border-[1px]' : 'bg-[#112C55] text-white border-transparent hover:border-blue'
    })

    const iconClass = computed(() => {
        return isOpen.value ? 'rotate-180' : ''
    })
</script>

<template>
  <div :class="['rounded-lg text-[14px] overflow-hidden border transition-all', dropdownClass]">
    <div 
      class="flex justify-between items-center p-4 cursor-pointer"
      @click="toggleDropdown"
    >
      <span class="font-semibold">{{ title }}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        :class="[iconClass, 'stroke-blue']"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </div>
    <div v-if="isOpen" class="px-4 pb-4 bg-bg_dark_color text-[#9AB2D3]">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
    .rotate-180 {
        transform: rotate(180deg)
    }
</style>
