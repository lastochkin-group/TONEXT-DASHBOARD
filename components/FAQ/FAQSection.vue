<script setup>

    import { Icon } from '@iconify/vue'
    import DropdownItem from '../UI/Dropdowns/DropdownItem.vue'

    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

</script>

<template>

    <section class="container" id="faq">
        <div class="bg-[#12172D] rounded-2xl px-4 py-12">
            <div class="flex flex-col gap-y-8">
                <div class="flex z-1 w-1/3 max-lg:w-full max-lg:items-center flex-col gap-y-4">
                    <span class="flex justify-center items-center bg-blue rounded-full w-[45px] aspect-square">
                        <Icon icon="iconamoon:search-light" class="text-[24px] text-white" />
                    </span>

                    <h4 class="font-extrabold text-white text-2xl max-lg:text-center">{{ $t('FAQ_TITLE') }}</h4>
                </div>

                <div class="flex max-lg:flex-col justify-between gap-x-6 gap-y-2">
                    <div class="flex flex-col gap-y-2 w-full">
                        <DropdownItem 
                            :title="$t('1-ST_DROPDOWN_ANSWER_TITLE')"
                            :content="$t('1-ST_DROPDOWN_ANSWER_DESCRIPTION')"
                        />

                        <DropdownItem 
                            :title="$t('2-ST_DROPDOWN_ANSWER_TITLE')"
                            :content="$t('2-ST_DROPDOWN_ANSWER_DESCRIPTION')"
                        />
                    </div>

                    <div class="flex flex-col gap-y-2 w-full">
                        <DropdownItem 
                            :title="$t('3-ST_DROPDOWN_ANSWER_TITLE')"
                            :content="$t('3-ST_DROPDOWN_ANSWER_DESCRIPTION')"
                        />

                        <DropdownItem 
                            :title="$t('4-ST_DROPDOWN_ANSWER_TITLE')"
                            :content="$t('4-ST_DROPDOWN_ANSWER_DESCRIPTION')"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>