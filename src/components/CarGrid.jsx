import React from 'react';
import CatCard from './CatCard';

const CatGrid = ({ cats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatGrid;
