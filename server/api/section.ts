import { defineEventHandler } from 'h3'
import {ofetch} from "ofetch";

export default defineEventHandler(async () => {
    try {
        const data = await ofetch('https://services.tvnet.lv/rest/v1/sections/4133', {
            cache: "no-store"
        })
        return data;
    } catch (error) {
        return { error: 'Failed to fetch API', details: error }
    }
})
