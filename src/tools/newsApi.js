const request = require('request')


const news = (callback)=>{

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-11&sortBy=publishedAt&apiKey=70fa13af5be9481994d7f14a06e892da'

    request({url,json:true},(error,responce)=>{

        if (error){
            callback('Unable To Connect',undefined)
        }
        else if (responce.body.status === 'error'){
            callback(responce.body.message,undefined)
        }
    
        else{

            callback(undefined,responce.body.articles)
        
        }
    
        
    })
}


module.exports = news