const request = require('request')

const weather = (sicaklik,pressure,humidity, callback) => {

const url = 'https://api.weatherstack.com/cureent?access_key=' +sicaklik+ pressure+humidity

request( {url, json: true}, (error, {body}) => {

callback(undefined, {
    sicaklik: body.sicaklik,
    pressure: body.pressure,
    humidity:body.humidity
})

})
}

module.exports = weather

