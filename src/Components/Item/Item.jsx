import React from 'react';

const Item = (props) => {
  return (
    <div className="flex rounded-2xl shadow-lg w-96 gap-2 bg-white hover:scale-105 transition-all">
      <div className="flex flex-col p-5 gap-3">
        <img src={props.image} alt={props.name} className="rounded-xl" />
        <p className="text-slate-700 text-2xl font-semibold text-center">{props.name}</p>
        <p className="text-slate-500 text-lg text-center">"{props.description}"</p>
      </div>
    </div>
  );
};

export default Item;
