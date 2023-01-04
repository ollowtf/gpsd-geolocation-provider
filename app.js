const express = require('express')
const app = express()
const router = express.Router()
const apiGeolocation = require('./api.js')
var gpsd = require('node-gpsd');
const API_PORT = 7000
const GPSD_HOST = 'localhost'
const GPSD_PORT = 2947

app.coords = {
    lat: 0,
    lon: 0
}

apiGeolocation.init(app)

// API Routes
router.post('/api/geolocate', apiGeolocation.geolocate)

// Application Routes
router.get('/', apiGeolocation.help)

// ----

app.use('/', router)


var listener = new gpsd.Listener({
    port: GPSD_PORT,
    hostname: GPSD_HOST,
    logger:  {
        info: function() {
        },
        warn: console.warn,
        error: console.error
    },
    parse: true
});

listener.on('TPV', function (tpv) {
    app.coords.lat = tpv.lat
    app.coords.lon = tpv.lon
})

listener.connect(function () {
    console.log('GPSD connected');
    listener.watch()
    app.listen(API_PORT, () => {
        console.log(`API is running on PORT ${API_PORT}`)
    })
})

module.exports = app