<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

// Инициализация i18n
const { locale, availableLocales } = useI18n()

// Определение свойств компонента
const props = defineProps({
  title: {
    type: String,
    default: false
  },
  state: {
    type: String,
    default: 'basic', // Возможные значения: 'basic', 'active', 'disabled'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isDark: {
    type: Boolean,
    default: false
  }
})

// Определение класса для кнопки
const buttonClass = computed(() => {
  switch (props.state) {
    case 'active':
      return 'from-[#2A83EB] to-[#1AC9FF] bg-gradient-to-b'
    case 'disabled':
      return props.isDark ? 'bg-button_dark_color text-button_dark_text_color': 'bg-button_color text-button_text_color'
    default:
      return props.isDark ? 'bg-button_dark_color text-button_dark_text_color': 'bg-button_color text-button_text_color'
  }
})

// Функция для переключения языка
function switchLocale() {
  const newLocale = locale.value === 'en' ? 'ru' : 'en'
  locale.value = newLocale
}

</script>

<template>
  <!-- Кнопка для отображения текущего языка и переключения -->
  <button
    @click="switchLocale"
    :class="[
      isDark ? 'border-button_text_color' : 'border-button_dark_text_color',
      'flex w-fit items-center border-[1px] text-[14px] justify-center px-4 h-[45px] gap-x-2 rounded-full transition-colors duration-300',
      buttonClass,
      { 
        'cursor-not-allowed opacity-25': disabled,
        'hover:border-[#FFFFFF40]': state === 'basic' && !disabled
      }
    ]"
    :disabled="disabled"
  >
    <Icon icon="octicon:globe-24" class="text-[20px]" />
    <span>{{ locale.toUpperCase() }}</span> <!-- Отображение текущего языка -->
  </button>
</template>
