import React from 'react';

const SongCard = ({ song }) => {
  return (
    <article className="border p-4 rounded-lg shadow hover:shadow-md transition sm:flex ">
      <img
        src={song.imgsrc}
        alt={song.titulo}
        className="w-full h-48 object-cover rounded-3xl mb-2 p-4"
      />
      <div>
        <h2 className="text-lg font-semibold">{song.titulo}</h2>
        <p className="text-xs text-gray-600">{song.desc}</p>
      </div>
    </article>
  );
};

export default SongCard;
