<script setup>
  import Crumbs from '~/components/UI/Crumbs/Crumbs.vue'
  import WalletButton from '~/components/UI/Wallet/WalletButton.vue'
  import { Icon } from '@iconify/vue'
  import { parseDateTime } from '../../utils/helpers'

  const history = [
    { id: 0, date: "15.09.2024 14:57", user: "UQDL5tX94u-YZjHE38UUc1Jt2ZFGrXIuOkvjVbta4XsJyZN9", amount: 93 },
    { id: 1, date: "15.09.2024 14:57", user: "UQDL5tX94u-YZjHE38UUc1Jt2ZFGrXIuOkvjVbta4XsJyZN9", amount: 93 }
  ]

</script>

<template>
  <div class="flex w-full flex-col gap-y-4">
    <div class="flex justify-between max-sm:hidden">
      <Crumbs 
        page="Реферальная программа"
      />

      <WalletButton />
    </div>

    <div class="flex max-lg:flex-col justify-between items-center gap-4">

      <div class="bg-[#F7F9FB] max-sm:order-2 max-sm:bg-transparent h-[120px] w-1/2 max-lg:w-full p-4 text-[14px] rounded-2xl flex flex-col gap-y-2">

        <div class="max-sm:p-4 rounded-2xl max-sm:bg-white flex flex-col gap-y-2">
          <label class="font-medium">Ваша реферальная ссылка:</label>

          <div class="bg-white max-sm:bg-[#EFEFF4] pl-4 h-[50px] flex gap-x-2 justify-between items-center rounded-full overflow-hidden">
            <span class="line-clamp-1">tonext.io/ref=1234567890</span>
            <span class="w-[50px] shrink-0 aspect-square rounded-full flex justify-center items-center bg-blue">
              <Icon icon="tabler:copy" class="text-white text-[24px]" />
            </span>
          </div>
        </div>

      </div>

      <div class="from-[#2A83EB] max-sm:order-1 overflow-hidden to-[#1AC9FF] h-[120px] max-sm:h-[140px] bg-gradient-to-b w-1/2 max-lg:w-full p-4 text-[14px] rounded-2xl max-sm:rounded-t-none flex justify-between items-center gap-2">
        <div class="flex flex-col gap-y-0.5 text-white font-medium">
          <span>Получайте</span>
          <span class="text-3xl font-bold">5%</span>
          <span>С депозитов своих друзей</span>
        </div>

        <span class="w-40 shrink-0 h-[80px] flex justify-center items-center">
          <img src="../../assets/images/more_ton.png" alt="More TON" class="scale-125" />
        </span>
      </div>

    </div>

    <div class="flex max-lg:flex-col justify-between items-center gap-4 max-sm:gap-0">

      <div class="bg-[#F7F9FB] max-sm:bg-transparent w-1/2 max-lg:w-full p-4 text-[14px] rounded-2xl flex flex-col gap-y-2">

        <label class="font-medium">Баланс:</label>

        <div class="bg-white p-4 flex max-xl:flex-col gap-x-4 gap-y-2 max-xl:items-start justify-between items-center rounded-2xl">
          <div class="flex flex-col gap-y-0.5">
            <span class="text-[#70758E]">Всего заработано:</span>
            <span class="text-base font-semibold">$300,000.23</span>
          </div>

          <span class="flex w-[2px] max-xl:hidden h-10 bg-[#F7F9FB]" />

          <div class="flex flex-col gap-y-0.5">
            <span class="text-[#70758E]">Доступно к выводу:</span>
            <span class="text-base font-semibold">100 TON</span>
          </div>

          <button class="bg-blue max-xl:w-full rounded-full h-10 px-4 text-white font-semibold">Вывести</button>
        </div>

      </div>

      <div class="bg-[#F7F9FB] max-sm:bg-transparent w-1/2 max-lg:w-full p-4 text-[14px] rounded-2xl flex flex-col gap-y-2">

        <label class="font-medium">Статистика:</label>

        <div class="bg-white p-4 flex max-xl:flex-col gap-x-4 gap-y-2 max-xl:items-start justify-between items-center rounded-2xl">
          <div class="flex flex-col gap-y-0.5">
            <span class="text-[#70758E]">Визитов:</span>
            <span class="text-base font-semibold">800,000</span>
          </div>

          <span class="flex w-[2px] max-xl:hidden h-10 bg-[#F7F9FB]" />

          <div class="flex flex-col gap-y-0.5">
            <span class="text-[#70758E]">Регистраций:</span>
            <span class="text-base font-semibold">800,00</span>
          </div>

          <span class="flex w-[2px] max-xl:hidden h-10 bg-[#F7F9FB]" />

          <div class="flex flex-col gap-y-0.5">
            <span class="text-[#70758E]">Активных:</span>
            <span class="text-base font-semibold">300,00</span>
          </div>
        </div>

      </div>

    </div>

    <div class="flex flex-col gap-y-6 max-sm:gap-0">
      <h3 :class="['max-sm:text-xl text-2xl font-medium max-sm:px-4', history.length < 1 && 'max-sm:hidden']">История:</h3>

      <div v-if="history.length > 0" class="flex flex-col gap-y-2.5 rounded-2xl max-sm:py-4">
        
        <div class="flex justify-between items-center px-4 text-sm max-sm:hidden text-[#70758E]">
          <div class="w-[120px] max-lg:w-[70px] max-sm:w-[40px] shrink-0">Дата:</div>
          <div class="w-[400px] max-md:w-[200px] max-sm:w-[140px] shrink-0 line-clamp-1">Пользователь:</div>
          <div class="w-[100px] shrink-0">Сумма:</div>
        </div>

        <div class="flex flex-col gap-y-2 max-sm:gap-y-2 max-sm:px-4">
          <div 
            v-for="el in history" 
            :key="el.id"
            class="flex justify-between max-sm:rounded-xl max-sm:bg-white shrink-0 items-center px-4 max-sm:border-b border-[#E2E2E2] max-sm:border-none last:border-none h-[50px] bg-[#F7F9FB] max-sm:bg-transparent rounded-2xl"
          >
            <div class="flex w-[120px] shrink-0 max-lg:w-[70px] max-sm:w-[40px] text-xs sm:text-sm text-nowrap">
              <span>{{ parseDateTime(el.date).day }}.{{ parseDateTime(el.date).month }}</span>
              <span class="max-md:hidden">.{{ parseDateTime(el.date).year }}</span>
              <span class="ml-1 max-lg:hidden">{{ parseDateTime(el.date).time }}</span>
            </div>

            <div class="flex w-[400px] max-md:w-[200px] max-sm:w-[140px] text-blue font-medium text-xs sm:text-sm line-clamp-1 text-nowrap">
              <a href="#" class="hover:underline">{{ el.user }}</a>
            </div>

            <div class="flex items-center gap-x-1.5 w-[100px] text-xs sm:text-sm">
              <span class="flex justify-center items-center w-[20px] aspect-square bg-blue rounded-full shrink-0">
                  <Icon icon="token:ton" class="text-[10px] text-white" />
              </span>
              <span class="font-semibold">+{{ el.amount.toLocaleString('EN-en')}} TON</span>
            </div>
            
          </div>
        </div>

      </div>

      <div v-else class="flex flex-col justify-center items-center my-10">
        <span class="max-sm:text-[65px] text-[75px]">🔍</span>
        <span class="max-sm:text-[12px] text-[14px] text-[#70758E] text-center">Здесь появится история ваших рефералов</span>
      </div>
    </div>

  </div>
</template>
