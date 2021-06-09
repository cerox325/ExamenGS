const express = require('express')
const router = express.Router()

const Plazo = require('../models/plazos');

router.get('/', async (req,res) => {
    const plazo = await Plazo.find()
    res.json(plazo)
})

router.get('/:id', async (req,res)=> {
    const plazo = await Plazo.findById(req.params.id)
    res.json(plazo)
})


router.post('/', async (req,res)=> {
    const {tazas,plazos_semanales} = req.body
    const plazo = new Plazo({tazas,plazos_semanales})
    await plazo.save()
    res.json('Succes 200')
})


router.put('/:id', async (req,res)=> {
    const {tazas,plazos_semanales} = req.body
    const newPlazo = {tazas,plazos_semanales}
    await Plazo.findByIdAndUpdate(req.params.id, newPlazo)
    res.json('Succes 200')
})


router.delete('/:id', async (req,res)=> {
    await Plazo.findByIdAndDelete(req.params.id)
    res.json('Succes 200')
})
module.exports = router