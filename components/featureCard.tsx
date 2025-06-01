import { SiFsecure } from "react-icons/si";
import { IFeatureCardProps } from "@/lib/Props";

const FeatureCard = ({ children, title, content }: IFeatureCardProps) => {
    return (
        <div className="w-[300px] p-5 perspective-1000 transition-all duration-400 hover:-translate-y-3">
            <div className="relative pt-[50px] border-3 border-white transform-style-preserve-3d bg-[linear-gradient(135deg,#0000_18.75%,#f3f3f3_0_31.25%,#0000_0),repeating-linear-gradient(45deg,#f3f3f3_-6.25%_6.25%,#ffffff_0_18.75%)] bg-[length:60px_60px] bg-[position:0_0,0_0] bg-[#f0f0f0] w-full shadow-[0_30px_30px_-10px_rgba(142,142,142,0.3)] transition-all duration-500 ease-in-out hover:bg-[position:-100px_100px,-100px_100px] hover:rotate3d-[0.5,1,0,30deg]">
                {/* Content Box */}
                <div className="bg-[rgba(4,193,250,0.732)] transition-all duration-500 ease-in-out pt-[60px] px-6 pb-6 transform-style-preserve-3d">
                    <div className="flex items-start gap-4">
                        <div className="p-2 text-2xl text-white transform-translate-3d-[0px,0px,50px] hover:transform-translate-3d-[0px,0px,60px] transition-all duration-500 ease-in-out">
                            {children || <SiFsecure />}
                        </div>
                        <div className="flex-1 space-y-4">
                            <h1 className="text-2xl font-black text-white transform-translate-3d-[0px,0px,50px] hover:transform-translate-3d-[0px,0px,60px] transition-all duration-500 ease-in-out">
                                {title}
                            </h1>
                            <p className="text-sm font-bold text-[#f2f2f2] transform-translate-3d-[0px,0px,30px] hover:transform-translate-3d-[0px,0px,60px] transition-all duration-500 ease-in-out">
                                {content}
                            </p>
                        </div>
                    </div>

                    {/* See More Button */}
                    <button className="cursor-pointer mt-4 inline-block font-black text-xs uppercase text-[rgb(7,185,255)] bg-white px-3 py-2 transform-translate-3d-[0px,0px,20px] hover:transform-translate-3d-[0px,0px,60px] transition-all duration-500 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;