'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Song } from '@/types';
import { useUser } from '@/hooks/useUser';
import MediaItem from './MediaItem';
import LikeButton from './likeButton';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  React.useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, router, user]);

  if (songs.length === 0) {
    return (
      <div className='flex flex-col w-full px-6 gap-y-2 text-neutral-400'>
        {' '}
        No Liked songs
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full p-6 gap-y-2'>
      {songs.map((song) => (
        <div key={song.id} className='flex items-center w-full gap-x-4'>
          <div className='flex-1'>
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
