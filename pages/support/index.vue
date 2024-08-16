<script setup>
  import { computed } from 'vue'
  import Crumbs from '~/components/UI/Crumbs/Crumbs.vue'
  import WalletButton from '~/components/UI/Wallet/WalletButton.vue'
  import { Icon } from '@iconify/vue'

  const gradientClass = computed(() => {
      return 'bg-gradient-radial from-[#0098EA] to-transparent'
  })
</script>

<template>
  <div class="flex flex-col w-full gap-y-4">
    <div class="flex justify-between max-sm:hidden">
      <Crumbs 
        page="Поддержка"
      />

      <WalletButton />
    </div>

    <div class="flex flex-col gap-y-6 max-sm:px-4">
      <h3 class="max-sm:text-xl text-2xl font-medium">Поддержка</h3>

      <div class="flex max-lg:flex-col justify-between gap-x-4 gap-y-2">
        <div class="w-1/2 max-lg:w-full flex flex-col gap-y-2">

          <div class="flex flex-col gap-y-4 p-4 rounded-2xl bg-[#F7F9FB] max-sm:bg-white">
            <div class="flex items-center gap-x-4">
              <span class="flex w-[45px] shrink-0 aspect-square rounded-2xl justify-center items-center bg-[#0098E910]">
                <Icon icon="system-uicons:mail" class="text-blue text-[24px]" />
              </span>

              <span class="text-[14px] font-medium">Задайте вопрос с помощью электронной почты</span>
            </div>

            <a href="mailto:TONEXT.io.support@mail.com" class="flex items-center gap-x-2 w-full justify-between font-semibold text-[14px] bg-white max-sm:bg-[#EFEFF4] rounded-xl overflow-hidden pl-4">
              <span class="line-clamp-1">TONEXT.io.support@mail.com</span>
              <span class="w-[50px] shrink-0 aspect-square rounded-xl bg-blue flex justify-center items-center">
                <Icon icon="fluent:cursor-click-24-regular" class="text-[24px] text-white" />
              </span>
            </a>
          </div>

          <div class="flex flex-col gap-y-4 p-4 rounded-2xl bg-[#F7F9FB] max-sm:bg-white">
            <div class="flex items-center gap-x-4">
              <span class="flex w-[45px] shrink-0 aspect-square rounded-2xl justify-center items-center bg-[#0098E910]">
                <Icon icon="hugeicons:telegram" class="text-blue text-[24px]" />
              </span>

              <span class="text-[14px] font-medium">Получите мгновенную поддержку в Телеграме</span>
            </div>

            <a href="https://t.me/TONEXT_support_team" target="_blank" class="flex items-center gap-x-2 w-full justify-between font-semibold text-[14px] bg-white max-sm:bg-[#EFEFF4] rounded-xl overflow-hidden pl-4">
              <span class="line-clamp-1">@TONEXT_support_team</span>
              <span class="w-[50px] shrink-0 aspect-square rounded-xl bg-blue flex justify-center items-center">
                <Icon icon="fluent:cursor-click-24-regular" class="text-[24px] text-white" />
              </span>
            </a>
          </div>

          <div class="flex relative overflow-hidden flex-col gap-y-4 p-4 rounded-2xl bg-[#12172D]">
            <div class="flex items-center gap-x-4">
              <span class="flex w-[45px] shrink-0 aspect-square rounded-2xl justify-center items-center bg-blue">
                <Icon icon="hugeicons:telegram" class="text-white text-[24px]" />
              </span>

              <span class="text-[14px] font-medium text-white">Станьте частью большого комьюнити!</span>
            </div>

            <a href="https://t.me/TONEXT_support_team" target="_blank" class="flex z-[1] items-center gap-x-2 w-full justify-between font-semibold text-[14px] bg-[#112C55] text-white rounded-xl overflow-hidden pl-4">
              <span class="line-clamp-1">@TONEXT_support_team</span>
              <span class="w-[50px] shrink-0 aspect-square rounded-xl bg-blue flex justify-center items-center">
                <Icon icon="fluent:cursor-click-24-regular" class="text-[24px] text-white" />
              </span>
            </a>

            <div class="absolute left-2 top-7 w-1.5 h-1.5 bg-blue rounded-full"></div>
            <div class="absolute left-4 top-14 w-[2px] h-[2px] bg-blue rounded-full"></div>
            <div class="absolute left-2 bottom-7 w-1 h-1 bg-blue rounded-full"></div>

            <div class="absolute right-2 top-7 w-1.5 h-1.5 bg-blue rounded-full"></div>
            <div class="absolute right-4 top-14 w-[2px] h-[2px] bg-blue rounded-full"></div>
            <div class="absolute right-2 bottom-7 w-1 h-1 bg-blue rounded-full"></div>

            <div :class="['absolute inset-0 rounded-lg', gradientClass]" />
          </div>

        </div>

        <div class="w-1/2 max-lg:w-full relative overflow-hidden">
          <div class="bg-[#F7F9FB] max-sm:bg-transparent z-[1] rounded-2xl sm:p-6 max-sm:py-4 flex gap-y-2 flex-col">
            <h4 class="py-2 font-medium text-2xl max-sm:text-xl">Обратная связь</h4>

            <div class="flex flex-col w-full max-sm:p-4 max-sm:bg-white rounded-2xl items-center gap-x-4 gap-y-2">

              <div class="flex max-xl:flex-col justify-between w-full rounded-2xl items-center gap-x-4 gap-y-2">
                <div class="flex flex-col z-[2] w-1/2 max-xl:w-full gap-y-2">
                  <label class="text-[12px] max-sm:text-[#70758E] max-sm:text-[14px]">Адрес вашего кошелька:</label>

                  <input
                    class="bg-white text-[14px] max-sm:bg-[#F7F9FB] rounded-2xl outline-none px-4 h-[50px] w-full"
                    type="text"
                  />
                </div>

                <div class="flex flex-col z-[2] w-1/2 max-xl:w-full gap-y-2">
                  <label class="text-[12px] max-sm:text-[#70758E] max-sm:text-[14px]">Telegram или Email для ответа:</label>

                  <input
                    class="bg-white text-[14px] max-sm:bg-[#F7F9FB] rounded-2xl outline-none px-4 h-[50px] w-full"
                    type="text"
                  />
                </div>
              </div>

              <div class="flex w-full">
                <div class="flex z-[2] flex-col w-full gap-y-2">
                  <label class="text-[12px] max-sm:text-[#70758E] max-sm:text-[14px]">Ваше сообщение:</label>

                  <textarea
                    class="bg-white max-sm:bg-[#F7F9FB] text-[14px] rounded-2xl outline-none p-4 min-h-[150px] w-full"
                    type="text"
                  />
                </div>
              </div>

              <button class="h-[50px] mt-2 w-1/2 max-xl:w-full bg-blue relative rounded-full text-white justify-center flex gap-x-4 items-center px-2">
                  <span class="text-[14px] font-bold">Отправить</span>
                  <span class="h-[40px] absolute right-2 aspect-square bg-white flex justify-center items-center rounded-full">
                      <Icon icon="maki:arrow" class="text-[#12172D] text-[16px]" />
                  </span>
              </button>

            </div>

          </div>

          <Icon icon="token:ton" class="absolute z-0 top-10 max-sm:hidden right-0 text-[200px] opacity-15" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .bg-gradient-radial {
        background-image: radial-gradient(circle at 50% 150%, #0098EA, transparent 50%);
        filter: blur(20px);
        transform: scale(1.5);
    }
</style>
