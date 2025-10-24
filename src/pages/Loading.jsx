import React from 'react';
import bullImage from '../../public/bull.png';

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#E4D7C9]">
      <img
        src={bullImage}
        alt="Bull"
        className="h-auto w-full max-w-[312px] max-h-[312px]"
      />
    </div>
  );
}

export default Loading;