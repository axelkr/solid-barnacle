module.exports = {
    "packagerConfig": ["src/","documentation/","deployment","testResults/",".eslintrc.json",".browserlistrc",".gitignore","karma.conf.js","angular.json"],
    "makers": [
      {
        "name": "@electron-forge/maker-squirrel",
        "config": {
          "name": "KanbanTracking"
        }
      },
      {
        "name": "@electron-forge/maker-deb",
        "platforms": [
          "linux"
        ],
        "config": {}
      }
    ]
  }