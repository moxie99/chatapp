import React, { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
function CapturePhoto({ hide, setImage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    };
    startCamera();
    return () => {
      stream?.getTracks()?.forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL('image/jpeg'));
    hide(false);
  };
  return (
    <div className='absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg flex items-center justify-center pt-2'>
      <div className='flex flex-col gap-4 w-full items-center justify-center'>
        <div
          onClick={() => hide(false)}
          className='pt-2 pr-2 cursor-pointer flex items-end justify-end'
        >
          <IoClose className='cursor-pointer h-10 w-10' />
        </div>
        <div className='flex justify-center'>
          <video id='video' width='400' autoPlay ref={videoRef}></video>
        </div>
        <button
          className='rounded-full h-16 w-16 bg-white cursor-pointer border-8 mb-10 p-2 border-teal-200'
          onClick={capturePhoto}
        ></button>
      </div>
    </div>
  );
}

export default CapturePhoto;
