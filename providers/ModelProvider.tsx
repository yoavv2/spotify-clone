'use client';

import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import React from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
