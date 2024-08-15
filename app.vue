<script setup>
    import { onBeforeMount, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import Logo from './components/UI/Logos/Logo.vue'
    import { Icon } from '@iconify/vue'
    import MagicButton from './components/UI/Buttons/MagicButton.vue'
    import GradientButton from './components/UI/Buttons/GradientButton.vue'

    const { t, locale, availableLocales, loadLocaleMessage } = useI18n();
    const isReady = ref(false);

    async function loadLocale() {
      const currentLocale = locale.value;

      if (!availableLocales.includes(currentLocale)) {
        await loadLocaleMessage(currentLocale);
      }

      isReady.value = true;
    }

    onBeforeMount(async () => {
      await loadLocale();
    });

    const links = [
        { id: 0, icon: 'lets-icons:chart-pin-light', link: '/', title: 'Стейкинг' },
        { id: 1, icon: 'prime:megaphone', link: '/referrals', title: 'Реферальная программа' },
        { id: 2, icon: 'basil:history-solid', link: '/history', title: 'История' },
        { id: 3, icon: 'mynaui:support', link: '/support', title: 'Поддержка' }
    ]

    const mobile_links = [
        { id: 0, icon: 'mingcute:rocket-line', link: '/', title: 'Стейкинг' },
        { id: 1, icon: 'ph:users-three', link: '/referrals', title: 'Друзья' },
        { id: 2, icon: 'solar:wallet-bold', link: '/history', title: 'Кошелек' },
        { id: 3, icon: 'ph:user-bold', link: '/support', title: 'Профиль' }
    ]
</script>

<template>
  <div v-if="isReady" class="flex">
    <aside class="flex flex-col gap-y-6 max-sm:hidden justify-between min-w-[320px] max-lg:min-w-fit max-lg:w-fit p-4 transition-all gameView">
      <div class="flex flex-col gap-y-4 items-start">
        <header class="flex w-full justify-between items-center">
          <Logo class="max-lg:hidden" />

          <button class="text-[#70758E] flex justify-center items-center h-[45px] max-lg:w-full">
            <Icon icon="healthicons:ui-menu" class="text-[24px]" />
          </button>
        </header>

        <span class="line" />

        <menu class="flex flex-col gap-y-2 w-full">
          <span class="text-[12px] text-[#70758E] uppercase max-lg:text-center">Меню</span>
          <MagicButton
            v-for="el, index in links"
            :key="index"
            :icon="el.icon"
            :title="el.title"
            :link="el.link"
          />
        </menu>

        <span class="line" />

        <MagicButton
            icon="hugeicons:logout-01"
            title="Выйти из аккаунта"
          />
      </div>

      <div class="max-lg:hidden">
        <GradientButton 
          title="Телеграм приложение"
          link="#"
        />
      </div>
    </aside>
    <main class="bg-white max-sm:pb-[80px] relative max-sm:bg-[#EFEFF4] max-sm:rounded-none px-8 py-4 rounded-l-3xl flex items-start w-full transition-all gameView">
      <NuxtPage />

      <menu class="fixed sm:hidden left-0 right-0 bottom-0 pb-6 pt-2 px-4">
        <div class="bg-white rounded-2xl flex p-2.5 justify-around">
          <nuxt-link 
            v-for="el, index in mobile_links"
            :to="el.link" 
            :key="index"
            class="flex w-1/4 h-[45px] flex-col gap-y-0.5 items-center justify-between text-[12px] font-medium"
            active-class="text-blue"
          >
            <Icon :icon="el.icon" class="text-[24px]" />
            <span>{{ el.title }}</span>
          </nuxt-link>
        </div>
      </menu>
    </main>
  </div>
</template>