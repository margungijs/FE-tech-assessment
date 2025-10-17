export default defineEventHandler(async () => {
    try {
        const data = await $fetch('https://services.tvnet.lv/rest/v1/sections/4133/articles')
        return data;
    } catch (error: unknown) {
        return { error: 'Failed to fetch API', details: String(error) }
    }
})
