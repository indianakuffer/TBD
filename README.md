## Zenith

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b1cae77-5871-431c-afa1-728306751c9f/deploy-status)](https://app.netlify.com/sites/indianakuffer-zenith/deploys)

Zenith is a web experience that calculates the user's distance from the International Space Station (ISS). After loading, the user is presented with a long scroll experience peppered with facts about the ISS, space, and the distance they've 'travelled' until they reach the ISS. The necessary scroll distance is based on how far the user is from the ISS.

## MVP APIS
Zenith's MVP will make use of two APIs: <del>[Open Notify's ISS Tracker](http://open-notify.org/Open-Notify-API/ISS-Location-Now/)</del> [Where the ISS At's ISS Tracker](https://wheretheiss.at/) to retrieve the current location of the ISS and [Open Cage Data's Geocoding API](https://opencagedata.com/api) to retrieve longitude and latitude coordinates based on the user's submitted location. Snippets below:

### Open Notify ISS Location

```JS
useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      console.log(response)
    }
    fetchData()
  }, [])
```

<details> <summary>Show JSON snippet</summary>
<p>

```JSON
{
    "name": "iss",
    "id": 25544,
    "latitude": 49.243967020411,
    "longitude": 162.22964201678,
    "altitude": 422.27563355766,
    "velocity": 27593.733535534,
    "visibility": "daylight",
    "footprint": 4519.022790061,
    "timestamp": 1593708999,
    "daynum": 2459033.2060069,
    "solar_lat": 22.959031741879,
    "solar_lon": 286.89479450137,
    "units": "kilometers"
}
```

</p>
</details>

### Open Cage Data Geocoding

```JS
useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${'20 W 34th St New York, NY 10001'}`)
      console.log(response)
    }
    fetchData()
  }, [])
  ```

<details> <summary>Show JSON snippet</summary>
<p>

```JSON
{
    "documentation": "https://opencagedata.com/api",
    "licenses": [
        {
            "name": "see attribution guide",
            "url": "https://opencagedata.com/credits"
        }
    ],
    "rate": {
        "limit": 2500,
        "remaining": 2499,
        "reset": 1593302400
    },
    "results": [
        {
            "annotations": {
                "DMS": {
                    "lat": "40° 54' 0.58932'' N",
                    "lng": "73° 6' 1.11852'' W"
                },
                "FIPS": {
                    "county": "36103",
                    "state": "36"
                },
                "MGRS": "18TXL6001129411",
                "Maidenhead": "FN30kv76xa",
                "Mercator": {
                    "x": -8137489.366,
                    "y": 4969644.175
                },
                "OSM": {
                    "edit_url": "https://www.openstreetmap.org/edit?way=20211382#map=16/40.90016/-73.10031",
                    "note_url": "https://www.openstreetmap.org/note/new#map=16/40.90016/-73.10031&layers=N",
                    "url": "https://www.openstreetmap.org/?mlat=40.90016&mlon=-73.10031#map=16/40.90016/-73.10031"
                },
                "UN_M49": {
                    "regions": {
                        "AMERICAS": "019",
                        "NORTHERN_AMERICA": "021",
                        "US": "840",
                        "WORLD": "001"
                    },
                    "statistical_groupings": [
                        "MEDC"
                    ]
                },
                "callingcode": 1,
                "currency": {
                    "alternate_symbols": [
                        "US$"
                    ],
                    "decimal_mark": ".",
                    "disambiguate_symbol": "US$",
                    "html_entity": "$",
                    "iso_code": "USD",
                    "iso_numeric": "840",
                    "name": "United States Dollar",
                    "smallest_denomination": 1,
                    "subunit": "Cent",
                    "subunit_to_unit": 100,
                    "symbol": "$",
                    "symbol_first": 1,
                    "thousands_separator": ","
                },
                "flag": "🇺🇸",
                "geohash": "drk08t9uxr1ev3brwp98",
                "qibla": 59.08,
                "roadinfo": {
                    "drive_on": "right",
                    "road": "34th Street",
                    "speed_in": "mph"
                },
                "sun": {
                    "rise": {
                        "apparent": 1593249840,
                        "astronomical": 1593242280,
                        "civil": 1593247860,
                        "nautical": 1593245280
                    },
                    "set": {
                        "apparent": 1593217620,
                        "astronomical": 1593225180,
                        "civil": 1593219600,
                        "nautical": 1593222180
                    }
                },
                "timezone": {
                    "name": "America/New_York",
                    "now_in_dst": 1,
                    "offset_sec": -14400,
                    "offset_string": "-0400",
                    "short_name": "EDT"
                },
                "what3words": {
                    "words": "aboard.recruiters.occurs"
                }
            },
            "bounds": {
                "northeast": {
                    "lat": 40.9002137,
                    "lng": -73.1002607
                },
                "southwest": {
                    "lat": 40.9001137,
                    "lng": -73.1003607
                }
            },
            "components": {
                "ISO_3166-1_alpha-2": "US",
                "ISO_3166-1_alpha-3": "USA",
                "_category": "building",
                "_type": "building",
                "continent": "North America",
                "country": "United States of America",
                "country_code": "us",
                "county": "Suffolk County",
                "house_number": "20",
                "locality": "Stony Brook",
                "postcode": "11790",
                "road": "34th Street",
                "state": "New York",
                "state_code": "NY"
            },
            "confidence": 10,
            "formatted": "20 34th Street, Stony Brook, NY 11790, United States of America",
            "geometry": {
                "lat": 40.9001637,
                "lng": -73.1003107
            }
        },
    ],
    "status": {
        "code": 200,
        "message": "OK"
    },
    "stay_informed": {
        "blog": "https://blog.opencagedata.com",
        "twitter": "https://twitter.com/OpenCage"
    },
    "thanks": "For using an OpenCage API",
    "timestamp": {
        "created_http": "Sat, 27 Jun 2020 16:26:39 GMT",
        "created_unix": 1593275199
    },
    "total_results": 7
}
```

</p>
</details>

## MVP
- Form accepting and saving user's location to state.
- API call to Open Cage Data returning user's longitude and latitude, saving to state.
- API call to Open Notify to retrieve ISS longitude and latitude.
- Function calculating user's distance to ISS.
- Set the height of the page in relation to the user's distance to ISS.
- Populate space with facts, images, etc from a custom data set.
- Distance counter while scrolling.
- Mobile styling.

## Wireframes
- [Wireframes on wireframe.cc](https://wireframe.cc/pro/pp/e6d393782354279)
- [Wireframe album on imgur](https://imgur.com/a/wEXlDxo)

## MVP Component Heirarchy

- App (state)
  - Nav (state)
    - Links
    - Footer
  - Main
    - Home (state)
      - Title
      - Searchbar (state)
      - Prompt
      - Scrollbar
        - Distance
      - Fact
      - End
    - About
      - Title


## MVP Timeframes
How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

| Task | Expected Hours | Logged Hours |
| -- | -- | -- |
|App Setup|0.5|0.25|
|API Hookup|1|0.5|
|Build Components & Component Logic|7|5.25|
|Function to Calc Distance|3|3|
|Scrolling Logic|4|3.5|
|Information Reasearch / Writing|7|7.5|
|Styling (Mobile Friendly)|7|9|
|Total|29.5|30|

## Post-MVP
- Distance tracker
- Background dynamically changes with scroll, parallax
- Styled components
- Custom art
- Audio
- Imperial measurement option
- Restart loop
- 'Complex' scrollbar, number and line moves up screen in relation to scroll percentage

## SWOT Analysis
Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?

- Strengths
  - Confident in React
  - Tight MVP
  - Ample time to reach MVP, or work on Post-MVP features
  - APIs seem stable and trustworthy
  - Site aligns with personal interests
- Weaknesses
  - No experience with scroll-based sites, might be finicky to work with
  - Possibly over-ambitious
  - Using styled-components for the first time
- Opportunites
  - Using styled-components for the first time
  - Great showcase for React, React Router, styled-components, and general ability
  - Visual-focused design looks good
- Threats
  - Commonly used API potentially seen as uninspired

## Code Snippet

> Below is how I calculate the ISS's distance from the user's coordinates

<details><summary>Show snippet</summary>
<p>

```JS
function coordToXYZ(lat, lon, rad) {
  let result = []

  // convert lat and lon to radians
  const phi = (lon + 90) / 180 * Math.PI
  const theta = (90 - lat) / 180 * Math.PI

  // calculate position on unit circle
  result.push(Math.sin(theta) * Math.sin(phi))
  result.push(Math.cos(theta))
  result.push(Math.sin(theta) * Math.cos(phi))

  // multiply by radius
  result = result.map(num => num * rad)

  return result
}

