import React from 'react';

const SongCard = ({ song }) => {
  return (
    <article className="p-4 rounded-lg shadow hover:shadow-md sm:flex animate-fade-up animate-ease-linear">
      <img
        src={song.imgsrc}
        alt={song.titulo}
        className="w-full h-48 object-cover rounded-3xl mb-2 p-4"
        loading="lazy"
      />
      <div className='mt-2'>
        <h2 className="text-lg font-semibold">{song.titulo}</h2>
        <p className="text-xs text-shadow-neutral-50">{song.desc}</p>
      </div>
    </article>
  );
};

export default SongCard;
