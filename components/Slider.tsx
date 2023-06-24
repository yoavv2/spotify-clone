'use client';

import React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';

interface SlideProps {
  value?: number;
  onChange?: (volume: number) => void;
}
const Slider: React.FC<SlideProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className='relative flex items-center w-full h-10 select-none touch-none'
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      step={0.1}
      aria-label='Volume'
    >
      <RadixSlider.Track
        className='
        relative 
        bg-neutral-600 
          grow 
          rounded-full 
          h-[3px]'
      >
        <RadixSlider.Range className='absolute h-full bg-white rounded-full' />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className='block w-3 h-3 hover:w-5 hover:h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-gray-900'
        aria-label='Volume'
      />
    </RadixSlider.Root>
  );
};

export default Slider;
