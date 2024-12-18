import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="col-span-full text-center py-10">
      <p className="text-lg font-semibold">Loading products...</p>
      <div className="mt-4 flex justify-center items-center">
        <div className="w-7 h-7 border-4 border-green2 border-t-4 border-t-background rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
