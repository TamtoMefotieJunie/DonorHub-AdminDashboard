import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import adminImg from '../assets/images/adminbg1.jpg'
import logo from '../assets/images/logo5.png'
import FormInput from '../Components/Inputs/FormInput';
import Button from '../Components/Button';

function Authentication({onToggle}) {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleToggleForm = () => {
    setIsSignInActive(!isSignInActive);
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-[70%] w-[80%] items-center justify-center ">
          <div className="shadow-2xl shadow-red-200 rounded-lg w-[50%] h-full flex flex-col justify-center">
            <div className='flex flex-row relative justify-center h-[35%] items-center'>
              <img
                alt="Your Company"
                src={logo}
                className="h-full mr-10 w-[40%]"
              />
              <h2 className='text-2xl text-[#CF3304] absolute right-36 top-20 flex-1 font-bold'>DONORHUB</h2>
            </div>
            <h2 className="text-center text-xl font-bold tracking-tight text-[#54C2B5]">
              Sign In to your account
            </h2>

            <div className="w-[80%] justify-center content-center ml-28">
              <form action="#" method="POST" className="space-y-6 px-4">
                <div>
                  <FormInput
                  id="Email"
                  label = "Email"
                  type = "Email"
                  name = "label"
                  autoComplete = "email"
                  />
                </div>

                <div>
                  <div className="flex items-center w-[80%] justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-[#54C2B5] hover:text-[#CF3304]">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-[80%] rounded-md py-1.5 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                     />
                  </div>
                </div>

                <Button name="Sign In"/>
              </form>

              
            </div>
            <p className="mt-7 mr-15  text-center text-sm text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold leading-6 text-[#54C2B5] hover:text-[#CF3304]"
                onClick={onToggle}
                >
                  Sign Up Here
                </a>
              </p>
          </div>
          <div className="w-[50%] rounded-lg h-full bg-red-100 flex justify-center items-center">
            <img
            src={adminImg}
            
            className='w-full h-full rounded-lg'
            alt='login image'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
