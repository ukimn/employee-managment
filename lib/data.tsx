// Icons
import {IoIosSpeedometer} from "react-icons/io";
import {GrSecure} from "react-icons/gr";
import {VscChip} from "react-icons/vsc";
// Interface of Arrays
import {IDashboardCardProps, IFeatureCardProps, IPricngCard} from "@/lib/Props";

// Feature Card Array
export const FeatureCards: IFeatureCardProps[] = [
    {
        children: <IoIosSpeedometer size={40}/>,
        title: "Speed",
        content: "Our Website has a big speed. You can manage your employees stuff easily."
    },
    {
        children: <GrSecure size={40}/>,
        title: "Secure",
        content: "All your data is secure. We have 100 certificates about our security."
    },
    {
        children: <VscChip size={40}/>,
        title: "Efficiency",
        content: "You can run our website on Sony Ericsson and will work. You can run it on a potato."
    }
]

export const PricingCardData: IPricngCard[] = [
    {
        title: "Gift",
        type: 0,
        description: "It's a free trial - a gift for you!",
        features: [
            "5GB free space",
            "20 employees",
            "3 companies"
        ]
    },
    {
        title: "Standard",
        type: 15,
        description: "This is the basic package for our customers.",
        features: [
            "20GB free space",
            "120 employees",
            "10 companies"
        ]
    },
    {
        title: "Hero",
        type: 240,
        description: "Pay once, use forever.",
        features: [
            "1TB free space",
            "Unlimited employees",
            "Unlimited companies"
        ]
    }
]

export const dashboardCard: IDashboardCardProps[] = [
    {
        title: "Employees",
        description: "The Number of Employees",
        content: "3200"
    },
    {
        title: "Revenue",
        description: "The Revenues of the last month",
        content: "$12000.00"
    },
    {
        title: "Customers",
        description: "The Customers of the last month",
        content: "32420",
    }
]
