
const initialState = {
    tabFilter:'all',
    favedPosts:[],
    tecstack:'angular',
}
/// INITIAL SETTINGS

export const getSettings = () => {
    const settings =  localStorage.getItem("settings");
    if(settings===null){
        localStorage.setItem('settings', JSON.stringify(initialState));
        return JSON.parse(localStorage.getItem("settings"));
    }else{
        return JSON.parse(settings);
    }
};

export const setSettings = (slice,value)=>{
    const settings =getSettings();
    settings[slice] = value;
    localStorage.setItem('settings', JSON.stringify(settings));
}




//UTILS
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
    let hits = data.hits;
    const sizeIni = hits.length;
    hits = hits.filter(item=>(
        item.story_title == null ||
        item.story_url == null ||
        item.author == null ||
        item.created_at !== null
    ));
    const sizeEnd = hits.length;

    const {tabFilter, favedPosts}=getSettings();

    if(tabFilter==="myFaves"){
        hits = hits.filter(item=>(favedPosts.includes(item.objectID)));
    }

    return {
        ...data,
        hits,
        sizeIni,
        sizeEnd
    }

};


export const techStackCombo =    [
    {
        id: "angular",
        label: 'Angular',
        selected: false
    },
    {
        id: "react",
        label: 'React',
        selected: false
    },
    {
        id: "vue",
        label: 'Vue',
        selected: false
    }
];
export const tabsCombo = [
    {id: "all",title: "All",selected: false},
    {id: "myFaves",title: "My Faves", selected: false }
  ];


