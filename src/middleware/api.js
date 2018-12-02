var appConfig = require('../configurations/appsettings.json');

const BASE_URL = appConfig.apiServerAdress;
const API_KEY = "6a78596d062df78380eff5944c4e5567";

export default function some(endpoint, method, requireAuthentication) {
    let token = API_KEY //localStorage.getItem('id_token') || null
    let config = {}
  
    if(requireAuthentication) {
        if(token) {
            config = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        } else {
            throw "No token saved!"
        }
    }


    return fetch(BASE_URL + endpoint, config)
        .then(response =>
            response.text()
                .then(text => ({ text, response }))
    ).then(({ text, response }) => {
        if (!response.ok) {
        console.log(response)
        console.log(response.status)
        return Promise.reject(response.status)
        }
        return text
    }).catch(function(error){
        console.log(error)
        return Promise.reject(error)
        
    })
}