module.exports = {
    "packagerConfig": {},
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