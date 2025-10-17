export const useApi = <T>(
    endpoint: string,
    transform?: (data: any) => T
) => {
    const data = ref<T | null>(null)
    const error = ref<any>(null)

    const fetchData = async () => {
        const { data: fetched, error: fetchError } = await useFetch(endpoint)

        if (fetchError.value) {
            error.value = fetchError.value
            console.error('Fetch error:', fetchError.value)
        }

        if (fetched.value) {
            data.value = transform ? transform(fetched.value) : (fetched.value as T)
        } else {
            console.warn('Fetched data is null')
        }

        return data.value
    }


    return { data, error, fetchData }
}
