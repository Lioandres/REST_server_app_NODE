const {response,request}=require('express')

const getUsuarios=(req=request, res=response) => {

      const {page=1,limit}=req.query
      const {edad}= req.body
      res.json({
          edad,
          msg:'get API',
          page,
          limit
          
    })
  }

  const putUsuarios=(req=request, res=response) => {
    const {id}=req.params
    res.json({
      msg:'put API',
      id
  })
}
const patchUsuarios=(req, res=response) => {
    res.json({
      msg:'pacht API'
  })
}
const postUsuarios=(req, res=response) => {
    res.json({
      msg:'post API'
  })
}
const deleteUsuarios=(req, res=response) => {
    res.json({
      msg:'delete API'
  })
}


  module.exports={
    getUsuarios,
    patchUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios}