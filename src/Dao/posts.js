export const postFetcher = (url) => {
    try {
        return fetch(url).then((res) => res.json());;
    }
    catch (e) {
        console.log(e)
        throw e
    }
};

export const postFilter = (data)=>{
    debugger;
    let hits = data.hits;
    const sizeIni = hits.length;
    hits = hits.filter(item=>(
        item.story_title == null ||
        item.story_url == null ||
        item.author == null ||
        item.created_at !== null
    ));
    const sizeEnd = hits.length;

    return {
        ...data,
        hits,
        sizeIni,
        sizeEnd
    }

}

