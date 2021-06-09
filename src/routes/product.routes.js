const express = require('express')
const router = express.Router()

const Products =  require('../models/productos')

router.get('/', async (req,res) => {
    const product = await Products.find()
    res.json(product)
})

router.get('/:id', async (req,res) => {
    const product = await Products.findById(req.params.id)
    res.json(product)
})

router.post('/', async (req, res) => {
    const {sku,nombre,description,precio} = req.body;
    const prod = new Products({sku, nombre, description, precio}) 
    await prod.save()
    res.json('Succes 200')
})

router.put('/:id', async (req, res) => {
    const {nombre,description,precio} = req.body
    const newProd = {nombre,description,precio}
    await Products.findByIdAndUpdate(req.params.id, newProd)
    res.json('Succes 200')
})

router.delete('/:id', async (req, res) => {
    await Products.findByIdAndDelete(req.params.id)
    res.json('Succes 200')
})

module.exports = router