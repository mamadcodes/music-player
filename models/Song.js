import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
  duration: Number,
});

export default mongoose.models.Song || mongoose.model('Song', SongSchema);
