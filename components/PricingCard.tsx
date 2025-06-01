import React from 'react'
import {IPricngCard} from "@/lib/Props";
import {formatPrice} from "@/lib/utils";

const PricingCard = ({title, type, description, features}: IPricngCard) => {
    return (
        <div
            className="card max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="header p-6">
                <span className="title block text-2xl font-bold text-gray-800 mb-1">{title}</span>
                <span className="price block text-3xl font-extrabold text-indigo-600 mb-2">{type === 0 ? "Free" : formatPrice(type)}</span>
            </div>
            <p className="desc px-6 text-gray-600 mb-6">{description}</p>
            <ul className="lists px-6 mb-8 space-y-3">
                {features.map((feature, i) => {
                    return (
                        <li className="list flex items-center" key={i}>
                            <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="px-6 pb-6">
                <button type="button"
                        className="action w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PricingCard