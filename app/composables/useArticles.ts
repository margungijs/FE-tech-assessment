import { useApi } from './useApi'
import placeholder from '../assets/images/placeholder.jpg'
import placeholder1 from '../assets/images/placeholder1.jpg'
import placeholder2 from '../assets/images/placeholder2.jpg'
import type { Article } from '../assets/types/Article'

const fallbackArticles: Article[] = [
    {
        id: 1,
        title: 'Preview Article 1',
        image: placeholder,
        link: 'https://www.tvnet.lv/',
        date: (() => {
            const date = new Date()
            date.setUTCHours(date.getUTCHours() + 3)
            return date.toUTCString()
        })(),
        authors: ['marcis']
    },
    {
        id: 2,
        title: 'Preview Article 2',
        image: placeholder1,
        link: 'https://www.tvnet.lv/',
        date: (() => {
            const date = new Date()
            date.setUTCHours(date.getUTCHours() + 3)
            return date.toUTCString()
        })(),
        authors: ['marcis']
    },
    {
        id: 3,
        title: 'Preview Article 3',
        image: placeholder2,
        link: 'https://www.tvnet.lv/',
        date: (() => {
            const date = new Date()
            date.setUTCHours(date.getUTCHours() + 3)
            return date.toUTCString()
        })(),
        authors: ['marcis']
    }
]

export const useArticles = () => {
    const { data, error, fetchData } = useApi<Article[]>(
        '/api/articles',
        (articles: any[]): Article[] => {
            if (!articles || !Array.isArray(articles)) {
                return [];
            }

            return articles.map((article) => ({
                id: article.id,
                title: article.headline,
                image: article.media?.[0]?.sources?.portrait?.butterfly
                    || article.media?.[0]?.thumbnail?.sources?.portrait?.butterfly
                    || placeholder,
                link: `https://tvnet.lv/${article.id}/${article.slug}`,
                date: article.datePublished,
                authors: article.authors?.map((author: { name: string }) => author.name) || []
            }));
        }
    );

    const errorDescription = computed(() => {
        if (!data.value?.length) {
            return `The given articles API didn’t return any data (likely due to a 404 – Service not found). Below is a preview of what the articles would look like if data were successfully fetched from the API.`
        }
        return ''
    })


    const articles = computed<Article[]>(() => {
        if (!data.value?.length) {
            return fallbackArticles
        }
        return data.value.slice(0, 5)
    })

    return { articles, error, errorDescription, fetchData }
}
