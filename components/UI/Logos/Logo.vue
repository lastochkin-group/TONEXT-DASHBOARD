<script setup>
    import { Icon } from '@iconify/vue'

    defineProps({
        isDark: Boolean
    })
</script>

<template>
    <span class="text-white flex items-center gap-x-2">
        <span class="flex justify-center items-center w-[45px] aspect-square bg-blue rounded-full shrink-0">
            <Icon icon="token:ton" class="text-[20px]" />
        </span>
        <span :class="['uppercase font-bold', isDark && 'text-[#12172D]']">Tonext</span>
    </span>
</template>