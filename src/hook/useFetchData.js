import { useEffect, useState } from "react"
import useLogout from "./useLogout"
import { useAxiosAuth } from "./useAxiosAuth"

export const useFetchData = (url)=>{
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState({})
    const [meta, setMeta] = useState({})

    const [pagination, setPagination] = useState({
        current_page: 0,
        next_page: null,
        prev_page: null,
        total_count: 0,
        total_page: 0
    });

    const [requestUrl, setRequestUrl] = useState("")
    const logout = useLogout()

    const axiosAuth = useAxiosAuth();
    useEffect(()=>{
        axioscall(url)
    }, [url]);

    async function axioscall(url) {
        setRequestUrl(url);
        setLoading(true);
        try {
            const res = await axiosAuth.get(url)
            if(res.data.status || res.data.success) {
                setMeta(res?.data?.metadata);
                setPagination(res?.data?.pagination)
                setResponse(res?.data?.data);
                setError("")
            }
        } catch (error) {
            console.log({error});
            if(error?.response?.status === 401) {
                return logout(true)
            }
            setError(error);
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    function refetch(url) {
        axioscall(url || requestUrl)
    }

    return {data: response, error, loading, meta, refetch, pagination};
};