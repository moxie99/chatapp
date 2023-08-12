import Avatar from '@/components/common/Avatar';
import Input from '@/components/common/Input';
import { useStateProvider } from '@/context/StateContext';
import Image from 'next/image';
import React, { useState } from 'react';

function onboarding() {
  const [{ userInfo }] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || '');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('/default_avatar.png');

  const validateDetails = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(userInfo.email)) {
      alert('email not accepted');
      return false;
    }
    if (name.length < 3) {
      alert('name not acceptable');
      return false;
    }
    return true;
  };

  const onboardUserHandler = async () => {
    if (validateDetails()) {
      const email = userInfo.email;

      try {
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <div className='bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-2'>
        <Image src='/whatsapp.gif' alt='whatsapp' height={300} width={300} />
        <span className='text-6xl'>Whatsaap</span>
      </div>
      <h2 className='text-2xl'>Create your profile</h2>

      <div className='flex gap-6 mt-6'>
        <div className='flex flex-col items-center justify-center mt-5 gap-6'>
          <Input name='Display Name' state={name} setState={setName} label />
          <Input name='About' state={about} setState={setAbout} label />
          <div className='flex items-center justify-center'>
            <button
              className='flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg'
              onClick={onboardUserHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type='xl' image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
