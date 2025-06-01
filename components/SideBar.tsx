import { IoMdHome } from "react-icons/io"
import { IoPersonSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: IoMdHome,
    },
    {
        title: "Employees",
        url: "/dashboard/employees",
        icon: IoPersonSharp
    },
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                        <Link href={"/"} >
                            <FaArrowLeft size={30} className={"mt-4 hover:bg-gray-200 duration-200 rounded-full p-2"}/>
                        </Link>
                    <SidebarGroupLabel className={"text-3xl font-bold my-5"}>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
