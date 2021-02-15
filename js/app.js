const apiKey = 'bb78e4cf3442e302d928f2c5edcdbee1';

let endPoint = 'external_ids';

const baseUrl = 'http://api.themoviedb.org/3/movie';

let id = '464052'

let url = 'https://api.themoviedb.org/3/movie/464052/external_ids?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa';

let promise = axios.get(url)

pepe = promise.then(response => response.data).then(console.log)
let p = axios.get(pepe);

movieArrayPromise = p.then(response =>response.data.results)
resultPromise = p.then(response => response.data.results[0].id).then(console.log)
    

//const url = `${baseUrl}/${params}/${id}/${endPoint}?api_key=${apiKety}`

const callPromise = async (url) =>{
    let response = await axios.get(url)

    if(!response.data){
        error = new Error ('id incorrecto');
        return error;
    };

    return response.data;
}

//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id