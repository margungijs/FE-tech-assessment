<script setup lang="ts">
import { ref } from 'vue'
import placeholderImg from '~/assets/images/placeholder.jpg'

const articleListRef = ref<any>(null)

const scrollToArticles = () => {
    if (articleListRef.value?.sectionEl) {
        articleListRef.value.sectionEl.scrollIntoView({ behavior: 'smooth' })
    }
}

const articles = [
    { id: 1, title: 'First Article', image: placeholderImg, number: 1 },
    { id: 2, title: 'Second Article', image: placeholderImg, number: 2 },
]
</script>

<template>
    <div class="page">
        <Landing @scrollToArticles="scrollToArticles"/>
        <ArticleList
            ref="articleListRef"
            :articles="articles"
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
