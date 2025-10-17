<script setup lang="ts">

const emit = defineEmits([
    'scrollToArticles'
]);
</script>

<template>
    <section class="landing">
        <button
            class="go-button"
            @click="emit('scrollToArticles')"
            aria-label="Scroll to the Articles section"
        >
            Go to Articles
        </button>
    </section>
</template>

<style scoped>
.landing {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
    background-image: url('~/assets/images/landing-image.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.go-button {
    background-color: #FF5501;
    color: #1a1a1a;
    border: none;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}

.go-button:hover {
    transform: scale(1.1);
}
</style>
