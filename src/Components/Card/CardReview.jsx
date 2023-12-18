import { Card } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

export const CardReview = (props) => {
  return (
    <Card className="w-80">
      <div className="flex items-center justify-between gap-2">
        <h5 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
          {props.name}
        </h5>
        <div className="flex items-center justify-center gap-1">
          <FaStar size={20} color="#FFD233" />
          <span className="font-semibold text-slate-700 text-lg">{props.rating}</span>
        </div>
      </div>
      <p className="font-normal text-slate-500">{props.comment}</p>
    </Card>
  );
};
