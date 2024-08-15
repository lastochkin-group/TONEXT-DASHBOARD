<script setup>

    import { Icon } from '@iconify/vue'

    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

</script>

<template>
    <section class="container" id="contract">
        <div class="bg-[#F7F9FB] rounded-2xl px-4 py-12">
            <div class="flex flex-col gap-y-8">
                <div class="flex z-1 w-1/3 max-lg:w-full max-lg:items-center flex-col gap-y-4">
                    <span class="flex justify-center items-center bg-blue rounded-full w-[45px] aspect-square">
                        <Icon icon="mingcute:rocket-line" class="text-[24px] text-white" />
                    </span>

                    <h4 class="font-extrabold text-[#12172D] text-2xl max-lg:text-center">{{ $t('ADVANTAGE_TITLE') }}</h4>
                </div>

                <div class="flex max-lg:flex-col gap-2 justify-between">

                    <div class="from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-b flex flex-col gap-y-6 justify-between rounded-2xl p-4 pb-0 w-full">
                        <div class="flex flex-col gap-y-2">
                            <h5 class="font-extrabold text-xl text-white">{{ $t('1-ST_ADVANTAGE_TITLE') }}</h5>
                            <p class="text-white">{{ $t('1-ST_ADVANTAGE_DESCRIPTION') }}</p>
                        </div>

                        <div class="flex justify-center items-center w-full">
                            <img src="../../assets/images/adv_1.png" alt="Mobile App" />
                        </div>
                    </div>

                    <div class="bg-white flex flex-col gap-y-6 justify-between rounded-2xl p-4 pt-0 w-full">
                        <div class="flex justify-center items-center w-full">
                            <img src="../../assets/images/adv_2.png" alt="Mobile App" />
                        </div>

                        <div class="flex flex-col gap-y-2">
                            <h5 class="font-extrabold text-xl text-[#12172D]">{{ $t('2-ST_ADVANTAGE_TITLE') }}</h5>
                            <p class="text-[#12172D]">{{ $t('2-ST_ADVANTAGE_DESCRIPTION') }}</p>
                        </div>
                    </div>

                    <div class="bg-[#12172D] flex flex-col gap-y-6 justify-between rounded-2xl p-4 pb-0 w-full">
                        <div class="flex flex-col gap-y-2">
                            <h5 class="font-extrabold text-xl text-white">{{ $t('3-ST_ADVANTAGE_TITLE') }}</h5>
                            <p class="text-white">{{ $t('3-ST_ADVANTAGE_DESCRIPTION') }}</p>
                        </div>

                        <div class="flex justify-center items-center w-full">
                            <img src="../../assets/images/adv_3.png" alt="Mobile App" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>