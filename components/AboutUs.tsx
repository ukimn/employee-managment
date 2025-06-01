import React from 'react'
import FeatureCard from "@/components/featureCard";
import {FeatureCards} from "@/lib/data"


const AboutUs = () => {
    return (
        <div className={"flex items-center flex-col justify-center mt-8 mb-4"} id={"about"}>
            <div className={"mb-10"}>
                <h1 className={"text-3xl font-semibold"}>Our Features</h1>
            </div>
            <div className={"grid max-sm:grid-cols-1 grid-cols-3"}>
                {FeatureCards.map((featureCard, i) => {
                    return <FeatureCard key={i} title={featureCard.title} content={featureCard.content}>
                        {featureCard.children}
                    </FeatureCard>
                })}
            </div>
        </div>
    )
}
export default AboutUs
