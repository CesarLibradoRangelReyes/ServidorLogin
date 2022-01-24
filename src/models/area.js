const mongoose = require('mongoose');

const AreaScheme = new mongoose.Schema(
    {
        Id_Area: {
            type: String,
            require: true
        },
        Area: {
            type: String,
            require: true
        }
    }
)
module.exports = mongoose.model('area', AreaScheme);