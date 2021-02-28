module.exports = {
    "packagerConfig": {
      "icon" : "dist/assets/application_icon_heijunka",
      "ignore": ["src/","documentation/","deployment","testResults/",".gitignore"]
    },
    "makers": [
      {
        "name": "@electron-forge/maker-squirrel",
        "config": {
          "name": "Heijunka"
        }
      },
      {
        "name": "@electron-forge/maker-deb",
        "platforms": [
          "linux"
        ],
        "config": {}
      }
    ],
    "executableName": "SolidBarnacle"
  }