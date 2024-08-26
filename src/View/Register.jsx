import React, { useState } from 'react';
import * as Yup from "yup"
import { validationSchema } from '../Utils/RegisterValidation';
import adminImg from '../assets/images/adminbg1.jpg'
import { useFormik } from 'formik';
import FormInput from '../Components/Inputs/FormInput';
import Button from '../Components/Button/Button';

function Register ({onToggle}) {
//formik logic
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword:"",
      telephone:""
    },
    //validation schema
    validationSchema,

    //handle submit
    onSubmit: (values) => {
      console.log(values);
    }
  })
console.log(Formik.errors)
  return (
    <>
    <div className="flex h-screen w-full items-center justify-center">
        <div className="flex h-[90%] w-[80%] items-center justify-center ">
          <div className="shadow-2xl shadow-red-200 rounded-lg w-[50%] h-full flex flex-col justify-center">
           
            <h2 className="text-center text-xl font-bold text-[#54C2B5]">
              CREATE AN ACCOUNT
            </h2>

            <div className="w-[80%] justify-center content-center ml-28">
              <form 
              onSubmit={Formik.handleSubmit}
              action="#" method="POST" className="space-y-6 px-4">
              <div>
                <FormInput
                  id="name"
                  name="name"
                  value={Formik.values.name}
                  onChange={Formik.handleChange}
                  type="text"
                  label="Name"
                  autoComplete="name"
                  />
                    {Formik.errors.name && <span className="text-[#CF3304] text-sm ">{Formik.errors.name}</span>}
                </div>
                <div>
                  <FormInput
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  label = "Email"
                  type = "Email"
                  name = "email"
                  autoComplete = "email"
                  />
                   {Formik.errors.email && <span className="text-[#CF3304] text-sm">{Formik.errors.email}</span>}

                </div>
                <div>
                  <FormInput
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    name="password"
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                    />
                    {Formik.errors.password && <span className="text-[#CF3304] text-sm">{Formik.errors.password}</span>}

                </div>
                <div>
                  <FormInput
                   value={Formik.values.confirmpassword}
                   onChange={Formik.handleChange}
                    id="confirm-password"
                    name="confirmpassword"
                    type="password"
                    label="Confirm Password"
                    autoComplete="current-password"
                    />
                    {Formik.errors.confirmpassword && <span className="text-[#CF3304] text-sm">{Formik.errors.confirmpassword}</span>}

                </div>
                <div>
                  <FormInput
                   value={Formik.values.telephone}
                   onChange={Formik.handleChange}
                    id="telephone"
                    name="telephone"
                    type="telephone"
                    label="Telephone"
                    autoComplete="telephone"
                    />
                    {Formik.errors.telephone && <span className="text-[#CF3304] text-sm">{Formik.errors.telephone}</span>}

                </div>
                <Button name="Sign Up"/>
              </form>
            </div>
            <p className="mt-4 mr-15  text-center text-sm text-gray-500">
                Already a member?{' '}
                <a href="#" className="font-semibold leading-6 text-[#54C2B5] hover:text-[#CF3304]"
                onClick={onToggle}
                >
                  Sign In Here
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
  )
}

export default Register