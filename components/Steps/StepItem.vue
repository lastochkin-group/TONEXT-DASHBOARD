<script setup>

    defineProps({
        step: String,
        title: String,
        description: String
    })

</script>

<template>
    <div class="bg-[#F7F9FB] flex flex-col gap-y-2 rounded-2xl p-4 w-full">
        <span class="text-[64px] font-extrabold text-blue">{{ step }}</span>
        <h5 class="font-extrabold text-xl text-[#12172D]">{{ title }}</h5>
        <p>{{ description }}</p>
    </div>
</template>