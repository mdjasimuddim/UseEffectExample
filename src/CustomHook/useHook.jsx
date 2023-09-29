import React, {useState, useEffect} from 'react'

const useHook = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error('fetching is not successful');
                }else{
                    return res.json()
                }
            })
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
        },2000)
    },[url])

    return {data, loading, error}
}

export default useHook