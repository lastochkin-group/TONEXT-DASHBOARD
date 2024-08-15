<script setup>

    import { Icon } from '@iconify/vue'

</script>

<template>
    <div class="flex items-center gap-x-2.5">
      <button class="from-[#0098EA] to-[#FFFFFF] bg-gradient-to-br h-[45px] w-[45px] shrink-0 rounded-2xl justify-center items-center p-[1px]">
        <div class="from-white to-transparent bg-gradient-to-br h-full w-full flex rounded-[15px] justify-center items-center">
          <Icon icon="solar:user-outline" class="text-blue text-[20px]" />
        </div>
      </button>

      <span class="text-[14px] font-medium">0x81...B8C4</span>
    </div>
</template>