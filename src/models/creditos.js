const moongose = require('mongoose')
const {Schema} = moongose

const CreditosSchema = new Schema({
    creditoNumber: {type:Number, requiered:true},
    abono : {type:Number, requiered:true}
})

module.exports = moongose.model('Credito', CreditosSchema)