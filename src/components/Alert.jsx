import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-neon_blue-300'
        } p-2 text-white leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-neon_green-500'
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === 'danger' ? 'Błąd' : 'Sukces'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
