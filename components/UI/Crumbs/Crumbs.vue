<script setup>

    import { Icon } from '@iconify/vue'

    defineProps({
        page: String
    })

</script>

<template>
    <div class="flex items-center gap-x-1">
      <nuxt-link to="/">
        <Icon icon="fluent:home-32-regular" class="text-[24px]" />
      </nuxt-link>

      <Icon icon="iconamoon:arrow-right-2" class="text-[24px] text-[#70758E]" />

      <span class="text-[14px] font-medium">{{ page }}</span>
    </div>
</template>