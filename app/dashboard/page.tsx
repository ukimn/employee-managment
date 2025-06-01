import React from 'react'
import BarChar from "@/components/BarChar"
import DashboardCard from "@/components/DashboardCard"
import {dashboardCard} from "@/lib/data";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    return (
        <div className="w-full">
            <h1 className="text-5xl text-center font-medium mb-6">Hi, {session?.user.name}</h1>
            <div className="w-full">
                {/* Dashboard Cards Row - using flex with wrap */}
                <div className="flex flex-wrap w-full gap-4 mb-8">
                    {dashboardCard.map((card, i) => (
                        <div key={i} className="flex-grow min-w-[200px]">
                            <DashboardCard {...card}/>
                        </div>
                    ))}
                </div>

                {/* Chart Section - full width */}
                <div className="w-full">
                    <BarChar />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage