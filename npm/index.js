const fs = require('fs')
const express = require('express');

async function took(){
    try {
        let info = await fs.promises.readFile(`./productos.txt`,'utf-8')
        console.log(info);
        return info
    } catch (error) {
        console.log('Se presento un error ' + error);
    }
}


const PORT = process.env.PORT || 8080

const  app = express()

app.get('/',(req,res)=>{
    res.send(`Esta es la pagina de inicio`)
})

app.get('/productos',(req,res)=>{
    took()
    res.send(`Esta es la pagina de productos `)

})

const connectedServer=app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`);
})

connectedServer.on('error',(error)=>{
    console.log(error.message);
})