module.exports = {
    "packagerConfig": {},
    "makers": [
      {
        "name": "@electron-forge/maker-squirrel",
        "config": {
          "name": "KanbanTracking",
          "exe" : "KanbanTracking"
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