<script setup>

  import { Icon } from '@iconify/vue/dist/iconify.js'
  const emit = defineEmits(['close'])

</script>

<template>
    <div class="flex flex-col gap-y-4 items-center">
        <span class="flex justify-center items-center text-xl text-white rounded-xl w-[42px] aspect-square from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-b">
            <Icon icon="mingcute:rocket-line" />
        </span>

        <div class="text-xl font-medium">
            <h4>Ваш запрос на вывод отправлен!</h4>
        </div>

        <div class="p-4 bg-[#F7F9FB] rounded-2xl w-full">
          <div class="p-4 bg-white rounded-2xl flex flex-col gap-y-2">
            <div class="flex text-[14px] justify-between items-center">
              <span class="text-[#70758E]">Сумма:</span>
              <span class="font-medium">1,200 TON</span>
            </div>

            <div class="flex text-[14px] justify-between items-center">
              <span class="text-[#70758E]">Адрес вывода:</span>
              <span class="font-medium">UQB6I0y6lfUv3g...</span>
            </div>

            <button class="underline text-[12px] text-blue text-end font-medium">Сохранить адрес</button>
          </div>
        </div>

        <button @click="() => emit('close')" class="font-semibold text-[14px] text-white bg-blue rounded-full px-6 h-[50px] flex justify-center items-center">Посмотреть историю транзакций</button>
    </div>
</template>