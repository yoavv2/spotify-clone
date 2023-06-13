'use client';

import { Song } from '@/types';
import React from 'react';
import PageContent from './PageContent';
import MediaItem from './MediaItem';

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className='flex flex-col w-full px-6 gap-y-2 text-neutral-400'>
        No songs found.
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full px-6 gap-y-2'>
      {songs.map((song) => (
        <div key={song.id} className='flex items-center w-full gap-x-4'>
          <div className='flex-1'>
            <MediaItem data={song} onClick={() => {}} />
          </div>
          {/* TODO: Add Like Button Here */}
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
