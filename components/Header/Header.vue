<script setup>
    import { Icon } from '@iconify/vue'
    import Logo from '../UI/Logos/Logo.vue'
    import LanguageButton from '../UI/Buttons/LanguageButton.vue'
    import NavLink from '../UI/Buttons/NavLink.vue'
    import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
    import { computed } from 'vue'

    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

    const links = [
        { id: 0, link: '#hero', title: computed(() => t('HOME_LINK')) },
        { id: 1, link: '#faq', title: computed(() => t('FAQ_LINK')) },
        { id: 2, link: '#how_start', title: computed(() => t('HOW_START_LINK')) },
        { id: 3, link: '#contract', title: computed(() => t('CONTRACT_LINK')) },
        { id: 4, link: '#calculator', title: computed(() => t('CALCULATOR_LINK')) }
    ]

    const isOpened = ref(false)

    const toggleBodyScroll = () => {
        if (isOpened.value) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    onMounted(() => {
        watchEffect(() => {
            toggleBodyScroll();
        });
    });

    onBeforeUnmount(() => {
        document.body.classList.remove('no-scroll');
    });
</script>


<template>
    <header>

        <div class="flex justify-between items-center p-4 container">
            <div class="flex items-center gap-x-6">
                <Logo />

                <LanguageButton
                    class="max-lg:hidden"
                    title="En"
                    :isDark="true"
                />
            </div>

            <div class="flex">
                <menu class="flex items-center gap-x-6 max-lg:hidden">
                    <ul class="flex gap-x-4 items-center">
                        <li v-for="el, index in links" :key="index">
                            <NavLink 
                                :title="el.title"
                                :link="el.link"
                                :isDark="false"
                            />
                        </li>
                    </ul>

                    <div class="flex gap-x-4 items-center">
                        <span class="flex max-xl:hidden w-fit items-center text-[14px] bg-button_dark_color justify-center px-4 h-[45px] gap-x-2 rounded-full text-white">
                            <span>1 TON - $4.89</span>
                        </span>

                        <button class="flex w-fit items-center text-[14px] bg-blue justify-center px-4 h-[45px] gap-x-2 rounded-full text-white">
                            <Icon icon="token:ton" class="text-[20px]" />
                            <span class="font-semibold">Connect wallet</span>
                        </button>
                    </div>
                </menu>

                <menu class="lg:hidden text-white flex items-center gap-x-4">
                    <button class="w-[45px] aspect-square bg-blue flex justify-center items-center text-white rounded-full">
                        <Icon icon="solar:wallet-bold" class="text-[20px]" />
                    </button>

                    <button @click="() => isOpened = !isOpened" class="flex w-fit items-center border-[1px] text-[14px] bg-button_dark_color border-[#FFFFFF40] justify-center h-[45px] px-4 gap-x-2 rounded-full">
                        <Icon icon="healthicons:ui-menu" class="text-[20px]"/>
                    </button>
                </menu>
            </div>
        </div>

        <transition name="slide-fade">
            <aside v-if="isOpened" class="p-4 fixed fixHeight overflow-y-auto z-10 left-0 right-0 lg:hidden flex flex-col gap-y-8 rounded-t-2xl bg-[#12182E] border-[1px] border-[#25305B]">

                <div class="flex justify-between items-center w-full">
                    <span class="text-[#70758E] font-medium">Menu</span>

                    <Logo
                        class="scale-90"
                    />

                    <button @click="() => isOpened = false" class="text-white bg-[#70758E20] rounded-full w-[30px] aspect-square flex justify-center items-center">
                        <Icon icon="iconamoon:close-duotone" class="text-[20px]" />
                    </button>
                </div>

                <menu class="flex flex-col gap-y-6">
                    <ul class="flex flex-col items-center text-[18px]">
                        <li v-for="el, index in links" :key="index" class="w-full border-b-[1px] border-[#25305B] last:border-none">
                            <a @click="() => isOpened = false" :href="el.link" class="text-white flex h-[62px] items-center justify-center active:text-blue w-full">
                                {{ el.title }}
                            </a>
                        </li>
                    </ul>

                    <div class="flex flex-col gap-y-4">
                        <button class="flex w-full items-center text-[14px] bg-blue justify-center px-4 h-[45px] gap-x-2 rounded-full text-white">
                            <Icon icon="token:ton" class="text-[20px]" />
                            <span class="font-semibold">Connect wallet</span>
                        </button>

                        <div class="flex justify-between items-center">
                            <span class="flex w-fit items-center text-[14px] bg-button_dark_color justify-center px-4 h-[45px] gap-x-2 rounded-full text-white">
                                <span>1 TON - $4.89</span>
                            </span>

                            <LanguageButton
                                title="En"
                                :isDark="true"
                            />
                        </div>
                    </div>
                </menu>

            </aside>
        </transition>

    </header>
</template>

<style scoped>
.fixHeight {
    height: calc(100% - 93px)
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
  opacity: 1;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>