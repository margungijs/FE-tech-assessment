import { ofetch } from 'ofetch'
import {defineEventHandler} from 'h3'

export default defineEventHandler(async () => {
    try {
        const data = await ofetch('https://services.tvnet.lv/rest/v1/sections/4133/articles', {
            cache: 'no-store'
        })
        return data;
    } catch (error: unknown) {
        return { error: 'Failed to fetch API', details: String(error) }
    }
})
