import React from 'react'
import PricingCard from "@/components/PricingCard";
import {PricingCardData} from "@/lib/data";

const PricingPage = () => {
    return (
        <div id={"pricing"} className={"flex items-center flex-col space-y-4 justify-center pb-6 pt-4 bg-blue-500 text-white rounded-t-[35px]"}>
            <h1 className={"text-3xl font-semibold"}>Pricing</h1>
            <div className={"grid grid-cols-3 max-sm:grid-cols-1 gap-3"}>
                {PricingCardData.map((pricing, i) => (
                    <PricingCard {...pricing} key={i}/>
                ))}
            </div>
        </div>
    )
}
export default PricingPage
