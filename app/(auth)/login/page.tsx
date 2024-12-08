"use client";

import { request } from "@/utils/request";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  email: "",
  password: "",
};

function Login() {
  const [formState, setFormState] = useState(initialForm);

  const router = useRouter();

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const login = async ({ email, password }: any) => {
    try {
      const res = await request.post("/users/login", {
        email,
        password,
      });
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful");

      if (user.role === "Guest") {
        router.push("/guestDashboard");
      } else if (user.role === "Host") {
        router.push("/hostDashboard");
      }
      
    } catch (error: any) {
      toast.error(error.response?.data || error.message);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formState);
    login(formState);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="px-2flex flex-col items-center justify-center lg:w-2/5">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="w-full text-center text-2xl font-bold lg:text-4xl">
            Login
          </h1>
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
          <Button type="submit">Login</Button>
          <div className="flex w-full flex-row items-center justify-center gap-1 text-center">
            <p>Dont't have an account? </p>
            <Link href="signup" className="text-primary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
