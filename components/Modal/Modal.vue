<script setup>

    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'

    const props = defineProps({
        isOpen: Boolean
    })

    const emit = defineEmits(['close'])

</script>

<template>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="() => emit('close')" class="relative z-30">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div
            class="flex min-h-full items-center justify-center max-sm:p-0 p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-lg max-sm:h-screen mt-20 transform overflow-y-auto rounded-2xl max-sm:rounded-b-none bg-white p-6 max-sm:p-4 transition-all"
              >
                
                <slot />

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>