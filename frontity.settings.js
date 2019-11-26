const settings = {
  "name": "fortstudio",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Fort Studio",
      "description": "Wordpress Install with React"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            // [
            //   "Nature",
            //   "/category/nature/"
            // ],
            // [
            //   "Travel",
            //   "/category/travel/"
            // ],
            // [
            //   "Japan",
            //   "/tag/japan/"
            // ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://fortstudio2019.wpengine.com/wp-json",
           "homepage": "/home-page",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
