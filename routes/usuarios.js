const {Router}=require('express')
const {getUsuarios,patchUsuarios,putUsuarios,postUsuarios,deleteUsuarios}=require('../controllers/usuarios')


const route=Router()

route.get('/', getUsuarios)
route.patch('/', patchUsuarios)
route.post('/', postUsuarios)
route.put('/:id', putUsuarios)
route.delete('/', deleteUsuarios)

module.exports=route