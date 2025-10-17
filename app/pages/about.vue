<template>
    <section class="about">
        <h1>About This Project</h1>

        <p>
            This project was developed as part of a <strong>technical assessment</strong>
            for the <strong>Junior Front-End Developer</strong> vacancy at TVNET.
        </p>

        <p>
            It demonstrates practical use of <strong>Vue.js</strong> and <strong>Nuxt.js</strong>,
            with an emphasis on component reusability, composables, API integration, pages, layouts and responsive design.
        </p>

        <p>
            The application integrates with two REST APIs:
        </p>

        <ul>
            <li>
                <strong>Sections API</strong> — used for dynamically rendering and formatting content sections.
            </li>
            <li>
                <strong>Articles API</strong> — used to fetch and display the latest articles.
            </li>
        </ul>

        <p>
            In case the Articles API fails to return data (for example, due to a
            <code>404 – Service Not Found</code> error), the application gracefully falls back
            to preview articles with placeholder data. This ensures the UI remains functional
            and visually representative of the intended layout.
        </p>
    </section>
</template>

<style scoped>
.about {
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    color: #333;
    line-height: 1.6;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ff5501;
    text-align: center;
}

ul {
    margin: 1rem 0 1.5rem 1.5rem;
}

li {
    margin-bottom: 0.5rem;
}
</style>
