const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mock server info data
const serverInfo = {
    "settings": [
      {
        "id": 1,
        "first": "REGION",
        "sec": "EUROPE - DU"
      },
      {
        "id": 2,
        "first": "PUNKBUSTER",
        "sec": "ON"
      },
      {
        "id": 3,
        "first": "fairfight",
        "sec": "ON"
      },
      {
        "id": 4,
        "first": "PASSWORD",
        "sec": "OFF"
      },
      {
        "id": 5,
        "first": "PRESET",
        "sec": "NORMAL"
      }
    ],
    "advanced": [
      {
        "id": 1,
        "first": "MINIMAP",
        "sec": "ON"
      },
      {
        "id": 2,
        "first": "ONLY SQUAD LEADER SPAWN",
        "sec": "OFF"
      },
      {
        "id": 3,
        "first": "VEHICLES",
        "sec": "ON"
      },
      {
        "id": 4,
        "first": "TEAM BALANCE",
        "sec": "ON"
      },
      {
        "id": 5,
        "first": "MINIMAP SPOTTING",
        "sec": "ON"
      },
      {
        "id": 6,
        "first": "HUD",
        "sec": "ON"
      },
      {
        "id": 7,
        "first": "3P VEHICLE CAM",
        "sec": "ON"
      },
      {
        "id": 8,
        "first": "REGENERATIVE HEALTH",
        "sec": "ON"
      },
      {
        "id": 9,
        "first": "KILL CAM",
        "sec": "ON"
      },
      {
        "id": 10,
        "first": "FRIENDLY FIRE",
        "sec": "OFF"
      },
      {
        "id": 11,
        "first": "3D SPOTTING",
        "sec": "ON"
      },
      {
        "id": 12,
        "first": "ENEMY NAME TAGS",
        "sec": "ON"
      }
    ],
    "rules": [
      {
        "id": 1,
        "first": "TICKETS",
        "sec": "400"
      },
      {
        "id": 2,
        "first": "VEHICLE SPAWN DELAY",
        "sec": "25"
      },
      {
        "id": 3,
        "first": "BULLET DAMAGE",
        "sec": "100"
      },
      {
        "id": 4,
        "first": "KICK AFTER TEAM KILLS",
        "sec": "5"
      },
      {
        "id": 5,
        "first": "PLAYER HEALTH",
        "sec": "100"
      },
      {
        "id": 6,
        "first": "PLAYER RESPAWN TIME",
        "sec": "100"
      },
      {
        "id": 7,
        "first": "KICK AFTER IDLE",
        "sec": "300"
      },
      {
        "id": 8,
        "first": "BAN AFTER KICKS",
        "sec": "3"
      }
    ]
};  

const StatInfo = {
    "data" : [
        {
            title:"players",
            value: 60
        },
        {
            title:"ping",
            value: 104
        },{
            title:"tickrate",
            value: 60
        }
    ]
};

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

app.get('/api/stat-info', (req, res) => {
    res.json(StatInfo);
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
