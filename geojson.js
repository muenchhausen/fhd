var path = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                      12.149205207824707,
                      48.273748252908256
                    ],
                    [
                      12.149470746517181,
                      48.273371573426196
                    ],
                    [
                      12.149564623832703,
                      48.27324303761204
                    ],
                    [
                      12.149993777275085,
                      48.27303952191168
                    ],
                    [
                      12.15085744857788,
                      48.272487883173916
                    ],
                    [
                      12.149958908557892,
                      48.27201300492749
                    ],
                    [
                      12.149052321910858,
                      48.272786018765274
                    ],
                    [
                      12.148261070251465,
                      48.27245753394431
                    ]
                  ]
            },
            "properties": {
                "popupContent": "mögliche Route",
                "underConstruction" : false
            },
            "id": 1
        }
    ]
};

var points = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.150634825229645,
                    48.2727663811451
                  ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Kleidung"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    12.150790393352509,
                    48.272628917592634
                  ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Spielzeug"
            },
            "id": 52
        }
    ]
};

var areas = {
    "type": "Feature",
    "properties": {
        "popupContent": "Unterer Marktplatz",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 0.5,
            fillColor: "#B0DE5C",
            fillOpacity: 0.4
        }
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
              [
                12.149545848369598,
                48.27331801687627
              ],
              [
                12.150034010410309,
                48.273044877598394
              ],
              [
                12.15023785829544,
                48.27315199121472
              ],
              [
                12.150594592094421,
                48.2732323262796
              ],
              [
                12.151066660881042,
                48.273316231656956
              ],
              [
                12.15149313211441,
                48.27336800299128
              ],
              [
                12.152912020683289,
                48.27364114054189
              ],
              [
                12.152756452560425,
                48.273907135838186
              ],
              [
                12.151683568954468,
                48.27375539372469
              ],
              [
                12.150538265705109,
                48.27357508780401
              ],
              [
                12.149768471717834,
                48.273396566463624
              ],
              [
                12.149545848369598,
                48.27331801687627
              ]
            ]
          ]
    }
};

var fhd = {
    "type": "Feature",
    "properties": {
        "popupContent": "Flüchtlingshilfe<br>Information"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
            12.149258852005005,
            48.27298775024453
          ]
    }
};
