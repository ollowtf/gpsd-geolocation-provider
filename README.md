# gpsd-geolocation-provider

App get coordinates from gpsd and emulates geolocation API. Developed due to issues of the native gpsd support in Firefox.


## Configuration

Open app.js and set

API_PORT

GPSD_HOST

GPSD_PORT

## Usage

### Firefox

Open __about:config__

Set value of __geo.provider.network.url__ to

```
http://localhost:7000/api/geolocate
```

