"use client";

import { Button, Card, Label, TextInput, Toast } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log(formState);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="px-2flex flex-col items-center justify-center lg:w-2/5">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="w-full text-center text-3xl font-bold">Sign up</h1>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              shadow
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              shadow
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              placeholder="Enter your password"
              type="password"
              required
              shadow
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Password" />
            </div>
            <TextInput
              id="confirmPassword"
              placeholder="Enter your password again"
              type="password"
              required
              shadow
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Sign Up</Button>
          <div className="w-full text-center items-center justify-center flex flex-row gap-1">
            <p>Already have an account? </p>
            <Link href="login" className="text-primary">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
