<script lang = "ts" setup>
import type { Article } from "../assets/types/Article";
import { ref, onMounted, computed } from 'vue';

const props = defineProps<{
    article: Article,
    index: number
}>();

const articleRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

//Could be moved to composables if its reused, but since its only used for articles
//I left it in the component itself
onMounted(() => {
    if (!articleRef.value) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(articleRef.value);
});

//Could be moved to composables if its reused, but since its only used for article date formatting
//I left it in the component itself
const formattedDate = computed(() => {
    if (!props.article.date) return ''
    const date = new Date(props.article.date)
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
})

</script>

<template>
    <section
        ref="articleRef"
        :key="props.article.id"
        :class="['article', { 'reverse': props.index % 2 !== 0, 'visible': isVisible }]"
    >
        <figure class="article-image-container">
            <a :href="props.article.link" target="_blank" rel="noopener noreferrer">
                <img :src="props.article.image" :alt="props.article.title" class="article-image" />
            </a>
        </figure>
        <article class="article-info">
            <div class="article-header">
                <span class="article-number">
                    {{ props.index + 1 < 10 ? '0' + (props.index + 1) : props.index + 1 }}
                </span>
                <h2 class="article-title">
                    <a :href="props.article.link" target="_blank" rel="noopener noreferrer">
                        {{ props.article.title }}
                    </a>
                </h2>
            </div>
            <div class="article-meta">
                <span class="article-date">{{ formattedDate }}</span>
                <p v-if="props.article.authors?.length" class="article-authors">
                    By {{ props.article.authors.join(', ') }}
                </p>
            </div>
        </article>
    </section>
</template>



<style scoped>
.article {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    height: 40vh;

    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.article-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}

.article-meta {
    text-align: center;
}

.article.reverse {
    flex-direction: row-reverse;
}

.article.visible {
    opacity: 1;
    transform: translateY(0);
}

.article-image-container {
    width: 75%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
}

.article-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.article-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
}

.article-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 2px solid #FF5501;
    border-radius: 50%;
    color: #FF5501;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
    background-color: transparent;
}

.article-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
    text-align: center;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: black;
}

.article-date {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.25rem;
    text-align: center;
}

.article-authors {
    font-size: 0.85rem;
    color: #888;
    text-align: center;
    margin: 0;
}

@media (max-width: 768px) {
    .article {
        flex-direction: column-reverse;
        height: auto;
        gap: 1rem;
        width: 100%;
    }

    .article.reverse {
        flex-direction: column-reverse;
    }

    .article-header {
        flex-direction: row;
    }

    .article-image-container {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        display: block;
        margin: 0;
    }

    .article-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .article-info {
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }

    .article-meta {
        display: flex;
        flex-direction: row;
        text-align: center;
        gap: 8px;
    }

    .article-number {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
        margin: 0;
    }

    .article-title {
        font-size: 1rem;
        text-align: left;
        margin: 0;
    }

    .article-date {
        font-size: 0.8rem;
        text-align: left;
        margin: 0;
    }
}
</style>