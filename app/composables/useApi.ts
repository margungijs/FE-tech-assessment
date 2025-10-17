import { ref } from 'vue'
import { useFetch } from 'nuxt/app'

export const useApi = <T>(
    endpoint: string,
    transform?: (data: any) => T
) => {
    const data = ref<T | null>(null)
    const error = ref<any>(null)

    const fetchData = async () => {
        const { data: fetched } = await useFetch(endpoint, {
            lazy: false
        })

        if (fetched.value) {
            data.value = transform ? transform(fetched.value) : (fetched.value as T)
        }

        return { data: data.value, error: error.value }
    }

    return { data, error, fetchData }
}
