const moongose = require('mongoose')
const {Schema} = moongose

const ProductsSchema = new Schema({
    sku : {type:Number, requiered: true},
    nombre: {type:String, requiered: true},
    description: {type:String,requiered: true},
    precio: {type:Number,requiered: true}
})

module.exports = moongose.model('Productos', ProductsSchema)