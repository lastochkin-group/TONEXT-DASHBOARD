<script setup>

  import { Icon } from '@iconify/vue/dist/iconify.js'
  const emit = defineEmits(['close'])

</script>

<template>
    <div class="flex flex-col gap-y-4">
        <div class="flex justify-between items-center text-2xl">
          <h4 class="font-medium">Вывод средств</h4>
          <button @click="() => emit('close')">
            <Icon class="text-[#70758E]" icon="mingcute:close-fill" />
          </button>
        </div>

        <div class="p-4 text-[14px] flex flex-col items-start gap-y-2 rounded-2xl bg-[#F7F9FB]">
          <span class="font-medium">Баланс:</span>
          <div class="bg-white rounded-2xl p-4 flex justify-around w-full">

            <div class="flex items-start flex-col">
              <span class="text-[#70758E]">Всего заработано:</span>
              <span class="font-semibold text-base">$10,000</span>
            </div>

            <div class="flex items-start flex-col">
              <span class="text-[#70758E]">Доступно к выводу:</span>
              <span class="font-semibold text-base">130 TON</span>
            </div>

          </div>
        </div>

        <div class="flex flex-col items-start gap-y-2">
          <label class="text-[12px]">Адрес кошелька:</label>
          <button class="flex justify-between items-center w-full px-6 h-[50px] rounded-full bg-[#F7F9FB]">
            <span class="text-[14px]">UQB6I0y6lfUvZW...rV2aV2_kNkgs9k</span>
            <Icon class="text-[#70758E] text-2xl" icon="iconamoon:arrow-down-2-light" />
          </button>
        </div>

        <div class="flex flex-col gap-y-2 items-start">
            <label class="text-[12px]">Сумма вывода:</label>

            <div class="bg-[#F7F9FB] w-full flex items-center gap-x-2 text-[14px] px-6 rounded-full">
                <span class="flex justify-center items-center rounded-full bg-blue w-[24px] aspect-square text-white shrink-0">
                    <Icon icon="token:ton" />
                </span>

                <input v-model.number="stakeAmount" type="number" placeholder="0" class="w-full bg-transparent h-[50px] outline-none" />

                <button class="bg-white text-[#70758E] px-2 py-1 rounded-xl">{{ $t('MAX_FRASE') }}</button>
            </div>
        </div>

        <button class="h-[50px] bg-blue relative rounded-full text-white justify-center flex gap-x-4 items-center px-2">
            <span class="text-[14px] font-bold">Отправить заявку на вывод</span>
            <span class="h-[40px] absolute right-2 aspect-square bg-white flex justify-center items-center rounded-full">
                <Icon icon="maki:arrow" class="text-[#12172D] text-[16px]" />
            </span>
        </button>

    </div>
</template>