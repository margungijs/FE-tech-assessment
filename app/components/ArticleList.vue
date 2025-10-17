<script setup lang="ts">
import { ref, defineExpose, computed } from 'vue'
import type { Article } from "../assets/types/Article";
import { useArticles } from "../composables/useArticles";

const sectionEl = ref<HTMLElement | null>(null)
defineExpose({ sectionEl })

const { articles, errorDescription } = useArticles()

</script>

<template>
    <section ref ="sectionEl" class="articles">
        <div v-if="errorDescription" class="articles-error">
            <p>{{ errorDescription }}</p>
        </div>
        <Article
            v-for = "(article, index) in articles"
            :key = "article.id"
            :article = "article"
            :index = "index"
        />
    </section>
</template>

<style scoped>
.articles {
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
}

.articles-loading {
    text-align: center;
    color: #555;
    font-size: 1.1rem;
}

.articles-error {
    background-color: #fff3e0;
    border: 1px solid #ffc107;
    border-radius: 8px;
    padding: 1rem;
    color: #5c3b00;
    font-size: 0.95rem;
    line-height: 1.4;
}
</style>
