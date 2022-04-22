const http = require('http')

const url = {
     
}

const sicaklik = sicaklik;
const basinc = basinc;
const nem = nem;

module.exports = {
   sicaklik,
   basinc,
   nem
}

const request = require('request')

const weather = (sicaklik,pressure,humidity, callback) => {

const url = 'https://api.weatherstack.com/cureent?access_key=' +sicaklik+ pressure+humudty

request( {url, json: true}, (error, {body}) => {

callback(undefined, {
    sicaklik: body.features[0],
    pressure: body.features[0],
    humidity:body.features[0]
})

})
}

module.exports = weather

