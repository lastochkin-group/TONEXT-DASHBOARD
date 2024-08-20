<script setup>

  import { Icon } from '@iconify/vue/dist/iconify.js'
  const emit = defineEmits(['close'])

</script>

<template>
    <div class="flex flex-col gap-y-4 items-center">
        <span class="flex justify-center items-center text-xl text-[#70758E] rounded-xl w-[42px] aspect-square bg-[#F7F9FB]">
            <Icon icon="mingcute:tool-line" />
        </span>

        <div class="text-xl font-medium">
            <h4>Ошибка!</h4>
            <h3>Вывод заблокирован</h3>
        </div>

        <span class="text-[15px] text-[#70758E]">Ваша заявка на вывод была отклонена, так как предоставленные реквизиты неверны. Проверьте данные для отправки и повторите вашу попытку.</span>

        <button @click="() => emit('close')" class="font-semibold text-[14px] text-blue rounded-full border-[1px] border-blue px-6 h-[50px] flex justify-center items-center">Вернуться на главную страницу</button>
    </div>
</template>