const Player = require('../models/players.model');
const bcrypt = require('bcrypt');

  app.get('/players', async (req, res) => {
    const players = await Player.find();
    res.json(players);
  });
  
  app.post('/players', async (req, res) => {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.json(newPlayer);
  }


);