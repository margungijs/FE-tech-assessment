<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useSection } from '../composables/useSection'
import { useHead } from 'nuxt/app'

const { data: sectionData, fetchData } = useSection()
await fetchData()

const isMobile = ref(false)

const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
})
onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
})

const logoToUse = computed(() =>
    isMobile.value
        ? sectionData.value?.logos.small
        : sectionData.value?.logos.darkBg
)

useHead({
    title: sectionData.value?.titleBar || 'Default title',
    htmlAttrs: {
        lang: sectionData.value?.lang || 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: sectionData.value?.logos.favicon
        },
        { rel: 'preload', as: 'image', href: logoToUse.value || '' }
    ]
})
</script>

<template>
    <div>
        <Header
          :logo="logoToUse"
          :bg-color="sectionData.color"
        />
        <main>
            <slot />
        </main>
    </div>
</template>
