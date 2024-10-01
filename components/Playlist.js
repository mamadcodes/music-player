import React from 'react';

const Playlist = ({ songs, setCurrentSong }) => {
  return (
    <div className="p-4">
      {songs.map((song, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 border-b border-gray-400 cursor-pointer"
          onClick={() => setCurrentSong(song)}
        >
          <div>
            <p className="font-bold text-base text-green-400">{song.title}</p>
            <p className="text-sm text-gray-100">{song.artist}</p>
          </div>
          <p className="text-sm text-gray-200">{song.duration} secs</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
