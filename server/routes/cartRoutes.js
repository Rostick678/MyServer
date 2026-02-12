const Router = require('express')
const router = new Router()


const cart = [{id: 1, name: "iPhone", price: 100000},{id: 1, name: "Android", price: 50000}]
let newId = 3

router.get('/',(req,res)=>{
      return res.send(cart)
})
router.get('/:id', (req, res)=>{
    const {id} = req.params
    const chooseOne = cart.filter(item => Number(id) === item.id)
     return res.send(chooseOne)
})
router.post('/',(req,res)=>{
    const {name, price} = req.body
    const newProduct = {
        id: newId++,
        name:name,
        price:price
    }
    cart.push(newProduct)
    return res.send(newProduct)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    const candidate = cart.find(item => item.id === Number(id))
    cart.splice(id-1, 1)
    return res.send(candidate)
    
})
router.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name, price} = req.body
    const candidate = cart.find(item => item.id === Number(id))
    candidate.name = name
    candidate.price = price
    return res.send(candidate)
})

module.exports = router