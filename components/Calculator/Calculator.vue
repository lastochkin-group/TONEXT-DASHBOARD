<script setup>

    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'
 
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

    const stakeAmount = ref(0)
    const stakeEndDays = ref(0)

</script>

<template>
    <section class="container" id="calculator">
        <div class="bg-[#F7F9FB] rounded-2xl p-4">

            <div class="py-12 px-2 max-lg:px-0 flex max-lg:flex-col items-center gap-8">
                <div class="flex z-1 w-1/3 max-lg:w-full max-lg:items-center flex-col gap-y-4">
                    <span class="flex justify-center items-center bg-blue rounded-full w-[45px] aspect-square">
                        <Icon icon="solar:wallet-linear" class="text-[24px] text-white" />
                    </span>

                    <h4 class="font-extrabold text-[#12172D] text-2xl max-lg:text-center">{{ $t('CALCULATOR_TITLE') }}</h4>

                    <p class="text-[#12172D] max-lg:text-center">{{ $t('CALCULATOR_SUBTITLE') }}</p>
                </div>

                <div class="w-2/3 max-lg:w-full">
                   <div class="bg-white rounded-2xl p-4 flex max-lg:flex-col justify-between items-center gap-4">
                        <div class="flex w-1/2 max-lg:w-full max-lg:order-2 flex-col gap-y-4">

                            <div class="flex flex-col gap-y-2">
                                <label class="text-[12px]">{{ $t('INVEST_AMOUNT') }}</label>

                                <div class="bg-[#F7F9FB] flex items-center gap-x-2 text-[14px] px-3 rounded-full">
                                    <span class="flex justify-center items-center rounded-full bg-blue w-[24px] aspect-square text-white shrink-0">
                                        <Icon icon="token:ton" />
                                    </span>

                                    <input v-model.number="stakeAmount" type="number" placeholder="0" class="w-full bg-transparent h-[50px] outline-none" />

                                    <button class="bg-white text-[#70758E] px-2 py-1 rounded-xl">{{ $t('MAX_FRASE') }}</button>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-2">
                                <label class="text-[12px]">{{ $t('INVEST_DAYS') }}</label>

                                <div class="bg-[#F7F9FB] flex items-center gap-x-2 text-[14px] px-3 rounded-full">
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

                        <div class="rounded-2xl overflow-hidden max-lg:order-1 relative flex flex-col gap-y-2 border-[#F7F9FB] text-[14px] border-2 max-lg:border-none p-4 w-1/2 max-lg:w-full">
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
                                <img src="../../assets/images/lines.svg" class="w-full" />
                            </div>
                        </div>
                   </div>
                </div>
           </div>

        </div>
    </section>
</template>