<script lang="ts" setup>
import { useSection } from '../composables/useSection'
import defaultLogo from '../assets/images/placeholder-logo.jpg'

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
    sectionData.value
        ? isMobile.value
            ? sectionData.value.logos.small
            : sectionData.value.logos.darkBg
        : defaultLogo
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
            href: sectionData.value?.logos.favicon || defaultLogo
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
