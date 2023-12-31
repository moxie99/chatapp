import { useStateProvider } from '@/context/StateContext';
import { reducerCases } from '@/context/constants';
import { CHECK_USER_ROUTE } from '@/utils/ApiRoutes';
import { firebaseAuth } from '@/utils/FirebaseConfig';
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
function login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { accessToken, displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);

    console.log('user found', { accessToken, name, email, profileImage });

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log('data found', { data });
        if (!data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              accessToken,
              profileImage,
              status: '',
            },
          });
          router.push('/onboarding');
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div className='flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6'>
      <div className='flex items-center justify-center gap-2 text-white'>
        <Image src='/whatsapp.gif' alt='whatsap' height={300} width={300} />
        <span className='text-6xl'>Whatsapp</span>
      </div>
      <button
        className='flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg'
        onClick={handleLogin}
      >
        <FcGoogle className='text-3xl' />
        <span className='text-white text-2xl'>Login with Google</span>
      </button>
    </div>
  );
}

export default login;
