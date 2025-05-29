import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={song.imgsrc}
        alt={song.titulo}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{song.titulo}</h2>
      <p className="text-sm text-gray-600">{song.desc}</p>
    </div>
  );
};

export default SongCard;
