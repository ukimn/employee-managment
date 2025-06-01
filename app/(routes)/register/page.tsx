"use client";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterSchema, ReigsterSchemaType } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as registerUser } from "@/app/actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm<ReigsterSchemaType>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: ReigsterSchemaType) => {
    try {
      const { success, error } = await registerUser(
        data.email,
        data.password,
        data.name
      );

      if (!success) {
        toast.error(error || "Registration failed");
        return;
      }

      reset();
      toast.success("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.";

      toast.error(errorMessage);
    }
    redirect("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Welcome!</h1>
          <p className="text-indigo-100 mt-1">Create a new Account</p>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </Label>
            <div className="flex space-y-0.5 flex-col">
              <Input
                id="name"
                type="text"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                {...register("name")}
              />
              <p className="text-red-500 text-lg font-medium">
                {errors?.name?.message}
              </p>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <div className="flex space-y-0.5 flex-col">
              <Input
                id="email"
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                {...register("email")}
              />
              <p className="text-red-500 text-lg font-medium">
                {errors?.email?.message}
              </p>
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2 relative">
            <div className="flex justify-between items-center">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
            </div>
            <div className="flex space-y-0.5 flex-col">
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                  {...register("password")}
                />
                <p className="text-red-500 text-lg font-medium">
                  {errors?.password?.message}
                </p>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
                </Button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting
                ? "transition-transform -translate-y-0.5 cursor-not-allowed bg-indigo-900"
                : ""
            } bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors`}
          >
            Sign in
          </Button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
