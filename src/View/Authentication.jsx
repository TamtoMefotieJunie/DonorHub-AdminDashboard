import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import adminImg from "../assets/images/adminbg1.jpg";
import logo from "../assets/images/logo3.png";
import Button from "../Components/Button/Button";
import FormInput from "../Components/Inputs/FormInput";
import { apiClient } from "../Utils";
import { useAuth } from "../Utils/AuthProvider";
import ErrorMessage from "../Components/custom/ErrorMessage";
import Swal from "sweetalert2";

function Authentication({ onToggle }) {
  const [isSignInActive, setIsSignInActive] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Your Email address is required"),
      password: Yup.string().required("Your Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await apiClient.post("/user/login", values);
        console.log(response.data);
        login(response.data);
        navigate("/dashboard");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Sorry, Invalid email or password",
          icon: "error",
        });
      }
    },
  });

  return (
    <div className="flex h-screen w-full items-center justify-center px-2 lg:px-6">
      <div className="shadow shadow-red-200 rounded-lg overflow-hidden flex flex-col lg:flex-row h-[520px] w-full lg:w-[80%]">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
          {/* Logo */}
          <div className="flex flex-row self-center justify-center items-center space-x-3 mb-2">
            <h2 className="text-3xl text-[#CF3304] flex-1 font-bold">
              DONORHUB
            </h2>
          </div>
          <h2 className="text-center text-xl font-bold tracking-tight text-[#54C2B5] mb-5">
            Sign In to your account
          </h2>

          <div className="justify-center content-center px-2 lg:px-12">
            <form onSubmit={formik.handleSubmit} className="space-y-5 px-4">
              <div>
                <FormInput
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
                {formik.errors.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#54C2B5] hover:text-[#CF3304]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <FormInput
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    autoComplete="current-password"
                    className="block w-[80%] rounded-md py-1.5 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                  />
                  {formik.errors.password && (
                    <ErrorMessage message={formik.errors.password} />
                  )}
                </div>
              </div>

              <Button name="Sign In" />
            </form>
          </div>
          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-[#54C2B5] hover:text-[#CF3304]"
              onClick={onToggle}
            >
              Sign Up Here
            </a>
          </p>
        </div>
        <div className="w-1/2 hidden lg:flex rounded-l-3xl overflow-hidden h-full justify-center items-center relative">
          <div className="absolute w-full h-full bg-black bg-opacity-55"></div>
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="w-52">
              <img alt="Your Company" src={logo} className="rounded-full" />
            </div>
          </div>
          <img src={adminImg} className="w-full h-full" alt="Login image" />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
