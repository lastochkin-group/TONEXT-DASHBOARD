<script setup>
  import Crumbs from '~/components/UI/Crumbs/Crumbs.vue'
  import WalletButton from '~/components/UI/Wallet/WalletButton.vue'
  import { Icon } from '@iconify/vue'
  import { parseDateTime } from '../../utils/helpers'

  const transactions = [
    { id: 0, date: "15.09.2024 14:57", hash: "UQDL5tX94u-YZjHE38UUc1Jt2ZFGrXIuOkvjVbta4XsJyZN9", type: "Deposit", amount: 3200.23, status: "Cancel" },
    { id: 1, date: "15.09.2024 14:57", hash: "UQDL5tX94u-YZjHE38UUc1Jt2ZFGrXIuOkvjVbta4XsJyZN9", type: "Withdraw", amount: 2700.01, status: "Pending" },
    { id: 2, date: "15.09.2024 14:57", hash: "UQDL5tX94u-YZjHE38UUc1Jt2ZFGrXIuOkvjVbta4XsJyZN9", type: "Withdraw", amount: 1300.91, status: "Done" },
  ]
</script>

<template>
  <div class="flex flex-col w-full gap-y-4">
    <div class="flex justify-between max-sm:hidden">
      <Crumbs page="История" />
      <WalletButton />
    </div>

    <div class="flex flex-col gap-y-6">
      <h3 class="max-sm:text-xl text-2xl font-medium max-sm:px-4">История:</h3>

      <div v-if="transactions.length > 0" class="flex flex-col gap-y-2.5 max-sm:bg-white rounded-2xl max-sm:py-4">
        
        <div class="flex justify-between items-center px-4 text-sm max-sm:text-xs text-[#70758E]">
          <div class="w-[120px] max-lg:w-[70px] max-sm:w-[40px] shrink-0">Date</div>
          <div class="w-[400px] max-xl:w-[180px] max-md:w-[80px] max-sm:w-[40px] shrink-0 line-clamp-1">Txn Hash</div>
          <div class="w-[60px] max-sm:w-[30px] shrink-0 line-clamp-1">Type</div>
          <div class="w-[80px] max-sm:w-[60px] shrink-0">Amount</div>
          <div class="w-[80px] max-sm:w-[60px] text-end shrink-0">Status</div>
        </div>

        <div class="flex flex-col gap-y-2 max-sm:gap-y-0">
          <div 
            v-for="transaction in transactions" 
            :key="transaction.id"
            class="flex justify-between shrink-0 items-center px-4 max-sm:border-b border-[#E2E2E2] last:border-none h-[50px] max-sm:bg-white bg-[#F7F9FB] max-sm:rounded-none rounded-2xl"
          >
            <div class="flex w-[120px] shrink-0 max-lg:w-[70px] max-sm:w-[40px] text-xs sm:text-sm text-nowrap">
              <span>{{ parseDateTime(transaction.date).day }}.{{ parseDateTime(transaction.date).month }}</span>
              <span class="max-md:hidden">.{{ parseDateTime(transaction.date).year }}</span>
              <span class="ml-1 max-lg:hidden">{{ parseDateTime(transaction.date).time }}</span>
            </div>

            <div class="flex w-[400px] max-xl:w-[180px] max-md:w-[80px] max-sm:w-[40px] text-blue font-medium text-xs sm:text-sm line-clamp-1 text-nowrap">
              <a href="#" class="hover:underline">{{ transaction.hash }}</a>
            </div>

            <div class="flex w-[60px] max-sm:w-[30px] line-clamp-1 text-text_color max-sm:text-[#70758E] font-medium text-xs sm:text-sm">{{ transaction.type }}</div>

            <div class="flex items-center gap-x-1.5 w-[80px] max-sm:w-[60px] text-xs sm:text-sm">
              <span class="flex justify-center items-center w-[20px] aspect-square bg-blue rounded-full shrink-0">
                  <Icon icon="token:ton" class="text-[10px] text-white" />
              </span>
              <span class="font-semibold">{{ transaction.amount.toLocaleString('EN-en')}}</span>
            </div>

            <div
              :class="{
                'text-[#9D3C36]': transaction.status === 'Cancel',
                'text-blue': transaction.status === 'Pending',
                'text-[#00A761]': transaction.status === 'Done',
              }"
              class="flex w-[80px] max-md:w-[60px] md:bg-white rounded-full h-[32px] max-md:justify-end justify-center font-semibold items-center text-xs sm:text-sm"
            >
              <span class="max-md:hidden">{{ transaction.status }}</span>

              <span class="md:hidden">
                <Icon v-if="transaction.status === 'Cancel'" icon="ic:round-close" class="w-[18px] text-base aspect-square" />
                <Icon v-if="transaction.status === 'Pending'" icon="lets-icons:refund-back" class="w-[18px] text-base aspect-square" />
                <Icon v-if="transaction.status === 'Done'" icon="ic:round-check" class="w-[18px] text-base aspect-square" />
              </span>
            </div>
            
          </div>
        </div>

      </div>

      <div v-else class="flex flex-col justify-center items-center my-10">
        <span class="max-sm:text-[65px] text-[75px]">🔍</span>
        <span class="max-sm:text-[12px] text-[14px] text-[#70758E] text-center">Здесь появится история ваших транзакций</span>
      </div>

    </div>
  </div>
</template>