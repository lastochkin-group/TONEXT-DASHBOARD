<script setup>
  import Crumbs from '~/components/UI/Crumbs/Crumbs.vue'
  import WalletButton from '~/components/UI/Wallet/WalletButton.vue'
</script>

<template>
  <div class="flex w-full justify-between max-sm:hidden">
    <Crumbs 
      page="Главная"
    />

    <WalletButton />
  </div>
</template>
