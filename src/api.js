import config from './config.json';

const searchAsync = async (searchString) => {
    const url = new URL(config.apiBaseUrl);
    url.searchParams.set('s', searchString);
    url.searchParams.set('apiKey', config.apiKey);

    return await fetch(url).then(r => r.json());
}

const favsUrl = `${config.customApiBaseUrl}/favorite`;

const saveFavs = async (favs) =>{
    const url = favsUrl;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(favs)
    }).then(r => r.json());

    return response;
}

const getFavs = async (id) =>{
  let  url = favsUrl + '/' + id;

    return await fetch(url).then(r => r.json());
}
export const api = { searchAsync, saveFavs, getFavs };
