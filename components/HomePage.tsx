"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AboutUs from "@/components/AboutUs";
import PricingPage from "@/components/PricingPage";

const HomePage = () => {

    return (
        <>
            <div className={"h-[80vh] flex items-center justify-between px-7 bg-blue-500 rounded-b-[35px] text-white"}>
                <div>
                    <DotLottieReact
                        key="employee-animation" // Add unique key
                        loop
                        autoplay
                        src={"/Employee_animation.lottie"}
                        className={"h-100 w-full max-w-md"} // Added width constraints
                    />
                </div>
                <div className={"flex items-center justify-center flex-col space-y-10"}>
                    <h1 className={"text-3xl font-semibold"}>You're Employees
                        <span className={"py-2 px-2 bg-white rounded-sm text-blue-500 ml-3"}>are here!</span>
                    </h1>
                    <p className="w-120 text-2xl font-semibold">
                        My Employee Website helps you manage everything in your company.
                        You can handle all employee-related tasks, create teams,
                        and <span className="font-extrabold">much more</span>!
                    </p>
                    <Link href={"/app/dashboard"} className={buttonVariants({variant: "secondary"})}>
                        Employees Dashboard
                    </Link>
                </div>
            </div>
            <AboutUs/>
            <PricingPage/>
        </>
    );
};

export default HomePage;