import getLikedSongs from '@/acctions/getLikedSongs';
import Header from '@/components/Header';
import LikedContent from '@/components/LikedContent';
import Image from 'next/image';

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();
  return (
    <div className='w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900'>
      <Header>
        <div className='mt-20'>
          <div className='flex flex-col items-center md:flex-row gap-x-5'>
            <div className='relative w-32 h-32 lg:h-44 lg:w-44'>
              <Image
                fill
                src='/images/liked.png'
                alt='PlayList'
                className='object-cover'
              />
            </div>
            <div className='flex flex-col mt-4 gap-y-2 md:mt-0'>
              <p className='hidden text-sm font-semibold md:block'>Playlist</p>
              <h1 className='text-4xl font-bold text-white sm:text-5xl lg:text-7xl'>
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
