const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {type: String},
    position: {type: String},
    number: {type: Number}
    },
    {
        collection: players
    }
);

const Player = mongoose.model('players', playerSchema);
module.exports = Player;