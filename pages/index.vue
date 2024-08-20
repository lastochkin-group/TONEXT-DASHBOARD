<script setup>

  import Crumbs from '~/components/UI/Crumbs/Crumbs.vue'
  import WalletButton from '~/components/UI/Wallet/WalletButton.vue'
  import { Icon } from '@iconify/vue/dist/iconify.js'
  
  import Modal from '~/components/Modal/Modal.vue'
  import Withdraw from '../components/Modal/Content/Withdraw.vue'
  import Processing from '../components/Modal/Content/Processing.vue'
  import Withdraw_error from '../components/Modal/Content/Withdraw_error.vue'
  import Success_order from '../components/Modal/Content/Success_order.vue'
  import Deposit from '../components/Modal/Content/Deposit.vue'

  import { reactive, ref } from 'vue'

  const contracts = [
    { id: 0, total_invest: 12000, total_earned: 15, days_util: 28 }
  ]

  const isOpenModal = ref(false)

  const modals = reactive({
    withdraw: false,
    processing: false,
    withdraw_error: false,
    success_order: false,
    deposit: false
  })

</script>

<template>

  <div class="flex flex-col w-full gap-y-4">
    <Modal
      :isOpen="isOpenModal"
      @close="() => {
        isOpenModal = false
        modals.withdraw = false
        modals.processing = false
        modals.withdraw_error = false
        modals.success_order = false
        modals.deposit = false
      }"
    >
      <Withdraw
        v-if="modals.withdraw"
        @close="() => {
          isOpenModal = false
          modals.withdraw = false
        }"
      />

      <Processing
        v-if="modals.processing"
      />

      <Withdraw_error
        v-if="modals.withdraw_error"
        @close="() => {
          isOpenModal = false
          modals.withdraw_error = false
        }"
      />

      <Success_order
        v-if="modals.success_order"
        @close="() => {
          isOpenModal = false
          modals.success_order = false
        }"
      />

      <Deposit
        v-if="modals.deposit"
      />
    </Modal>

    <div class="flex w-full justify-between max-sm:hidden">
      <Crumbs 
        page="Главная"
      />

      <WalletButton />
    </div>

    <div class="flex flex-col gap-y-6">
      <div class="flex justify-between max-xl:flex-col gap-4">

        <div class="flex flex-col gap-y-4 h-[320px] max-sm:h-fit relative overflow-hidden max-sm:items-center justify-between w-1/3 max-xl:w-full p-4 rounded-2xl max-sm:rounded-t-none text-white from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-b">
          <div class="flex max-sm:hidden gap-x-2.5 items-center">
            <span class="bg-white shrink-0 w-[45px] aspect-square rounded-2xl justify-center items-center flex text-[20px] text-blue">
              <Icon icon="basil:wallet-outline" />
            </span>

            <span class="text-[14px] font-medium">Доступно к выводу</span>
          </div>

          <div class="flex flex-col w-full max-sm:text-center max-sm:pt-8">
            <div class="font-bold text-[36px]">
              <span>29,032</span>
              <span class="text-xl uppercase">Ton</span>
            </div>

            <span class="text-lg">~375,921$</span>

            <div class="flex justify-between gap-x-2 w-full sm:hidden mt-4">
              <button @click="() => { isOpenModal = true; modals.deposit = true }" class="w-full bg-white h-[40px] z-[1] flex text-[14px] rounded-full font-medium justify-center items-center gap-x-2 text-text_color">
                <Icon icon="carbon:flash" class="text-blue text-[20px]" />
                <span>Стейк</span>
              </button>

              <button @click="() => { isOpenModal = true; modals.withdraw = true }" class="w-full z-[1] bg-white h-[40px] flex text-[14px] rounded-full font-medium justify-center items-center gap-x-2 text-text_color">
                <Icon icon="carbon:flash" class="text-blue text-[20px]" />
                <span>Вывод</span>
              </button>
            </div>
          </div>

          <div class="flex gap-x-4 text-[14px]">
            <div class="flex flex-col">
              <span>Доход в сутки:</span>
              <span class="font-semibold">12 TON</span>
            </div>

            <div class="flex flex-col">
              <span>Доход за весь период:</span>
              <span class="font-semibold">120,000 TON</span>
            </div>
          </div>

          <span class="absolute flex max-sm:justify-center max-sm:left-0 top-10 max-sm:top-2 right-0 opacity-10 text-[200px]">
            <Icon icon="token:ton" />
          </span>
        </div>

        <div class="flex max-sm:hidden flex-col h-[320px] max-lg:h-fit gap-y-4 relative overflow-hidden justify-between w-2/3 max-xl:w-full p-4 rounded-2xl bg-[#F7F9FB]">
          <div class="flex gap-x-2.5 items-center">
            <span class="bg-[#0098E910] shrink-0 w-[45px] aspect-square rounded-2xl justify-center items-center flex text-[20px] text-blue">
              <Icon icon="basil:wallet-outline" />
            </span>

            <span class="text-[14px] font-medium">Добавить депозит</span>
          </div>

          <div class="flex max-lg:flex-col justify-between items-center gap-4">
              <div class="flex w-1/2 max-lg:w-full max-lg:order-2 flex-col gap-y-4">

                  <div class="flex flex-col gap-y-2">
                      <label class="text-[12px]">{{ $t('INVEST_AMOUNT') }}</label>

                      <div class="bg-white flex items-center gap-x-2 text-[14px] px-3 rounded-full">
                          <span class="flex justify-center items-center rounded-full bg-blue w-[24px] aspect-square text-white shrink-0">
                              <Icon icon="token:ton" />
                          </span>

                          <input v-model.number="stakeAmount" type="number" placeholder="0" class="w-full bg-transparent h-[50px] outline-none" />

                          <button class="bg-[#F7F9FB] text-[#70758E] px-2 py-1 rounded-xl">{{ $t('MAX_FRASE') }}</button>
                      </div>
                  </div>

                    <div class="flex flex-col gap-y-2">
                        <label class="text-[12px]">{{ $t('INVEST_DAYS') }}</label>

                        <div class="bg-white flex items-center gap-x-2 text-[14px] px-3 rounded-full">
                            <span class="flex justify-center items-center rounded-full w-[24px] aspect-square shrink-0">
                                <Icon icon="solar:calendar-linear" class="text-blue text-[20px]" />
                            </span>

                            <input v-model.number="stakeEndDays" type="number" placeholder="0" class="w-full bg-transparent h-[50px] outline-none" />

                            <span class="text-[#70758E] px-2 py-1 rounded-xl">{{ $t('DAY_FRASE')}}</span>
                        </div>
                    </div>

                    <button class="h-[50px] bg-blue relative rounded-full text-white justify-center flex gap-x-4 items-center px-2">
                        <span class="text-[14px] font-bold">{{ $t('MAKE_DEPOSIT') }}</span>
                        <span class="h-[40px] absolute right-2 aspect-square bg-white flex justify-center items-center rounded-full">
                            <Icon icon="maki:arrow" class="text-[#12172D] text-[16px]" />
                        </span>
                    </button>

                </div>

                <div class="rounded-2xl bg-white overflow-hidden max-lg:order-1 relative flex flex-col gap-y-2 border-[#F7F9FB] text-[14px] border-2 max-lg:border-none p-4 w-1/2 max-lg:w-full">
                    <div class="flex flex-col">
                        <span>{{ $t('EVERY_DAY_CREDIT') }}</span>
                        <span class="font-extrabold text-3xl text-blue">12%</span>
                    </div>

                    <div class="flex items-center gap-x-2">
                        <div class="flex flex-col">
                            <span class="text-[#70758E]">{{ $t('EVERY_DAY_CREDIT_2') }}</span>
                            <span class="font-semibold text-base">12 TON</span>
                        </div>

                        <div class="flex flex-col">
                            <span class="text-[#70758E]">{{ $t('EVERY_WEEK_CREDIT') }}</span>
                            <span class="font-semibold text-base">450 TON</span>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-[#70758E]">{{ $t('FULL_PERIOD_CREDIT') }}</span>
                        <span class="font-semibold text-base">12,928 TON</span>
                    </div>

                    <div class="absolute left-0 right-0 bottom-0">
                        <img src="../assets/images/lines.svg" class="w-full" />
                    </div>
                </div>
            </div>
        </div>

      </div>

      <div v-if="contracts.length > 0" class="flex flex-col gap-y-2 max-sm:px-4">
        
        <div v-for="el, index in contracts" :key="index" class="flex flex-col gap-y-4 relative overflow-hidden justify-between w-full text-[14px] max-sm:p-0 p-4 rounded-2xl bg-[#F7F9FB] max-sm:bg-transparent">
          <div class="flex gap-x-2.5 items-center z-[1]">
            <span class="bg-[#0098E910] shrink-0 w-[45px] aspect-square rounded-2xl justify-center items-center flex text-[20px] text-blue">
              <Icon icon="basil:wallet-outline" />
            </span>

            <span class="text-[14px] font-medium">Действующий контракт</span>
          </div>

          <div class="flex flex-col gap-4 max-sm:bg-white max-sm:p-4 rounded-2xl items-center z-[1] w-1/2 max-lg:w-full">
            
            <div class="bg-white max-sm:p-0 p-4 w-full flex max-xl:flex-col gap-x-4 gap-y-2 max-xl:items-start justify-between items-center rounded-2xl">
              <div class="flex flex-col gap-y-0.5">
                <span class="text-[#70758E]">Всего инвестировано:</span>
                <span class="text-base font-semibold">{{ el.total_invest.toLocaleString('en-EN') }} TON</span>
              </div>

              <span class="flex w-[2px] max-xl:hidden h-10 bg-[#F7F9FB]" />

              <div class="flex flex-col gap-y-0.5">
                <span class="text-[#70758E]">Всего заработано:</span>
                <span class="text-base font-semibold">{{ el.total_earned.toLocaleString('en-EN') }} TON</span>
              </div>

              <span class="flex w-[2px] max-xl:hidden h-10 bg-[#F7F9FB]" />

              <div class="flex w-full sm:hidden rounded-full h-[14px] p-0.5 bg-white max-sm:bg-[#EFEFF4] overflow-hidden">
                <span class="flex w-1/3 rounded-full from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-r"></span>
              </div>

              <div class="sm:flex flex-col gap-0.5 max-sm:items-center">
                <span class="text-[#70758E]">Дней до завершения:</span>
                <span class="text-base max-sm:text-[14px] font-semibold max-sm:ml-1">{{ el.days_util }}</span>
              </div>
            </div>

            <div class="flex w-full max-sm:hidden rounded-full h-[14px] p-0.5 bg-white max-sm:bg-[#EFEFF4] overflow-hidden">
              <span class="flex w-1/3 rounded-full from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-r"></span>
            </div>

            <div class="flex justify-between gap-x-2 w-full">
              <button @click="() => { isOpenModal = true; modals.withdraw = true }" class="w-1/2 h-[50px] flex justify-center items-center rounded-full bg-blue border-blue border-[1px] text-white font-semibold">Вывести</button>
              <button class="w-1/2 h-[50px] flex justify-center items-center rounded-full border-blue border-[1px] text-blue bg-[#F7F9FB] max-sm:bg-transparent font-semibold">Реинвест</button>
            </div>

          </div>

          <div class="absolute max-lg:hidden bottom-0 right-0 z-0">
            <img src="../assets/images/ton-mock.png" alt="Ton 3D mockup" />
          </div>
        </div>

      </div>

      <div v-else class="flex flex-col justify-center items-center my-10">
        <span class="max-sm:text-[65px] text-[75px]">🔍</span>
        <span class="max-sm:text-[12px] text-[14px] text-[#70758E] text-center">Здесь появится будущий контракт</span>
      </div>
    </div>
  </div>
</template>