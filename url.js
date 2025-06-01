// urlModel.js
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  url: {
    required: true,
    type: String,
  },
  shorturl: {
    type: String,
    required: true,
  },
});

const urldiscord = mongoose.model('discordurl', urlSchema);

export default urldiscord;