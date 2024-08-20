<script setup>

  import { Icon } from '@iconify/vue/dist/iconify.js'
  const emit = defineEmits(['close'])

</script>

<template>
    <div class="flex flex-col gap-y-4 items-center">
        <span class="flex justify-center items-center text-xl text-blue rounded-xl w-[42px] aspect-square bg-[#F7F9FB]">
            <Icon icon="solar:refresh-linear" />
        </span>

        <div class="text-xl font-medium">
            <h4>Обработка запроса</h4>
        </div>

        <span class="text-[15px] text-[#70758E]">Пожалуйста, подождите. Ваши средства сейчас в процессе обработки, это занимает несколько минут.</span>

        <div class="bg-[#F7F9FB] flex justify-between items-center p-4 rounded-xl w-full">
          <span class="text-[#70758E] text-[14px]">Средств в обработке:</span>
          <span class="font-semibold">1,247.00 TON</span>
        </div>
    </div>
</template>