"use client";

import { request } from "@/utils/request";
import { Button, Card, Label, Select, TextInput, Toast } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  role: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formState, setFormState] = useState(initialForm);

  const router = useRouter();

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const register = async ({ role, name, email, password }: any) => {
    try {
      const res = await request.post("/users/register", {
        role,
        name,
        email: email || null,
        password,
      });
      const { user, token } = res.data;
      console.log(user, token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Registration successful");

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
    if (formState.password !== formState.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    register(formState);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="px-2flex flex-col items-center justify-center lg:w-2/5">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="w-full text-center text-2xl font-bold lg:text-4xl">
            Sign up
          </h1>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your country" />
            </div>
            <Select
              id="role"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Host</option>
              <option>Guest</option>
            </Select>
          </div>
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
          <div className="flex w-full flex-row items-center justify-center gap-1 text-center">
            <p>Already have an account? </p>
            <Link href="login" className="text-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
