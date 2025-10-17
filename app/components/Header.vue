<script lang = "ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    logo?: string,
    bgColor?: string
}>();

</script>

<template>
    <header class="header" :style="{ backgroundColor: props.bgColor }">
        <img
            class="logo"
            :src="props.logo"
            alt="Logo"
            width="200"
            height="60"
        />
        <nav class="nav">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </nav>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.logo {
    height: 50px;
    width: auto;
}

.nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #1a1a1a;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.3s ease;
}

.nav a:hover {
    transform: scale(1.1);
}
</style>