function distance(coord1, coord2) {
  // declare coordinate variables from arrays
  const [x1, y1, z1] = coord1
  const [x2, y2, z2] = coord2

  // euclidean distance formula w/o sqrt
  const base = (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2

  return Math.sqrt(base)
}

function getAngleSSS(a, b, c) {
  let base = ((a ** 2) + (c ** 2) - (b ** 2)) / (2 * a * c)

  // answer in radians
  let radian = Math.acos(base)

  // convert back to degrees before returning
  return radian * 180 / Math.PI
}

function getSideSAS(s1, a, s2) {
  // convert degrees to radians before beginning
  let radian = a / 180 * Math.PI
  let base = (s1 ** 2) + (s2 ** 2) - (2 * s1 * s2 * Math.cos(radian))

  return Math.sqrt(base)
}

export default function distanceToISS(lon1, lat1, lon2, lat2) {
  // distances in meters
  const earthRadius = 6371000
  const issHeight = 408000

  // convert coordinates from spherical to cartesian
  const cartesian1 = coordToXYZ(lon1, lat1, earthRadius)
  const cartesian2 = coordToXYZ(lon2, lat2, earthRadius)

  // calculate direct distance between coordinates
  const coordDistance = distance(cartesian1, cartesian2)

  // solve for angle between direct line and ISS
  const insideAngle = getAngleSSS(coordDistance, earthRadius, earthRadius)
  const outsideAngle = 180 - insideAngle

  // use angle to calculate distance, return in km
  return getSideSAS(coordDistance, outsideAngle, issHeight) / 1000
}
```
</p>
</details>