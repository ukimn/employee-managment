import HomePage from "@/components/HomePage";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};
export default Home;
