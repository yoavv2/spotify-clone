'use client';

import React from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return <dialog>ModelProvider</dialog>;
};

export default ModalProvider;
