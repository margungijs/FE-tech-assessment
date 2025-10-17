<script lang="ts" setup>
const articleListRef = ref<any>(null)

const scrollToArticles = () => {
    if (articleListRef.value?.sectionEl) {
        articleListRef.value.sectionEl.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <div class="page">
        <Landing @scrollToArticles="scrollToArticles"/>
        <ArticleList
            ref="articleListRef"
        />
    </div>
</template>

<style scoped>
html, body {
    scroll-behavior: smooth;
}

.page {
    height: calc(100vh - 70px);
    scroll-snap-type: y mandatory;
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;
}

.page::-webkit-scrollbar {
    display: none;
}
</style>
