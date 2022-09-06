const fs = require('fs')
const express = require('express');

async function took(){
    try {
        let info = await fs.promises.readFile(`./productos.txt`,'utf-8')
        console.log(info);
        return info
    } catch (error) {
        console.log('Se presento un error en tomar info ' + error);
    }
}

async function getRandomInt(max) {
    try {
        let info2 = await fs.promises.readFile(`./productos.txt`,'utf-8')
        let infoJS=JSON.stringify(info2)
        let productRandom = infoJS[Math.floor(Math.random() * max)]
        console.log(productRandom);
        return productRandom;
    } catch (error) {
        console.log('Se presento un error en random ' + error);
    }

  }




const PORT = process.env.PORT || 8080

const  app = express()

app.get('/',(req,res)=>{
    res.send(`Esta es la pagina de inicio`)
})

app.get('/productos',(req,res)=>{
    took().then(products=>{res.send(JSON.parse(products))}) 
})

app.get('/productoRandom',(req,res)=>{
    getRandomInt(3).then(ran=>{res.send(JSON.stringify(ran))});
})

const connectedServer=app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`);
})

connectedServer.on('error',(error)=>{
    console.log(error.message);
})