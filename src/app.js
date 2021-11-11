const express = require('express')
const path = require('path')
const hbs = require('hbs')
const news = require('./tools/newsApi')

//

const app = express()
const port = 3000

//

const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))


const viewsDir = path.join(__dirname,'../templates/views')
app.set ('views',viewsDir)

//
app.set ('view engine' , 'hbs')


const partialsDir = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsDir)



//////
app.get ('/',(req,res)=>{

    news((error,data)=>{
        if(error){
            return res.render('404',error)
        }
        //console.log(data)
        return res.render('index',{data})
    })
    
  })


app.get('*',(req,res)=>{
    res.render('404',{
     
    })
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




