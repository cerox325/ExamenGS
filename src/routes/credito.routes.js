const express = require('express')
const router = express.Router()

const Credito = require('../models/creditos');


router.get('/', async (req,res) => {
    const credito = await Credito.find()
    res.json(credito)
})

router.get('/:id', async (req,res)=> {
    const credito = await Credito.findById(req.params.id)
    res.json(credito)
})


router.post('/', async (req,res)=> {
    const {creditoNumber,abono} = req.body
    const credito = new Credito({creditoNumber,abono})
    await credito.save()
    res.json('Succes 200')
})


router.put('/:id', async (req,res)=> {
    const {creditoNumber,abono} = req.body
    const newCredito = {creditoNumber,abono}
    await Credito.findByIdAndUpdate(req.params.id, newCredito)
    res.json('Succes 200')
})


router.delete('/:id', async (req,res)=> {
    await Credito.findByIdAndDelete(req.params.id)
    res.json('Succes 200')
})

module.exports = router