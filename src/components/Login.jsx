import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  console.log("Login Page Invoked");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const loginHandler = async (data) => {
    setError("");
    console.log("data passed while login", data);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
        console.log("Login Successful");
      }
    } catch (error) {
      setError(error.message || "Login failed, please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center w-full px-4 py-6 sm:py-10">
      <div className="w-full max-w-md bg-gray-100 rounded-xl p-6 sm:p-10 border border-t-2 border-blue-300 shadow-xl">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-24">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-sm sm:text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-600 transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-600 mt-6 text-center text-sm">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(loginHandler)} className="mt-6 sm:mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your email here"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
