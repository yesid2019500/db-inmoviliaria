const mongoose = require('mongoose')

const HomeSchema = mongoose.Schema({
    state:{type:String },
    price: {type:String},
    url:{type:String },
    photo:{type: String},   
    address: {type:String},
    city: {type:String},
    state: {type:String},
    postalCode: {type:String},
    subTypeText: {type:String},
    naturalPrice: {type:String},
    property_area: {type:String},
    property_bathsFull: {type:String},
    property_bedrooms: {type:String},
    property_roof: {type:String},
    property_cooling: {type:String},
    property_heating: {type:String},
    property_fireplaces: {type:String},
    property_flooring: {type:String},
    property_type: {type:String},
    property_yearBuilt: {type:String},
    property_subdivision: {type:String},
    property_parking_description: {type:String},
    geo_lng: {type:String},
    geo_lat: {type:String},
    geo_county: {type:String},
    mls_statusText: {type:String },
    list_date: {type:String },
    modified_date: {type:String},
    estimated_month_fee: {type:String},
})


module.exports = mongoose.model('Home', HomeSchema )