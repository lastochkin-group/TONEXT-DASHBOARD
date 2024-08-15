<script setup>

    import { Icon } from '@iconify/vue'

    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

</script>

<template>
    <div class="flex flex-col" id="hero">
        <section class="overflow-hidden relative pt-16">

            <div class="absolute z-0 left-0 right-0 top-24 bottom-0 justify-between flex opacity-40">
                <div class="flex h-[200px] blur-3xl aspect-square bg-blue rounded-r-full" />
                <div class="flex h-[200px] blur-3xl aspect-square bg-blue rounded-l-full" />
            </div>

            <div class="flex flex-col gap-y-6 relative p-4 container">
                <div class="flex z-[1] flex-col gap-y-4 justify-center items-center">
                    <span class="uppercase text-[14px] text-[#12172D] font-medium text-center">{{ $t('HERO_SUBTITLE') }}</span>

                    <h1 class="flex flex-col text-[64px] max-lg:text-[48px] max-md:text-[24px] transition-all font-bold justify-center items-center leading-tight">
                        <span class="text-[#12172D]">{{ $t('HERO_TITLE_DARK') }}</span>
                        <span class="text-blue">{{ $t('HERO_TITLE_BLUE') }}</span>
                    </h1>

                    <button class="h-[60px] bg-blue rounded-full text-white flex gap-x-4 items-center px-2">
                        <span class="ml-8 text-[14px] font-bold">{{ $t('START_NOW') }}</span>
                        <span class="h-[44px] aspect-square bg-white flex justify-center items-center rounded-full">
                            <Icon icon="maki:arrow" class="text-[#12172D] text-[20px]" />
                        </span>
                    </button>
                </div>

                <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center max-lg:scale-75 transition-all">
                    <span class="flex w-[1000px] justify-center items-center rounded-full aspect-square border-[3px] border-[#95CFF730]">
                        <span class="flex w-[600px] justify-center items-center rounded-full aspect-square border-[2px] border-[#95CFF730]">
                            <span class="flex w-[400px] rounded-full aspect-square border-[1.5px] border-[#95CFF730]" />
                        </span>
                    </span>
                </div>

                <div class="relative z-1 flex justify-center items-center">
                    <img src="../../assets/images/staking.png" alt="Desktop Staking Panel" class="w-full max-sm:hidden" />
                    <img src="../../assets/images/staking_mobile.png" alt="Desktop Staking Panel" class="w-sm sm:hidden" />
                    <div class="absolute top-2/3 inset-0 bg-gradient-to-b from-transparent to-white"></div>
                </div>

                <span class="w-[160px] absolute max-md:top-32 top-44 -left-10 max-md:scale-75 max-sm:top-36 max-sm:scale-50 max-sm:-left-6 transition-all">
                    <img src="../../assets/images/ton_levate_left.png" alt="TON Coin" />
                </span>

                <span class="w-[212px] absolute top-24 -right-10 max-md:scale-75 max-sm:top-56 max-sm:scale-50 max-sm:-right-8 transition-all">
                    <img src="../../assets/images/ton_levate_right.png" alt="TON Coin" />    
                </span>
            </div>

        </section>

        <section class="container relative overflow-hidden">
           <div class="py-12 px-6 max-lg:px-0 flex max-lg:flex-col items-center">
                <div class="flex z-1 w-1/2 max-lg:w-full max-lg:items-center flex-col gap-y-4">
                    <span class="flex justify-center items-center bg-blue rounded-full w-[45px] aspect-square">
                        <Icon icon="ph:seal-check-light" class="text-[24px] text-white" />
                    </span>

                    <h4 class="font-extrabold text-[#12172D] text-2xl max-lg:text-center">{{ $t('STAKE_TITLE') }}</h4>

                    <p class="text-[#12172D] max-lg:text-center">{{ $t('STAKE_SUBTITLE_1') }}</p>
                    <p class="text-[#12172D] max-lg:text-center">{{ $t('STAKE_SUBTITLE_2') }}</p>
                </div>

                <div class="w-1/2 z-[1] max-lg:w-full flex justify-center items-center">
                    <span class="scale-75">
                        <img src="../../assets/images/more_ton.png" alt="More Tons" class="w-full" />
                    </span>
                </div>

                <div class="absolute lg:hidden top-0 left-0 right-0 bottom-0 flex justify-center items-center max-lg transition-all">
                    <span class="flex w-[1000px] justify-center items-center rounded-full aspect-square border-b-[3px] border-[#95CFF730]">
                        <span class="flex w-[600px] justify-center items-center rounded-full aspect-square border-b-[2px] border-[#95CFF730]">
                            <span class="flex w-[400px] rounded-full aspect-square border-b-[1.5px] border-[#95CFF730]" />
                        </span>
                    </span>
                </div>
           </div>
        </section>
    </div>
</template>