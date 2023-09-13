
const express = require('express')
const cors=require('cors')


class Server {

    constructor(){

        this.app = express()
        this.port=process.env.PORT
        this.path='/api/usuarios'
        this.midleware()
        this.router()
        this.listen()

    }

    midleware(){
        this.app.use(express.static('public'))

        this.app.use(cors())

        this.app.use(express.json())

    }


    router(){
    
        this.app.use(this.path,require('../routes/usuarios'))

        
    }

    listen(){
        this.app.listen(this.port, ()=>{
        console.log('aplicacion corrienddo en el puerto',this.port)
      })
    }
}

module.exports=Server