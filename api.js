var app;

exports.init = (_app) => {
    app = _app
}

exports.geolocate = (req, res) => {

    var lat=app.coords.lat
    var lon=app.coords.lon

    console.log(app.coords)

    var coords = {
        "location": {
          "lat": lat,
          "lng": lon
        },
        "accuracy": 5
    }
      
    res.send(coords)
}

exports.help = (req, res) => {
    res.send('Use POST /api/geolocate')
}