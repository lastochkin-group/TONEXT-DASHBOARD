<script setup>

    import { useI18n } from 'vue-i18n'
    import StepItem from './StepItem.vue'

    const { t } = useI18n()

    const steps = [
        { id: 0, step: '01', title: t('1-ST_STEP_TITLE'), description: t('1-ST_STEP_DESCRIPTION') },
        { id: 1, step: '02', title: t('2-ST_STEP_TITLE'), description: t('2-ST_STEP_DESCRIPTION') },
        { id: 2, step: '03', title: t('3-ST_STEP_TITLE'), description: t('3-ST_STEP_DESCRIPTION') }
    ]

</script>

<template>
    <section class="container" id="how_start">
       <div class="py-20 px-8 flex flex-col gap-y-6">
            <h2 class="font-extrabold text-[#12172D] text-2xl max-lg:text-center">{{ $t('STEP_TITLE') }}</h2>
            <div class="flex max-lg:flex-col gap-2 justify-between">
                <StepItem 
                    v-for="el, index in steps"
                    :key="index"
                    :step="el.step"
                    :title="el.title"
                    :description="el.description"
                />
            </div>
       </div>
    </section>
</template>