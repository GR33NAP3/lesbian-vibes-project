const mongoose = require("mongoose");

const matchesSchema = new mongoose.Schema({
  matchId: {
    type: Number,
    primaryKey: true,
    allowNull: false,
  },
  primary_match: Number,
  secondary_match: Number,
});

module.exports = mongoose.model("Matches", matchesSchema);
