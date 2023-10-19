const settings = {
  "name": "sample-mag",
  "state": {
    "frontity": {
      "url": "https://samplemaghk.com",
      "title": "Sample Magazine",
      "description": "a reading and online shopping platform for Sample Magazine"
    }
  },
  "packages": [
    {
      "name": "simple-sample-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://samplemaghk.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
