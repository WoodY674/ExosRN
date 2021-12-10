import { isNullOrUndefined } from "./commonFunction.js"
/**
 * Return the value of a promise returned by an api call, and console.log the result
 * @param promise : Promise<Response> :
 */
export function handleFetchLogJson(promise){
    return promise
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            return response})
        .catch(e=>console.error(e));
}

/**
 * Write all params in a get query (exemple : ?search=js&name=delete)
 * @param isFirstParam
 * @param params
 * @param ignored
 * @return {string}
 */
export function handleUrlParams(isFirstParam, params={}, ignored=[]){
    let paramsTxt = "";
    let count = 0;
    Object.keys(params).forEach((el)=>{
        if(!ignored.includes(el) && !isNullOrUndefined(params[el])) {
            paramsTxt += (isFirstParam && count === 0 ? "?" : "&") + el + "=" + params[el];
            count++;
        }
    })
    return paramsTxt;
}

export const apiKey = "CPJK3YKktIgywncAOPSm82Ki9mfSAIrbXaRPqh7u"

export function apiNasaApod(){
    return handleFetchLogJson(fetch( "https://api.nasa.gov/planetary/apod?api_key=" + apiKey))
}

export function apiNasaMarsByRovers(rovers){
    return handleFetchLogJson(fetch( "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=" + apiKey))

}

//async function t(){await handleFetchLogJson(fetch( "https://api.nasa.gov/planetary/apod?api_key=CPJK3YKktIgywncAOPSm82Ki9mfSAIrbXaRPqh7u" ))};