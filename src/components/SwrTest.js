import { JSONTree } from 'react-json-tree';
import useSWR from 'swr'

const fetcher = (url) => {
    try {
        return fetch(url).then((res) => res.json());
    }
    catch (e) {
        console.log(e)
        throw e
    }
}


const SwrTest = () => {
    const apiUrl = "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0"
    const { data, error } = useSWR(apiUrl, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <JSONTree data={data} />
}

export default SwrTest;