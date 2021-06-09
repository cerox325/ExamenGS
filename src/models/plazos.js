const moongose = require('mongoose')
const {Schema} = moongose

const PlazosSchema = new Schema({
    tazas: {type:Number, requiered: true},
    plazos_semanales: {type:Number, requiered: true}
})

module.exports = moongose.model('Plazos', PlazosSchema)