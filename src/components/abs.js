import React from 'react';
import { FaHeart, FaRing } from 'react-icons/fa';

const Abc = () => {
  const imageUrl =
    'https://png.pngtree.com/png-clipart/20230208/original/pngtree-love-flower-red-rose-picture-image_5427978.png';

  return (
    <div className="container text-center">
      <h1 className="title text-5xl font-bold text-pink-600">
        You are the most beautiful girl,{' '}
        <span className="font-extrabold text-5xl text-purple-700">Ankita</span>
      </h1>
      <p className="subtitle text-xl text-gray-700 mt-4">
        And this web page is dedicated to you!
      </p>
      <div className="flex justify-center mt-8">
        <FaHeart className="heart-icon text-red-500 text-7xl mx-4" />
        <FaRing className="ring-icon text-pink-500 text-7xl mx-4" />
      </div>
      <img src={imageUrl} alt="Beautiful flower" className="mt-8 mx-auto w-1/2" />
    </div>
  );
};

export default Abc;
