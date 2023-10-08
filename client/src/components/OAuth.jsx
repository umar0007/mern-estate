import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import React from 'react';
import { useDispatch, useNavigate } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {

    const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const navigate = useNavigate();
            const result = await signInWithPopup(auth, provider);
        

            const res = await fetch ('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photo })
            });

            const data = res.json();
            dispatch(signInSuccess(data));  
            navigate('/');

        } catch (error) {
            console.log('Could not signIn with google ', error);
        }
    }
    
  return (
    <button onClick={handleGoogleClick} type ='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'> Continue With Google</button>
  )
}
