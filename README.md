## Zenith

Zenith is a web experience that calculates the user's distance from the International Space Station (ISS). After loading, the user is presented with a long scroll experience peppered with facts about the ISS, space, and the distance they've 'travelled' until they reach the ISS. The necessary scroll distance is based on how far the user is from the ISS.

## MVP APIS
Zenith's MVP will make use of two APIs: [Open Notify's ISS Tracker](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) to retrieve the current location of the ISS and [Open Cage Data's Geocoding API](https://opencagedata.com/api) to retrieve longitude and latitude coordinates based on the user's submitted location. Snippets below:

### Open Notify ISS Location
```JSON
{
    "message": "success",
    "timestamp": 1593274627,
    "iss_position": {
        "longitude": "-129.9561",
        "latitude": "51.5549"
    }
}
```

### Open Cage Data Geocoding
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

## MVP
- Form accepting and saving user's location to state.
- API call to Open Cage Data returning user's longitude and latitude, saving to state.
- API call to Open Notify to retrieve ISS longitude and latitude.
- Function converting spherical coordinates to cartesian coordinates, then caculating the distance between the two, then between coord1 and ISS.
- Set the height of the page in relation to the user's distance to ISS
- Populate space with facts, images, etc from a custom data set

## Wireframes
Mockups of your app on desktop, tablet, and mobile.

## MVP Component Heirarchy
A visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.

## MVP Timeframes
How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

## Post-MVP
Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete. (Need some ideas? Check out the Resources section below.)

## SWOT Analysis
Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?